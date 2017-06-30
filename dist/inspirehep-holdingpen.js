/*
 * This file is part of INSPIRE.
 * Copyright (C) 2017 CERN.
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

  var inspirehepHoldingPen = angular.module("inspirehepHoldingPen", ['xeditable',
    'ui.bootstrap',
    'fps.hotkeys',
    'holdingpen',
    'holdingpen.filters',
    'angular.filter'
  ]);

  inspirehepHoldingPen.run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-md';
    editableThemes.bs3.buttonsClass = 'btn-md';
    editableOptions.theme = 'bs3';
  }]);

})(angular);

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

  // Setup everything
  angular.module('inspirehepSearch', [
    'invenioSearch',
    'inspirehepFacetsShowMore',
    'inspirehepExport',
    'inspirehepPermissions',
    'inspirehepSearch.filters',
    'ui.bootstrap',
    'authors'
  ]);

})(angular);

/*
 * This file is part of INSPIRE.
 * Copyright (C) 2017 CERN.
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

 angular.module("holdingpen", ['xeditable',
    'ui.bootstrap',
    'fps.hotkeys',
    'holdingpen.directives',
    'holdingpen.controllers',
    'holdingpen.services',
    'angular.filter'
  ]);

  invenioHoldingPen.run(['editableOptions', 'editableThemes', function (editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-md';
    editableThemes.bs3.buttonsClass = 'btn-md';
    editableOptions.theme = 'bs3';
  }]);

})(angular);

holding(function(angular) {

  angular.module('holdingpen.filters', [
    'holdingpen.filters.abstract',
    'holdingpen.filters.categories',
  ]);
             

})(angular);

holding(function(angular) {

  angular.module('authors', [
    'ui.bootstrap',
    'authors.directives',
    'authors.controllers'
  ]);
             

})(angular);

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

  // Setup module
  angular.module('inspirehepSearch.filters', [
    'ngSanitize', // Allows displaying non-escaped-HTML in filters
    'inspirehepSearch.filters.abstract',
    'inspirehepSearch.filters.authorInstitution',
    'inspirehepSearch.filters.arxiv',
    'inspirehepSearch.filters.arxivInfo',
    'inspirehepSearch.filters.capitalize',
    'inspirehepSearch.filters.collaboration',
    'inspirehepSearch.filters.corporateAuthor',
    'inspirehepSearch.filters.date',
    'inspirehepSearch.filters.datePassedNow',
    'inspirehepSearch.filters.doi',
    'inspirehepSearch.filters.publicationInfo',
    'inspirehepSearch.filters.publicationInfoDoi',
    'inspirehepSearch.filters.conferenceFormat',
    'inspirehepSearch.filters.journalFormat',
    'inspirehepSearch.filters.reportNumber',
    'inspirehepSearch.filters.title'
  ]);

})(angular);

(function(angular) {

  angular.module('inspirehepPermissions', [
    'permissions.directives',
    'permissions.controllers'
  ]);


})(angular);

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

  function HoldingPenSelectionCtrl($scope, Hotkeys, HoldingPenRecordService, $window) {

    $scope.vm.selected_records = [];
    $scope.vm.selected_record_decisions = {};
    $scope.vm.selected_record_methods = {};

    $scope.toggleSelection = toggleSelection;
    $scope.toggleAll = toggleAll;
    $scope.isChecked = isChecked;
    $scope.allChecked = allChecked;
    $scope.setDecision = setDecision;
    $scope.redirect = redirect;

    function _add_record_method(record) {
      method = record._source.metadata.acquisition_source.method;
      if (method in $scope.vm.selected_record_methods) {
        $scope.vm.selected_record_methods[method]++;
      }
      else {
        $scope.vm.selected_record_methods[method] = 1;
      }
    }

    function _remove_record_method(record) {
      method = record._source.metadata.acquisition_source.method;
      $scope.vm.selected_record_methods[method]--;
    }

    function redirect(url) {
      $window.location = url;
    }

    function getItemIdx(id) {
      return $scope.vm.selected_records.indexOf(+id);
    }

    function toggleSelection(record) {
      var _data_type = record._source._workflow.data_type;

      if (isChecked(record._id)) {
        _remove_record_method(record);
        $scope.vm.selected_records.splice(getItemIdx(+record._id), 1);
        if (_data_type in $scope.vm.selected_record_decisions) {
          $scope.vm.selected_record_decisions[_data_type]
            .splice($scope.vm.selected_record_decisions[_data_type]
              .indexOf(+record._id), 1);
        }
      }
      else {
        _add_record_method(record);
        $scope.vm.selected_records.push(+record._id);
        if (_data_type) {
          if (!(_data_type in $scope.vm.selected_record_decisions)) {
            $scope.vm.selected_record_decisions[_data_type] = [];
          }
          if(record._source._extra_data === undefined ||
            record._source._extra_data.user_action == undefined)
            $scope.vm.selected_record_decisions[_data_type].push(+record._id);
        }
      }
    }

    function setDecision(id, decision) {
      HoldingPenRecordService.setBatchDecision(
        $scope.vm.invenioSearchResults.hits.hits, [+id], decision)
    }

    function toggleAll() {

      var remove_all = allChecked();
      if (remove_all) {
        reset();
      } else {
        angular.forEach($scope.$parent.vm.invenioSearchResults.hits.hits,
          function (record) {
            if (!isChecked(record._id)) {
              _add_record_method(record);
              $scope.vm.selected_records.push(+record._id);
              if (record._source._workflow.data_type) {
                if (!(record._source._workflow.data_type
                  in $scope.vm.selected_record_decisions)) {
                  $scope.vm.selected_record_decisions[
                    record._source._workflow.data_type] = [];
                }

                if(record._source._extra_data === undefined || record._source._extra_data.user_action == undefined)
                  $scope.vm.selected_record_decisions[record._source._workflow.data_type]
                    .push(record._id);
              }
            }
          });
      }
    }

    function isChecked(id) {
      return getItemIdx(+id) !== -1;
    }

    function allChecked() {
      if (!$scope.$parent.vm.invenioSearchResults.hits) {
        return false;
      }
      return $scope.vm.selected_records.length ===
        $scope.$parent.vm.invenioSearchResults.hits.hits.length;
    }

    function reset() {
      $scope.vm.selected_records = [];
      $scope.vm.selected_record_decisions = {};
      $scope.vm.selected_record_methods = [];
    }

    var hotkey = Hotkeys.createHotkey({
      key: 'ctrl+a',
      callback: function (e) {
        e.preventDefault();
        toggleAll();
      }
    });

    Hotkeys.registerHotkey(hotkey);

    $scope.$on('invenio.search.success', reset);
  }

  HoldingPenSelectionCtrl.$inject = ['$scope', 'Hotkeys', 'HoldingPenRecordService', '$window'];

  angular.module('holdingpen.controllers', [])
    .controller('HoldingPenSelectionCtrl', HoldingPenSelectionCtrl);

})(angular);

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
  /**
   * HoldingPenRecordService allows for the getting, update and resolution of
   * workflow records.
   */
  angular.module('holdingpen.services', [])
    .factory("HoldingPenRecordService", ["$http",
        function ($http) {

          return {

            getRecord: function (vm, workflowId) {
              $http.get('/api/holdingpen/' + workflowId).then(function (response) {
                vm.record = response.data;
                if (vm.record._workflow.data_type == 'authors') {
                  $('#breadcrumb').html(vm.record.metadata.name.value);
                } else {
                  $('#breadcrumb').html(vm.record.metadata.titles[0].title.substring(0, 70) + '...');
                }
              }).catch(function (value) {
                vm.ingestion_complete = false;
                alert(value);
              });
            },

            updateRecord: function (vm, workflowId) {
              return $http.post('/api/holdingpen/' + workflowId + '/action/edit', vm.record).then(function (response) {
                vm.saved = true;
                vm.update_ready = false;
              }).catch(function (value) {
                vm.saved = false;
                vm.update_ready = true;
                alert('Sorry, an error occurred when saving. Please try again.');
              });
            },

            setDecision: function (vm, workflowId, decision) {

              var data = JSON.stringify({
                'value': decision,
                'pdf_upload': vm.pdf_upload,
                'reason': vm.reason
              });

              $http.post('/api/holdingpen/' + workflowId + '/action/resolve', data).then(function (response) {
                vm.ingestion_complete = true;
                var record = vm.record;
                if (!record) record = vm;

                if(!record._extra_data) {
                  record._extra_data = {};
                }

                record._extra_data.user_action = decision;
                record._extra_data._action = null;

              }).catch(function (value) {
                vm.error = value;
              });
            },

            setBatchDecision: function (records, selected_record_ids, decision) {

              for (var record_idx in selected_record_ids) {

                var _id = selected_record_ids[record_idx];
                var _data = JSON.stringify({
                  'value': decision,
                  'id': _id
                });

                $http.post('/api/holdingpen/' + _id + '/action/resolve', _data).then(function (response) {
                  var _data = JSON.parse(response.config.data);
                  for (var record_idx in records) {
                    if (+_data.id === +records[record_idx]._id) {
                      var record_obj = records[record_idx]._source;
                      if(!record_obj._extra_data) {
                        record_obj._extra_data = {};
                      }
                      record_obj._extra_data.user_action = decision;
                      record_obj._workflow.status = 'WAITING';
                    }
                  }
                });
              }
              selected_record_ids = [];
            },

            deleteRecord: function (vm, workflowId, reload) {
              $http.delete('/api/holdingpen/' + workflowId, vm.record).then(function (response) {
                vm.ingestion_complete = true;
                if (reload)
                  window.location = '/holdingpen/list/'
              }).catch(function (value) {
                vm.ingestion_complete = false;
              });
            },

            resumeWorkflow: function (vm, workflowId) {
              $http.post('/api/holdingpen/' + workflowId + '/action/resume').then(function (response) {
                vm.workflow_flag = 'Workflow resumed';
              }).catch(function (value) {
                vm.resumed = false;
              });
            },

            restartWorkflow: function (vm, workflowId) {
              $http.post('/api/holdingpen/' + workflowId + '/action/restart').then(function (response) {
                vm.workflow_flag = 'Workflow restarted';
              }).catch(function (value) {
                vm.restarted = false;
              });
            }
          }
        }
      ]
    )
  ;
}(angular));

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

  function abstractFilter() {
    return function(input) {
      if (input === undefined) {
        return;
      }

      var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
      };

      function replaceTag(tag) {
        return tagsToReplace[tag] || tag;
      }

      var abstract = '';
      for (var i=0; i < input.length; i++) {
        if (input[i].source !== 'arXiv' && input[i].value !== undefined) {
          abstract = input[i].value;
        } else {
          if (input[i].value !== undefined) {
            abstract = input[i].value;
          }
        }
      }
      return abstract.replace(/[&<>]/g, replaceTag);
    };
  }

  angular.module('holdingpen.filters.abstract', ['ngSanitize'])
    .filter('abstract', abstractFilter);

})(angular);

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

  function categoriesFilter() {
    return function (record) {
      var inspireCategories = record.inspire_categories;
      var arxivEprints = record.arxiv_eprints;
      var arxivCategories = record.arxiv_categories;
      var categories = [];

      if (inspireCategories) {
        for (var i = 0; i < inspireCategories.length; i++) {
          categories.push(inspireCategories[i].term);
        }
      }

      if (arxivEprints) {
        for (var i = 0; i < arxivEprints.length; i++) {
          var eprintCategories = arxivEprints[i].categories;
          for (var j = 0; j < eprintCategories.length; j++) {
            categories.push(eprintCategories[j]);
          }
        }
      } else if (arxivCategories) {
        for (var i = 0; i < arxivCategories.length; i++) {
          categories.push(arxivCategories[i]);
        }
      }

      var uniqueCategories = categories.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      return uniqueCategories;
    }
  }

  angular.module('holdingpen.filters.categories', [])
    .filter('categories', categoriesFilter);

})(angular);

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

