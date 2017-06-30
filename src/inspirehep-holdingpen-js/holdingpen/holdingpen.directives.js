/*
 * This file is part of INSPIRE.
 * Copyright (C) 2016 CERN.
 *
 * INSPIRE is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 *
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */
(function (angular) {

  function holdingPenBatchDecision() {

    var controller = ["$scope", "HoldingPenRecordService", "$uibModal",
      function ($scope, HoldingPenRecordService, $uibModal) {

        $scope.modal = undefined;

        $scope.BatchUtils = {
          setDecision: function (type, decision) {
            console.debug($scope.vm.selected_record_decisions[type]);
            HoldingPenRecordService.setBatchDecision(
              $scope.vm.invenioSearchResults.hits.hits,
              $scope.vm.selected_record_decisions[type],
              decision)

            $scope.modal.dismiss('cancel');
          },

          showConfirm: function (data_type, operation) {
            $scope.data_type = data_type;
            $scope.operation = operation;

            $scope.modal = $uibModal.open({
              templateUrl: '/static/node_modules/inspirehep-holdingpen-js/dist/templates/modals/batch_' + operation + '_modal.html'
            });
          },

          hideConfirm: function() {
            $scope.modal.dismiss('cancel')
          },

          restartWorkflows: function () {
            for (var select_record_idx in $scope.vm.selected_records) {
              HoldingPenRecordService.restartWorkflow($scope.vm, $scope.vm.selected_records[select_record_idx]);
            }
            $scope.vm.batch_message = $scope.vm.selected_records.length + " workflows restarted."
          },

          resumeWorkflows: function () {
            for (var select_record_idx in $scope.vm.selected_records) {
              HoldingPenRecordService.resumeWorkflow($scope.vm, $scope.vm.selected_records[select_record_idx]);
            }
            $scope.vm.batch_message = $scope.vm.selected_records.length + " workflows resumed.";
            $scope.modal.dismiss('cancel');
          },

          deleteWorkflows: function () {
            for (var select_record_idx in $scope.vm.selected_records) {
              HoldingPenRecordService.deleteRecord($scope.vm, $scope.vm.selected_records[select_record_idx], false);
            }
            window.location = '/holdingpen/list';
            $scope.vm.batch_message = $scope.vm.selected_records.length + " workflows deleted.";
            $scope.modal.dismiss('cancel');
          },

          methodItemsChecked: function(method) {
            var numItemsChecked = $scope.vm.selected_record_methods[method];
            if (numItemsChecked && numItemsChecked > 0) {
              return true;
            }
            return false;
          }

        }
      }
    ];

    function templateUrl(element, attrs) {
      return attrs.template;
    }

    return {
      templateUrl: templateUrl,
      restrict: 'AE',
      scope: false,
      controller: controller
    };
  }

  function holdingPenDetail() {

    var controller = ["$scope", "HoldingPenRecordService", "$uibModal",  "$window",
      function ($scope, HoldingPenRecordService, $uibModal, $window) {
        $scope.vm = {};
        $scope.vm.loading = true;
        $scope.vm.new_subject_area = '';
        $scope.vm.new_keyword = '';
        $scope.vm.pdf_upload = false;
        $scope.vm.reason = '';
        $scope.vm.reason_index = 0;
        $scope.vm.reasons = [];
        $scope.modal = undefined;

        $scope.vm.inspire_categories = [
          "Accelerators",
          "Astrophysics",
          "Computing",
          "Data Analysis and Statistics",
          "Experiment-HEP",
          "Experiment-Nucl",
          "General Physics",
          "Gravitation and Cosmology",
          "Instrumentation",
          "Lattice",
          "Math and Math Physics",
          "Other",
          "Phenomenology-HEP",
          "Theory-HEP",
          "Theory-Nucl"
        ];

        $scope.vm.code_to_inspire_categories = {
          'a': 'Astrophysics',
          'b': 'Accelerators',
          'c': 'Computing',
          'e': 'Experiment-HEP',
          'g': 'Gravitation and Cosmology',
          'i': 'Instrumentation',
          'l': 'Lattice',
          'm': 'Math and Math Physics',
          'n': 'Theory-Nucl',
          'o': 'Other',
          'p': 'Phenomenology-HEP',
          'q': 'General Physics',
          't': 'Theory-HEP',
          'x': 'Experiment-Nucl',
        };

        $scope.degree_types = [
          {value: 'Bachelor', text: 'Bachelor'},
          {value: 'Habilitation', text: 'Habilitation'},
          {value: 'Laurea', text: 'Laurea'},
          {value: 'Diploma', text: 'Diploma'},
          {value: 'Masters', text: 'Master'},
          {value: 'PhD', text: 'PhD'},
          {value: 'Thesis', text: 'Thesis'}
        ];

        $scope.doUpdate = function () {
          $scope.vm.update_ready = true;
          $scope.vm.saved = false;
          $scope.$emit();
        };

        HoldingPenRecordService.getRecord($scope.vm, $scope.workflowId);

        $scope.$watch(
          'vm.record.metadata', updateRejectReasons, true
        );

        $scope.$watch(
          'vm.reason_index', chooseReason
        );

        function chooseReason(index) {
          if (index === undefined || !$scope.vm.reasons.length) {
            return
          }
          $scope.vm.reason = $scope.vm.reasons[index].content;
        }

        /*
         Runs when vm.record.metadata is updated to always have the reason template
         dynamically generated.
         */
        function updateRejectReasons(record) {
          if (
            !record ||
            ($scope.vm.record._workflow.data_type !== 'hep') ||
            !(record.acquisition_source.method === 'submitter')
          ) {
            return;
          }
          $scope.vm.reasons = [{
            title: "Rejection",
            content: `Dear ` + record.acquisition_source.email + `,

            Thanks for suggesting "` + record.titles[0].title + `". We regret to inform you that we cannot include it in our database as it is outside the focus of INSPIRE. For details please check our collection policy at: https://inspirehep.net/info/hep/collection-policy.

            Thanks again for collaborating with INSPIRE! We are looking forward to further suggestions you might have.`
          },
            {
              title: "Duplicate",
              content: `Dear ` + record.acquisition_source.email + `,

            Thanks for suggesting "` + record.titles[0].title + `". We already have it in our database, you can find it here: http://inspirehep.net/record/INSERT_RECID.

            Thanks again for collaborating with INSPIRE! We are looking forward to further suggestions you might have.`
            },
            {
              title: "Will be harvested",
              content: `Dear ` + record.acquisition_source.email + `,

            Thanks for suggesting "` + record.titles[0].title + `". This article was published in a journal that we harvest automatically as part of our regular workflow. It is still in the queue of papers being processed and should appear in the coming weeks.

            Thanks again for collaborating with INSPIRE! We are looking forward to further suggestions you might have.`
            }
          ];
        }

        $scope.Utils = {
          keys: function (obj) {
            if (obj != null)
              return Object.keys(obj);
            return [];
          },

          setRejectionReason: function() {
            $scope.modal = $uibModal.open({
              templateUrl: '/static/node_modules/inspirehep-holdingpen-js/dist/templates/modals/rejection_reason_modal.html',
              scope: $scope
            });
          },

          showRejectionReason: function() {
            $scope.modal = $uibModal.open({
              templateUrl: '/static/node_modules/inspirehep-holdingpen-js/dist/templates/modals/generic_info_modal.html',
              scope: angular.extend($scope,
                {
                  modalTitle: 'Reason for rejection',
                  modalBody: '<pre class="text-wrap">' + $scope.vm.record._extra_data.reason + '</pre>'
                }
              )
            });
          },

          updateRecord: function () {
            HoldingPenRecordService.updateRecord($scope.vm, $scope.workflowId)
          },

          setDecision: function (decision) {
            HoldingPenRecordService.updateRecord($scope.vm, $scope.workflowId)
              .then(function successCallback(response) {
                HoldingPenRecordService.setDecision($scope.vm, $scope.workflowId, decision)
              });
          },

          redirect: function (url) {
            $window.location = url;
          },

          addSubjectArea: function () {
            function _subjectAlreadyPresent(subject) {
              for (var i=0; i<$scope.vm.record.metadata.inspire_categories.length; i++) {
                if ($scope.vm.record.metadata.inspire_categories[i].term === subject) {
                  return true;
                }
              }
              return false;
            }

            if ($scope.vm.new_subject_area in $scope.vm.code_to_inspire_categories) {
              $scope.vm.new_subject_area = $scope.vm.code_to_inspire_categories[$scope.vm.new_subject_area];
            }

            if ($scope.vm.inspire_categories.indexOf($scope.vm.new_subject_area) == -1) {
              return;
            }
            if (!_subjectAlreadyPresent($scope.vm.new_subject_area)) {
              $scope.vm.record.metadata.inspire_categories.unshift({
                'source': 'curator',
                'term': $scope.vm.new_subject_area
              });
              $scope.vm.new_subject_area = '';
              $scope.doUpdate();
            }
          },

          addKeyword: function () {
            if (!$scope.vm.new_keyword) {
              return;
            };
            if (!$scope.vm.record._extra_data.keywords_prediction)
              $scope.vm.record._extra_data.keywords_prediction = {};

            if (!$scope.vm.record._extra_data.keywords_prediction.keywords)
              $scope.vm.record._extra_data.keywords_prediction.keywords = [];

            $scope.vm.record._extra_data.keywords_prediction.keywords.unshift({
              'score': 1.0,
              'label': $scope.vm.new_keyword,
              'accept': true
            });
            $scope.vm.new_keyword = '';
            $scope.doUpdate();
          },

          deleteSubject: function (index) {
            var categories = $scope.vm.record.metadata.inspire_categories ||
              $scope.vm.record.metadata.arxiv_categories;
            if (index < categories.length)
              categories.splice(index, 1);
            $scope.doUpdate();
          },

          deleteRecord: function () {
            HoldingPenRecordService.deleteRecord($scope.vm, $scope.workflowId, true)
          },

          registerUpdateEvent: function () {
            $scope.doUpdate();
          },

          resumeWorkflow: function () {
            HoldingPenRecordService.resumeWorkflow($scope.vm, $scope.workflowId)
          },

          restartWorkflow: function () {
            HoldingPenRecordService.restartWorkflow($scope.vm, $scope.workflowId)
          }
        }
      }
    ];

    function templateUrl(element, attrs) {
      return attrs.template;
    }

    return {
      templateUrl: templateUrl,
      restrict: 'AE',
      scope: {
        workflowId: '@workflowId'
      },
      controller: controller
    };
  }

  function holdingPenTemplateHandler() {
    function templateUrl(element, attrs) {
      return attrs.template;
    }

    return {
      templateUrl: templateUrl,
      restrict: 'AE',
      scope: true
    };
  }

  function holdingPenDecision() {
    function templateUrl(element, attrs) {
      return attrs.template;
    }

    return {
      templateUrl: templateUrl,
      restrict: 'AE',
      scope: {
        Utils: "=utils",
        "record": "=record"
      }
    };
  }

  function holdingPenDashboardItem() {

    var controller = ["$scope", "$http",
      function ($scope, $http) {
        $scope.get_filter_string = function (extra_string=''){
          var query_string = ''
          if (extra_string !== '') {
            query_string = '?'
          }
          if ($scope.filterString !== undefined) {
            query_string = '?' + $scope.filterString + '&'
          }
          query_string += extra_string
          return query_string
        }
        $http.get('/api/holdingpen/'
          + $scope.get_filter_string($scope.filterString))
          .then(function (response) {
            $scope.vm = $scope;
            $scope.vm.total = response.data.hits.total;
            $scope.vm.secondary_filters = {
              'WAITING': 0,
              'ERROR': 0,
              'HALTED': 0,
              'COMPLETED': 0
            };

            for (var bucket_idx in response.data.aggregations[$scope.secondaryFilter].buckets) {
              var bucket = response.data.aggregations[$scope.secondaryFilter].buckets[bucket_idx];
              $scope.vm.secondary_filters[bucket.key] = +bucket.doc_count;
            }

            $scope.vm.class_name = $scope.sectionTitle.toLowerCase().replace(/ /g, "-")

          }).catch(function (value) {
          console.error("Problem occurred when getting " + $scope.primary_filter_key);
        });
      }
    ];

    function templateUrl(element, attrs) {
      return attrs.template;
    }

    return {
      templateUrl: templateUrl,
      restrict: 'AE',
      scope: {
        sectionTitle: '@sectionTitle',
        filterString: '@filterString',
        secondaryFilter: '@secondaryFilter'
      },
      controller: controller
    };
  }

  function autocomplete($timeout) {

    return function (scope, iElement, iAttrs) {
      var _item_id = iElement.attr("id");
      $("#" + iElement.attr("id")).autocomplete({
        source: scope.vm[iAttrs.uiItems],
        select: function (event, ui) {
          $timeout(function () {
            $(this).val((ui.item ? ui.item.value : ""));
            scope.vm[_item_id] = ui.item.value;
            $("#" + iElement.attr("id")).trigger('input');
          }, 0);
        }
      });

    };
  }

  angular.module('holdingpen.directives', [])
    .directive('holdingPenDecision', holdingPenDecision)
    .directive('holdingPen', holdingPenDetail)
    .directive('holdingPenBatchDecision', holdingPenBatchDecision)
    .directive('holdingPenDashboardItem', holdingPenDashboardItem)
    .directive('holdingPenTemplateHandler', holdingPenTemplateHandler)
    .directive('autocomplete', autocomplete);

})(angular);