(function(angular) {

  function authorCtrl($scope) {
    var vm = this; 
      
    vm.getAuthors = getAuthors;
    vm.splitAuthorName = splitAuthorName;
    vm.renderAuthorNames = renderAuthorNames;

    function getAuthors() {
      var authors_list = [];
      if (vm.authors !== undefined) {
        for (var i=0; i<vm.authors.length; i++) {
          if (vm.authors[i].full_name) {
            authors_list.push(renderAuthorNames(vm.authors[i]));
          }
        } 
        return authors_list;
      }
    }

    function splitAuthorName(authorName) {
      var new_name = authorName.split(',');
      var reversed = new_name.reverse();
      return reversed.join(' ');
    }

    function renderAuthorNames(author) {
      var obj_author = {};
      obj_author.full_name = author.full_name;
      if (author.affiliations !== undefined && author.affiliations.length > 0) {
          obj_author.affiliation = author.affiliations[0].value;
      }
      return obj_author;
    }

  }

  authorCtrl.$inject = ['$scope'];

  angular.module('authors.controllers', [])
    .controller('authorCtrl', authorCtrl);

})(angular);

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
 
(function(angular) {

  function authorsAffiliation() {

    function link(scope, element, attrs, vm) {

      if (attrs.authors !== '') {
        vm.authors = JSON.parse(attrs.authors);          
      }

      if (attrs.collaboration !== '') {
        vm.collaboration = JSON.parse(attrs.collaboration);  
      }

      vm.numberOfAuthors = parseInt(attrs.numberOfAuthors);

      vm.controlNumber = parseInt(attrs.controlNumber);

      vm.AUTHORS_LIMIT = 10;

      vm.authorsInfo = vm.getAuthors();
   
    }

    function templateUrl(element, attrs) {
      return attrs.authorsTemplate;
    }

    return {
        templateUrl: templateUrl,
        restrict: 'E',
        controller: 'authorCtrl',
        controllerAs: 'vm',
        scope: true,
        link: link
      };
  }


  angular.module('authors.directives', [])
    .directive('authorsAffiliation', authorsAffiliation);

})(angular);

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
* In applying this license, CERN does not
* waive the privileges and immunities granted to it by virtue of its status
* as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {

  function abstractFilter() {
    return function(input) {
      if (input === undefined) {
        return;
      }
      
      var tagsToReplace = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;'
      };
      
      function replaceTag(tag) {
        return tagsToReplace[tag] || tag;
      }

      var abstract = '';
      for (var i=0; i < input.length; i++) {
        if (input[i].source !== 'arXiv' && input[i].value !== undefined) {
          abstract = input[i].value;
        } else {
          if (input[i].value !== undefined) {
            abstract = input[i].value;
          }
        }
      }
      return abstract.replace(/[&<>]/g, replaceTag);
    };
  }
  angular.module('inspirehepSearch.filters.abstract', [])
    .filter('abstract', abstractFilter);
})(angular);
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
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {
  
  function arxivFilter() {
    return function(input) {
      if ( input === undefined ) {
        return;
      }

      var eprint = '';
      for (var i=0; i < input.length; i++) {
        eprint = input[i].value;
        break;
      }

      return eprint;
    };
  }
  angular.module('inspirehepSearch.filters.arxiv', [])
    .filter('arxiv', arxivFilter);

})(angular);
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
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {
  
  function arxivInfoFilter() {
    return function(input) {
      if ( input === undefined ) {
        return;
      }
      var eprint = '';
      var categories = '';
      for (var i=0; i < input.length; i++) {
          eprint = 'e-Print: <a href="http://arxiv.org/abs/' + 
              input[i].value + '" >' + input[i].value + '</a>';
          if (input[i].categories) {
            categories = '[' +  input[i].categories[0] + ']';
          }
      }
      return eprint + ' ' + categories;
    };
  }
  angular.module('inspirehepSearch.filters.arxivInfo', [])
    .filter('arxivInfo', arxivInfoFilter);

})(angular);
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
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {

  function authorInstitutionFilter() {
    return function(input) {
      if ( input === undefined ) {
        return;
      }

      var first_institution  = '';
      for ( var i=0; i<input.length; i++ ) {
        if ( typeof input[i].institution !== 'undefined' && typeof input[i].institution.name !== 'undefined') {
          if ( typeof input[i].status !== 'undefined' && input[i].status.toLowerCase() === 'current' ) {
            return '(' + input[i].institution.name + ')';
          }
          else if ( !first_institution ) {
            first_institution = input[i].institution.name;
          }
        }
      }
      if ( first_institution ) {
          return '(' + first_institution + ')';
      }
    };
  }

  angular.module('inspirehepSearch.filters.authorInstitution', [])
    .filter('authorInstitution', authorInstitutionFilter);

})(angular);

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

  function capitalizeFilter() {
    return function (token) {
      if (!token) {
        return '';
      }
      return token.charAt(0).toUpperCase() + token.slice(1);
    };
  }

  angular.module('inspirehepSearch.filters.capitalize', [])
    .filter('capitalize', capitalizeFilter);

})(angular);
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
* In applying this license, CERN does not
* waive the privileges and immunities granted to it by virtue of its status
* as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {
  
  function collaborationFilter() {
    return function(collaboration, corporate_author) {
      if ( collaboration === undefined ) {
        return;
      }
      
      var col = [];
      var result = '';
      if (!corporate_author) {
        for (var i=0; i < collaboration.length; i++) {
          if (collaboration[i].value) {
            col.push('<a href="/search?p=collaboration:' + collaboration[i].value + 
              '">' + collaboration[i].value + '</a>');
          }
        }
      }

      if (col.length !== 0) {
        result = col.join(' and ') + (col.length > 1 ? ' Collaborations' : ' Collaboration');
      }

      return result;
      
    };
  }
  angular.module('inspirehepSearch.filters.collaboration', [])
    .filter('collaboration', collaborationFilter);

})(angular);
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

(function(angular) {

  function conferenceFormatFilter() {
    return function(input, with_pub_info) {
      if (input === undefined) {
        return;
      }

      var output = '';

      if (input['conference_recid'] && input['parent_recid']) {
        if ( with_pub_info ) {
          output += ' (<a href="/record/' + input['parent_recid'] +
                    '">Proceedings</a> of <a href="/record/' +
                    input['conference_recid'] + '">' +
                    input['conference_title'] + '</a>)';
        }
        else {
          output += 'Published in <a href="/record/' + input['parent_recid'] +
                    '">proceedings</a> of <a href="/record/' +
                    input['conference_recid'] + '">' +
                    input['conference_title'] + '</a>';
          if (input['page_start'] && input['page_end']) {
            output += ', pages ' + input['page_start'] + '-' + input['page_end'];
          }
        }
      }

      else if (input['conference_recid'] && !input['parent_recid']) {
        if ( with_pub_info ) {
          output += '<br>';
        }
        output += 'Contribution to <a href="/record/' + input['conference_recid'] +
                  '">' + input['conference_title'] + '</a>';
      }

      else if (!input['conference_recid'] && input['parent_recid']) {
        if ( with_pub_info ) {
           output += ' (<a href="/record/' + input['parent_recid'] +
                     '">Proceedings</a> of ' + input['parent_title'] + ')';
        }
        else {
          output += 'Published in <a href="/record/' + input['parent_recid'] +
                    '">proceedings</a> of ' + input['parent_title'];
        }
      }

      return output;
    };
  }

  angular.module('inspirehepSearch.filters.conferenceFormat', [])
    .filter('conferenceFormat', conferenceFormatFilter);

})(angular);

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

(function(angular) {
  
  function corporateAuthorFilter() {
    return function(input, corporate_author) {
      if ( input === undefined ) {
        if (corporate_author) {
          return corporate_author[0];
        } 
        return;
      }
    };
  }

  angular.module('inspirehepSearch.filters.corporateAuthor', [])
    .filter('corporateAuthor', corporateAuthorFilter);

})(angular);

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

(function(angular) {
  
  function dateFilter() {
    return function(date, authors, collaboration, corporate_author) {
      if ( authors === undefined &&  collaboration === undefined && corporate_author === undefined) {
        return date;
      } else {
        return '- ' + date;
      }
    };
  }

  angular.module('inspirehepSearch.filters.date', [])
    .filter('date', dateFilter);

})(angular);
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

    function datePassedNowFilter() {
        return function (token) {
            var current_date = new Date();
            var date = new Date(token);
            return date >= current_date;
        };
    }

    angular.module('inspirehepSearch.filters.datePassedNow', [])
        .filter('datePassedNow', datePassedNowFilter);

})(angular);
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

(function(angular) {
  
  function doiFilter() {
    return function(input) {
      if ( input === undefined ) {
        return;
      }
      
      var dois = [];
      for (var i=0; i < input.length; i++) {
        if (input[i].value) {
          dois.push('<a href="http://dx.doi.org/' + input[i].value + '" title="DOI" >' + input[i].value + '</a>');
        }
      }

      if (dois.length !== 0) {
        return 'DOI: ' + dois.join(', ');
      } else {
        return '';
      }
    };
  }

  angular.module('inspirehepSearch.filters.doi', [])
        .filter('doi', doiFilter);

})(angular);
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

(function(angular) {

  function journalFormatFilter() {
    return function(input) {
      if (input === undefined) {
        return;
      }

      var output = '';

      if (input['journal_title']) {
        output += '<i>' + input['journal_title'] + '</i> ';

        if (input['journal_volume']) {
          output += input['journal_volume'];
        }
        if (input['year']) {
          output += ' ' + '(' + input['year'] + ')';
        }
        if (input['journal_issue']) {
          output += ' ' + input['journal_issue'] + ',';
        }
        if (input['page_start'] && input['page_end']) {
          output += ' ' + input['page_start'] + '-' + input['page_end'];
        }
        else if (input['page_start']) {
          output += ' ' + input['page_start'];
        }
        else if (input['artid']) {
          output += ' ' + input['artid'];
        }
      }
      else if (input['pubinfo_freetext']) {
        output += input['pubinfo_freetext'];
      }

      return output;
    };
  }

  angular.module('inspirehepSearch.filters.journalFormat', [])
    .filter('journalFormat', journalFormatFilter);

})(angular);

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

(function(angular) {

  function publicationInfoFilter(conferenceFormatFilter, journalFormatFilter) {
    return function(input, conference_info) {
      if (input === undefined) {
        return;
      }

      var pub_info = '';
      var formatted_journals = [];
      var i, len;
      for (i = 0, len = input.length; i < len; i++) {
        if (input[i]['journal_title']) {
          formatted_journals.push(journalFormatFilter(input[i]));
        }
      }

      if (formatted_journals) {
          pub_info = formatted_journals.join(' and ');
      }

      var formatted_conference = '';
      if (conference_info) {
        for (i = 0, len = conference_info.length; i < len; i++) {
          formatted_conference = conferenceFormatFilter(
            conference_info[i],
            formatted_journals.length
          );
          if (formatted_conference) {
              pub_info += ' ' + formatted_conference;
          }
        }
      }

      if (pub_info && formatted_journals.length) {
        return 'Published in ' + pub_info;
      }
      else {
        return pub_info;
      }
    };
  }

  angular.module('inspirehepSearch.filters.publicationInfo', [])
    .filter('publicationInfo',
      [
        'conferenceFormatFilter',
        'journalFormatFilter',
        publicationInfoFilter
      ]);

})(angular);

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

(function(angular) {

  function publicationInfoDoiFilter(conferenceFormatFilter, journalFormatFilter) {
    return function(input, pub_info, conference_info) {
      if (input === undefined) {
        return;
      }

      var pub_info_and_doi = 'Published in ';
      pub_info_and_doi += '<a href="http://dx.doi.org/' + input[0].value + '" title="DOI">'  +
          '<span class="text-left">' + journalFormatFilter(pub_info[0]) + '</span>' + '</a>';

      if (conference_info) {
        var formatted_conference = '';
        var i, len;
        for (i = 0, len = conference_info.length; i < len; i++) {
          formatted_conference = conferenceFormatFilter(conference_info[i], true);
          if (formatted_conference) {
            pub_info_and_doi += formatted_conference;
            break;
          }
        }
      }

      return pub_info_and_doi;
    };
  }

  angular.module('inspirehepSearch.filters.publicationInfoDoi', [])
    .filter('publicationInfoDoi',
      [
        'conferenceFormatFilter',
        'journalFormatFilter',
        publicationInfoDoiFilter
      ]);

})(angular);

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
* In applying this license, CERN does not
* waive the privileges and immunities granted to it by virtue of its status
* as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {
  
  function reportNumberFilter() {
    return function(input) {
      if (input === undefined) {
        return;
      }
      var reportNumbers = [];
      for (var i=0; i < input.length; i++) {
        if (input[i].value) {
          reportNumbers.push(' ' + input[i].value);
        }
      } 

      if (reportNumbers.length !== 0) {
        return 'Report number: ' + reportNumbers;
      } else {
        return '';
      }
    };
  }
  
  angular.module('inspirehepSearch.filters.reportNumber', [])
    .filter('reportNumber', reportNumberFilter);

})(angular);
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
* In applying this license, CERN does not
* waive the privileges and immunities granted to it by virtue of its status
* as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

(function(angular) {

  function titleFilter() {
    return function(input) {
      if (input === undefined) {
        return;
      }

      var title = '';
      if (input['title'] !== undefined) {
        title = input['title'];
        if (input['subtitle'] !== undefined) {
          title += ' : ' + input['subtitle'];
        }
      }
      return title;
    };
  }
  angular.module('inspirehepSearch.filters.title', [])
    .filter('title', titleFilter);
})(angular);
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

(function(angular) {

  function permissionsCtrl($scope, $element, $attrs) {
    $scope.is_authenticated = $attrs.isAuthenticated;
    $scope.user_roles = $attrs.userRoles;
    $scope.can_view_editor = can_view_editor();
    $scope.show_tools = show_tools;

    function show_tools() {
      return [$scope.can_view_editor].some(function(value) {
        return value === true;
      });
    }

    function can_view_editor() {
      if ($scope.is_authenticated) {
        if
          (
            (-1 !== $scope.user_roles.indexOf('cataloger')) ||
            (-1 !== $scope.user_roles.indexOf('superuser'))
          ) {
          return true;
        }
      }
      return false;
    }
  }

  permissionsCtrl.$inject = ['$scope', '$element', '$attrs'];

  angular.module('permissions.controllers', [])
    .controller('permissionsCtrl', permissionsCtrl);

})(angular);

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

(function(angular) {

  function inspirePermissions() {
    return {
      restrict: 'A',
      scope: true,
      controller: 'permissionsCtrl'
    };
  }


  angular.module('permissions.directives', [])
    .directive('inspirePermissions', inspirePermissions);

})(angular);
