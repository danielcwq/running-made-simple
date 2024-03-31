$(function () {
  var AdvancedOption;
  (function (AdvancedOption) {
    AdvancedOption[(AdvancedOption["temperature"] = 0)] = "temperature";
    AdvancedOption[(AdvancedOption["altitude"] = 1)] = "altitude";
    AdvancedOption[(AdvancedOption["off"] = 2)] = "off";
  })(AdvancedOption || (AdvancedOption = {}));
  var CalculationType;
  (function (CalculationType) {
    CalculationType[(CalculationType["fromTime"] = 0)] = "fromTime";
    CalculationType[(CalculationType["fromPace"] = 1)] = "fromPace";
  })(CalculationType || (CalculationType = {}));
  var VdotCalculatorPresenter = /** @class */ (function () {
    function VdotCalculatorPresenter(view, config) {
      this.selectedAdvancedOption = AdvancedOption.off;
      this.calculationType = CalculationType.fromTime;
      this.ignoreValueChanges = false;
      this.isEmbedMode = false;
      this.view = view || $("#vdot-calculator");
      this.isEmbedMode = $("body").hasClass("vdot-calculator-embed");
      this.promoMessage = $(".promo-message");
      this.embedPromoMessage = $(".vdot-calculator-container .promo-message");
      this.calculatorService = new CalculatorService();
      this.eventTypeSection = this.view.find(".event-type-section");
      this.eventTypeDropdown = this.view.find(".event-type");
      this.otherDistanceSection = this.view.find(
        ".event-other-distance-section"
      );
      this.otherDistanceTextField = this.view.find(
        ".event-other-distance .value-field"
      );
      this.otherDistanceUnitField = this.view.find(
        ".event-other-distance .unit-field"
      );
      this.timeTextField = this.view.find(".event-time");
      this.paceTextField = this.view.find(".pace-time .value-field");
      this.paceUnitField = this.view.find(".pace-time .unit-field");
      this.btnToggleAdvanced = this.view.find(".btn-toggle-advanced");
      this.advancedSection = this.view.find(".advanced-section");
      this.advancedTypeRadio = this.view.find(".effect-type-radio");
      this.temperatureContainer = this.view.find(".temperature-container");
      this.temperatureTextField = this.view.find(".temperature .value-field");
      this.temperatureUnitField = this.view.find(".temperature .unit-field");
      this.altitudeContainer = this.view.find(".altitude-container");
      this.altitudeTextField = this.view.find(".altitude .value-field");
      this.altitudeUnitField = this.view.find(".altitude .unit-field");
      this.submitSection = this.view.find(".form-group.submit");
      this.calculateButton = this.view.find(".btn-calculate");
      this.resetButton = this.view.find(".btn-reset");
      this.validationHint = this.view.find(".validation-hint");
      this.resultsSection = this.view.find(".results-section");
      this.racePacesResults = this.view.find("#vdot-race-paces-results");
      this.trainingResults = this.view.find("#vdot-training-results");
      this.equivalentResults = this.view.find("#vdot-equivalent-results");
      this.scoreHintBadge = this.view.find(".score-hint-badge");
      this.scoreBadge = this.view.find(".score-badge");
      this.lblVdotScore = this.scoreBadge.find(".badge-vdot");
      this.advancedResultSection = this.view.find(
        ".advanced-adjustment-result"
      );
      this.lblAdvancedType = this.view.find(".lbl-advanced-type");
      this.lblAdvancedEffect = this.view.find(".lbl-advanced-effect");
      this.lblAdvancedTime = this.view.find(".lbl-advanced-time");
      this.lblAdvancedPace = this.view.find(".lbl-advanced-pace");
      this.lblAdvancedPaceDiff = this.view.find(".lbl-advanced-pace-diff");
      this.btnReverseAdvanced = this.view.find(".btn-reverse-advanced");
      this.btnEmbedCalculator = this.view.find(".btn-embed-calculator");
      this.btnCopyEmbedCode = $("#copyToClipboardEmbedCalculator");
      if (this.btnCopyEmbedCode.length) {
        Forms.setupClipboard("#copyToClipboardEmbedCalculator");
      }
      this.selectedAdvancedOption = InputParser.parseInt(
        Forms.getRadioValue(this.advancedTypeRadio),
        AdvancedOption.off
      );
      this.bindEvents();
      Forms.setupInputForms();
      this.logAnalytics();
    }
    VdotCalculatorPresenter.prototype.bindEvents = function () {
      var _this = this;
      this.eventTypeDropdown.change(function (e) {
        return _this.onEventTypeChanged();
      });
      this.timeTextField.change(function (e) {
        return _this.onTimeChanged();
      });
      this.paceTextField.change(function (e) {
        return _this.onPaceChanged();
      });
      this.advancedTypeRadio.change(function (e) {
        return _this.onAdvancedTypeChanged();
      });
      this.calculateButton.click(function (e) {
        return _this.onCalculateClicked();
      });
      this.resetButton.click(function (e) {
        return _this.onResetClicked();
      });
      this.btnToggleAdvanced.click(function (e) {
        return _this.onToggleAdvancedClicked();
      });
      this.btnReverseAdvanced.click(function (e) {
        return _this.onReverseAdvancedClicked();
      });
      this.scoreHintBadge.click(function (e) {
        return _this.showModalPopup(e, "#about-vdot-modal");
      });
      this.trainingResults.find(".e-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-easy-pace-modal");
      });
      this.trainingResults.find(".m-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-marathon-pace-modal");
      });
      this.trainingResults.find(".t-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-threshold-pace-modal");
      });
      this.trainingResults.find(".i-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-interval-pace-modal");
      });
      this.trainingResults.find(".r-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-rep-pace-modal");
      });
      this.trainingResults.find(".fr-pace a").click(function (e) {
        return _this.showModalPopup(e, "#about-fast-reps-pace-modal");
      });
      this.btnEmbedCalculator.click(function (e) {
        return _this.showModalPopup(e, "#embed-calculator-modal");
      });
      this.btnCopyEmbedCode.click(function (e) {
        return _this.onCopyEmbedCodeClicked();
      });
    };
    VdotCalculatorPresenter.prototype.logAnalytics = function () {
      if (!this.promoMessage.length) {
        return;
      }
      var promoId = this.promoMessage.data("promo-id");
      Analytics.logAdShow(promoId);
    };
    VdotCalculatorPresenter.prototype.showModalPopup = function (e, modalId) {
      e.stopPropagation();
      e.preventDefault();
      Popups.showModal($(modalId), true);
    };
    VdotCalculatorPresenter.prototype.onEventTypeChanged = function () {
      var eventDistance = InputParser.parseFloat(
        Forms.getDropdownFieldValue(this.eventTypeDropdown),
        -1
      );
      if (eventDistance === 0) {
        this.eventTypeSection.addClass("col-md-6");
        this.otherDistanceSection.fadeIn();
      } else {
        this.otherDistanceSection.hide();
        this.eventTypeSection.removeClass("col-md-6");
      }
    };
    VdotCalculatorPresenter.prototype.onTimeChanged = function () {
      if (this.ignoreValueChanges) {
        return;
      }
      this.calculationType = CalculationType.fromTime;
      if (this.calculatorService.hasResult()) {
        this.ignoreValueChanges = true;
        Forms.setTextFieldValue(this.paceTextField, "", true);
        this.ignoreValueChanges = false;
      }
    };
    VdotCalculatorPresenter.prototype.onPaceChanged = function () {
      if (this.ignoreValueChanges) {
        return;
      }
      this.calculationType = CalculationType.fromPace;
      if (this.calculatorService.hasResult()) {
        this.ignoreValueChanges = true;
        Forms.setTextFieldValue(this.timeTextField, "", false);
        this.ignoreValueChanges = false;
      }
    };
    VdotCalculatorPresenter.prototype.onAdvancedTypeChanged = function () {
      var prevAdvancedOption = this.selectedAdvancedOption;
      this.selectedAdvancedOption = InputParser.parseInt(
        Forms.getRadioValue(this.advancedTypeRadio),
        -1
      );
      if (this.selectedAdvancedOption === AdvancedOption.temperature) {
        this.altitudeContainer.hide();
        if (prevAdvancedOption === AdvancedOption.off) {
          this.temperatureContainer.slideDown("fast");
        } else {
          this.temperatureContainer.fadeIn("fast");
        }
      } else if (this.selectedAdvancedOption === AdvancedOption.altitude) {
        this.temperatureContainer.hide();
        if (prevAdvancedOption === AdvancedOption.off) {
          this.altitudeContainer.slideDown("fast");
        } else {
          this.altitudeContainer.fadeIn("fast");
        }
      } else {
        this.temperatureContainer.slideUp("fast");
        this.altitudeContainer.slideUp("fast");
      }
    };
    VdotCalculatorPresenter.prototype.onCalculateClicked = function () {
      if (!this.validateInput()) {
        return;
      }
      this.readValues();
      try {
        this.ignoreValueChanges = true;
        if (
          !this.calculatorService.distance &&
          this.calculatorService.time &&
          this.calculatorService.pace
        ) {
          if (this.calculatorService.calculateFromTimeAndPace()) {
            Analytics.logCalculate(
              "time_and_pace",
              "",
              this.analyticsAdvancedOption()
            );
            var distanceValue = Conversion.fromMetersToUnits(
              this.calculatorService.distance,
              this.calculatorService.paceUnit
            );
            Forms.setTextFieldValue(
              this.otherDistanceTextField,
              Formatting.twoDecimalPlaces(distanceValue),
              true
            );
            Forms.setDropdownFieldValue(
              this.otherDistanceUnitField,
              this.calculatorService.paceUnit
            );
            Forms.setDropdownFieldValue(this.eventTypeDropdown, 0);
            this.otherDistanceTextField.effect(
              "highlight",
              { color: "#C0D7AB" },
              1000
            );
          }
        } else if (
          !this.calculatorService.pace ||
          (this.calculationType === CalculationType.fromTime &&
            this.calculatorService.time > 0)
        ) {
          if (this.calculatorService.calculateFromDistanceAndTime()) {
            Analytics.logCalculate(
              "distance_and_time",
              this.getDistanceDisplay(),
              this.analyticsAdvancedOption()
            );
            Forms.setTextFieldValue(
              this.paceTextField,
              Formatting.toMinutes(this.calculatorService.pace),
              true
            );
            this.paceTextField.effect("highlight", { color: "#C0D7AB" }, 1000);
          }
        } else if (
          !this.calculatorService.time ||
          (this.calculationType === CalculationType.fromPace &&
            this.calculatorService.pace > 0)
        ) {
          if (this.calculatorService.calculateFromDistanceAndPace()) {
            Analytics.logCalculate(
              "distance_and_pace",
              this.getDistanceDisplay(),
              this.analyticsAdvancedOption()
            );
            Forms.setTextFieldValue(
              this.timeTextField,
              Formatting.toMinutes(this.calculatorService.time),
              true
            );
            this.timeTextField.effect("highlight", { color: "#C0D7AB" }, 1000);
          }
        }
        this.updateResults();
      } finally {
        this.ignoreValueChanges = false;
      }
    };
    VdotCalculatorPresenter.prototype.onToggleAdvancedClicked = function () {
      var isActive = this.btnToggleAdvanced.hasClass("active");
      if (isActive) {
        this.btnToggleAdvanced.removeClass("active");
      } else {
        this.btnToggleAdvanced.addClass("active");
      }
      this.advancedSection.slideToggle("fast");
    };
    VdotCalculatorPresenter.prototype.ensureAdvancedVisible = function () {
      var isActive = this.btnToggleAdvanced.hasClass("active");
      if (isActive) {
        return;
      }
      this.onToggleAdvancedClicked();
    };
    VdotCalculatorPresenter.prototype.onReverseAdvancedClicked = function () {
      this.calculatorService.reverseAdvancedCalculation();
      this.updateResults();
    };
    VdotCalculatorPresenter.prototype.onResetClicked = function () {
      this.calculatorService.reset();
      Forms.setDropdownFieldValue(this.eventTypeDropdown, undefined);
      Forms.setTextFieldValue(this.otherDistanceTextField, "", true);
      Forms.setTextFieldValue(this.paceTextField, "", true);
      Forms.setTextFieldValue(this.timeTextField, "", true);
      Forms.setTextFieldValue(this.temperatureTextField, "", true);
      Forms.setTextFieldValue(this.altitudeTextField, "", true);
      Forms.setRadioValue(this.advancedTypeRadio, AdvancedOption.off);
      this.selectedAdvancedOption = AdvancedOption.off;
      Input.setHasValidInput(this.submitSection);
      this.updateResults();
      this.btnToggleAdvanced.removeClass("active");
      this.advancedSection.slideUp("fast");
    };
    VdotCalculatorPresenter.prototype.onCopyEmbedCodeClicked = function () {
      Popups.showSuccessToast("Embed code copied into clipboard.");
    };
    VdotCalculatorPresenter.prototype.validateInput = function () {
      var validateFieldsCount = 0;
      var eventDistance = this.getDistanceValue();
      var timeValue = InputParser.parseTime(
        Forms.getTextFieldValue(this.timeTextField)
      );
      var paceValue = InputParser.parseFloat(
        Forms.getTextFieldValue(this.paceTextField),
        0
      );
      if (eventDistance > 0) {
        validateFieldsCount++;
      }
      if (timeValue > 0) {
        validateFieldsCount++;
      }
      if (paceValue > 0) {
        validateFieldsCount++;
      }
      if (validateFieldsCount < 2) {
        this.validationHint.text(
          "Please select distance and time or pace to calculate VDOT Score."
        );
        Input.setHasInvalidInput(this.submitSection);
        return false;
      }
      Input.setHasValidInput(this.submitSection);
      this.validationHint.text("");
      if (
        this.selectedAdvancedOption === AdvancedOption.temperature &&
        !Input.validateTextField(
          this.temperatureTextField,
          Validate.requiredNumber
        )
      ) {
        this.ensureAdvancedVisible();
        return false;
      }
      if (
        this.selectedAdvancedOption === AdvancedOption.altitude &&
        !Input.validateTextField(
          this.altitudeTextField,
          Validate.requiredNumber
        )
      ) {
        this.ensureAdvancedVisible();
        return false;
      }
      return true;
    };
    VdotCalculatorPresenter.prototype.readValues = function () {
      this.calculatorService.distance = this.getDistanceValue();
      this.calculatorService.time = InputParser.parseTime(
        Forms.getTextFieldValue(this.timeTextField)
      );
      this.calculatorService.pace = InputParser.parseTime(
        Forms.getTextFieldValue(this.paceTextField)
      );
      this.calculatorService.paceUnit = InputParser.parseDistanceUnit(
        Forms.getDropdownFieldValue(this.paceUnitField)
      );
      this.calculatorService.temperature = null;
      this.calculatorService.altitude = null;
      if (this.selectedAdvancedOption === AdvancedOption.temperature) {
        this.calculatorService.temperature = InputParser.parseFloat(
          Forms.getTextFieldValue(this.temperatureTextField),
          undefined
        );
        this.calculatorService.temperatureUnit = InputParser.parseInt(
          Forms.getDropdownFieldValue(this.temperatureUnitField),
          0
        );
      } else if (this.selectedAdvancedOption === AdvancedOption.altitude) {
        this.calculatorService.altitude = InputParser.parseFloat(
          Forms.getTextFieldValue(this.altitudeTextField),
          undefined
        );
        this.calculatorService.altitudeUnit = InputParser.parseInt(
          Forms.getDropdownFieldValue(this.altitudeUnitField),
          0
        );
      }
    };
    VdotCalculatorPresenter.prototype.getDistanceValue = function () {
      var eventDistance = InputParser.parseFloat(
        Forms.getDropdownFieldValue(this.eventTypeDropdown),
        0
      );
      if (eventDistance) {
        return eventDistance;
      }
      var distanceUnit = InputParser.parseDistanceUnit(
        Forms.getDropdownFieldValue(this.otherDistanceUnitField)
      );
      eventDistance = InputParser.parseDistance(
        Forms.getTextFieldValue(this.otherDistanceTextField),
        distanceUnit,
        true
      );
      return eventDistance;
    };
    VdotCalculatorPresenter.prototype.getDistanceDisplay = function () {
      var eventDistance = InputParser.parseFloat(
        Forms.getDropdownFieldValue(this.eventTypeDropdown),
        0
      );
      if (eventDistance) {
        var value = this.eventTypeDropdown.find(".unit-label").text();
        return value;
      }
      var distanceUnitText = this.otherDistanceUnitField
        .find(".unit-label")
        .text();
      var distanceUnit = InputParser.parseDistanceUnit(
        Forms.getDropdownFieldValue(this.otherDistanceUnitField)
      );
      eventDistance = Forms.getTextFieldValue(this.otherDistanceTextField);
      switch (distanceUnit) {
        case DistanceUnit.mi:
          return "".concat(eventDistance, "Mi");
        case DistanceUnit.km:
          return "".concat(eventDistance, "K");
        case DistanceUnit.m:
          return "".concat(eventDistance, "M");
        default:
          return "".concat(eventDistance).concat(distanceUnitText);
      }
    };
    VdotCalculatorPresenter.prototype.updateResults = function () {
      var vdot = this.calculatorService.vdot;
      if (vdot === 0 || this.calculatorService.isInvalidVdot(vdot)) {
        this.resultsSection.slideUp("fast").fadeOut();
        this.racePacesResults.find(".full-time .title").text("-");
        this.racePacesResults.find(".full-time .value").text("-");
        this.racePacesResults.find(".mi-pace .value").text("-");
        this.racePacesResults.find(".km-pace .value").text("-");
        this.racePacesResults.find(".800m-pace .value").text("-");
        this.racePacesResults.find(".400m-pace .value").text("-");
        this.trainingResults.find(".km-value").text("-");
        this.trainingResults.find(".mi-value").text("-");
        this.trainingResults.find(".1200-value").text("-");
        this.trainingResults.find(".800-value").text("-");
        this.trainingResults.find(".600-value").text("-");
        this.trainingResults.find(".400-value").text("-");
        this.trainingResults.find(".300-value").text("-");
        this.trainingResults.find(".200-value").text("-");
        this.equivalentResults.find(".time-value").text("-");
        this.equivalentResults.find(".pace-mi-value").text("-");
        this.equivalentResults.find(".pace-km-value").text("-");
        if (this.isEmbedMode) {
          this.embedPromoMessage.show();
        }
      } else {
        if (this.isEmbedMode) {
          this.embedPromoMessage.hide();
        }
        this.resultsSection.slideDown("fast").fadeIn();
        this.updateRacePacesResultsResults();
        this.updateBasicResults(vdot, Conversion.fromMiles(1));
        this.updateBasicResults(vdot, 1000);
        this.updateAdvancedPacesResults(vdot, 1200);
        this.updateAdvancedPacesResults(vdot, 800);
        this.updateAdvancedPacesResults(vdot, 600);
        this.updateAdvancedPacesResults(vdot, 400);
        this.updateAdvancedPacesResults(vdot, 300);
        this.updateAdvancedPacesResults(vdot, 200);
        this.updateEquivalentResults(vdot);
      }
      if (vdot !== 0 && this.calculatorService.isInvalidVdot(vdot)) {
        this.updateVdotScore(0);
        this.validationHint.text(
          "VDOT Score is invalid. Please enter realistic values."
        );
        Input.setHasInvalidInput(this.submitSection);
      } else {
        this.updateVdotScore(vdot);
        this.updateAdvancedAdjustment();
        this.showCalculatorAdIfNeeded();
      }
    };
    VdotCalculatorPresenter.prototype.updateRacePacesResultsResults =
      function () {
        var totalTime = this.calculatorService.time;
        var distance = this.calculatorService.distance;
        var distanceDisplay = this.getDistanceDisplay();
        var miPace =
          totalTime / Conversion.fromMetersToUnits(distance, DistanceUnit.mi);
        var kmPace =
          totalTime / Conversion.fromMetersToUnits(distance, DistanceUnit.km);
        var m800Pace = totalTime / (distance / 800);
        var m400Pace = totalTime / (distance / 400);
        this.racePacesResults.find(".full-time .title").text(distanceDisplay);
        this.racePacesResults
          .find(".full-time .value")
          .text(Formatting.toMinutes(totalTime));
        this.racePacesResults
          .find(".mi-pace .value")
          .text(Formatting.toMinutes(miPace, false, false, true));
        this.racePacesResults
          .find(".km-pace .value")
          .text(Formatting.toMinutes(kmPace, false, false, true));
        this.racePacesResults
          .find(".800m-pace .value")
          .text(Formatting.toMinutes(m800Pace, false, false, true));
        this.racePacesResults
          .find(".400m-pace .value")
          .text(Formatting.toMinutes(m400Pace, false, false, true));
      };
    VdotCalculatorPresenter.prototype.updateAdvancedAdjustment = function () {
      var advancedResult = this.calculatorService.advanced;
      var showAnticipated = this.calculatorService.showAdvancedAsAnticipated;
      var useSlowerValues = showAnticipated;
      if (!advancedResult) {
        this.advancedResultSection.slideUp("fast");
        return;
      }
      this.advancedResultSection.slideDown("fast");
      if (advancedResult.temperature != null) {
        this.lblAdvancedType.text(
          showAnticipated ? "Temperature Effect" : "Temperature Conversion"
        );
        this.lblAdvancedEffect.text(
          Formatting.temperature(
            advancedResult.temperature,
            advancedResult.temperatureUnit
          )
        );
      } else if (advancedResult.altitude != null) {
        this.lblAdvancedType.text(
          showAnticipated ? "Altitude Effect" : "Altitude Conversion"
        );
        this.lblAdvancedEffect.text(
          Formatting.altitude(
            advancedResult.altitude,
            advancedResult.altitudeUnit
          )
        );
      }
      var paceDiffPrefix = useSlowerValues ? "+" : "-";
      this.lblAdvancedTime.text(
        Formatting.toMinutes(
          useSlowerValues
            ? advancedResult.slowerTime
            : advancedResult.fasterTime
        )
      );
      this.lblAdvancedPace.text(
        Formatting.toPaceMinutes(
          useSlowerValues
            ? advancedResult.slowerPace
            : advancedResult.fasterPace,
          advancedResult.paceUnit,
          false,
          true
        )
      );
      this.lblAdvancedPaceDiff.text(
        paceDiffPrefix +
          Formatting.toPaceMinutes(
            advancedResult.paceDiff,
            advancedResult.paceUnit,
            false,
            true
          )
      );
    };
    VdotCalculatorPresenter.prototype.updateBasicResults = function (
      vdot,
      distance
    ) {
      var isKmDistance = distance === 1000;
      var table = this.trainingResults;
      var valueSelector = isKmDistance ? ".km-value" : ".mi-value";
      var easyPaceRange = Formula.getEasyPaceRange(
        vdot,
        distance,
        isKmDistance ? DistanceUnit.km : DistanceUnit.mi
      );
      var marathonPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Marathon,
        vdot,
        distance
      );
      var thresholdPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Threshold,
        vdot,
        distance
      );
      var intervalPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Interval,
        vdot,
        distance
      );
      var repetitionPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Repetition,
        vdot,
        distance
      );
      table
        .find(".e-pace ".concat(valueSelector))
        .text(Formatting.paceRange(easyPaceRange));
      table
        .find(".m-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(marathonPace));
      table
        .find(".t-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(thresholdPace));
      table
        .find(".i-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(intervalPace));
      table
        .find(".r-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(repetitionPace));
    };
    VdotCalculatorPresenter.prototype.updateAdvancedPacesResults = function (
      vdot,
      distance
    ) {
      var table = this.trainingResults;
      var valueSelector = ".".concat(distance, "-value");
      var thresholdPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Threshold,
        vdot,
        distance
      );
      var intervalPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Interval,
        vdot,
        distance
      );
      var repetitionPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.Repetition,
        vdot,
        distance
      );
      var fastRepsPace = FormulaHelpers.getQualitySessionPace(
        QualitySessionType.FastReps,
        vdot,
        distance
      );
      table
        .find(".t-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(thresholdPace));
      table
        .find(".i-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(intervalPace));
      table
        .find(".r-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(repetitionPace));
      table
        .find(".fr-pace ".concat(valueSelector))
        .text(Formatting.toMinutes(fastRepsPace));
    };
    VdotCalculatorPresenter.prototype.updateEquivalentResults = function (
      vdot
    ) {
      var table = this.equivalentResults;
      var raceTypes = [
        "marathon",
        "half-marathon",
        "15k",
        "10k",
        "5k",
        "3mi",
        "2mi",
        "3200m",
        "3k",
        "1mi",
        "1600m",
        "1500m",
      ];
      var raceDistances = [
        42195,
        21097.5,
        15000,
        10000,
        5000,
        Conversion.fromMiles(3),
        Conversion.fromMiles(2),
        3200,
        3000,
        Conversion.fromMiles(1),
        1600,
        1500,
      ];
      for (var i = 0; i < raceTypes.length; i++) {
        var raceType = raceTypes[i];
        var raceDistance = raceDistances[i];
        var isCalculatedTime =
          Math.abs(raceDistance - this.calculatorService.distance) < 5;
        var time = isCalculatedTime
          ? this.calculatorService.time
          : Formula.getPredictedRaceTime(vdot, raceDistance);
        var miPace = FormulaHelpers.getMiPace(raceDistance, time);
        var kmPace = FormulaHelpers.getKmPace(raceDistance, time);
        table
          .find(".".concat(raceType, " .time-value"))
          .text(Formatting.toMinutes(time));
        table
          .find(".".concat(raceType, " .pace-mi-value"))
          .text(Formatting.toMinutes(miPace));
        table
          .find(".".concat(raceType, " .pace-km-value"))
          .text(Formatting.toMinutes(kmPace));
      }
    };
    VdotCalculatorPresenter.prototype.updateVdotScore = function (vdot) {
      if (vdot === 0) {
        this.scoreHintBadge.show();
        this.scoreBadge.hide();
      } else {
        this.scoreHintBadge.hide();
        this.scoreBadge.show();
        this.scoreBadge.effect("highlight", { color: "#C0D7AB" }, 750);
        this.lblVdotScore.text(Formatting.oneDecimalPlace(vdot));
      }
    };
    VdotCalculatorPresenter.prototype.showCalculatorAdIfNeeded = function () {
      var cookie = this.ensureCookie();
      cookie.counter++;
      cookie.noAdsLeft--;
      // console.debug("Calculator counter: " + cookie.counter + " | No Ads Left: " + cookie.noAdsLeft);
      if (cookie.noAdsLeft === 0) {
        var adModal = this.getPopupAd(cookie);
        if (adModal.length) {
          Analytics.logAdShow(adModal.attr("id"));
          Popups.showModal(adModal, true);
        } else {
          // console.debug("Ad modal not found.");
        }
        cookie.noAdsLeft = cookie.counter >= 10 ? 10 : 5;
      }
      this.setCookie(cookie);
    };
    VdotCalculatorPresenter.prototype.getPopupAd = function (cookie) {
      var coachAdModal = $("#promo-ad-coach-modal");
      var athleteAdModal = $("#promo-ad-athlete-modal");
      var promoAdModal = $("#promo-modal");
      if (promoAdModal.length) {
        return promoAdModal;
      }
      if (!coachAdModal.length) {
        return athleteAdModal;
      }
      if (!athleteAdModal.length) {
        return coachAdModal;
      }
      var showMain = getRandomInt(4) % 4 > 0;
      if (cookie.counter <= 5) {
        return athleteAdModal;
      } else if (cookie.counter <= 10) {
        return coachAdModal;
      } else if (cookie.counter <= 40) {
        return showMain ? athleteAdModal : coachAdModal;
      } else {
        return showMain ? coachAdModal : athleteAdModal;
      }
    };
    VdotCalculatorPresenter.prototype.ensureCookie = function () {
      var cookieJson = Cookie.get("_vdotCalc");
      var cookie;
      if (cookieJson) {
        cookie = JSON.parse(cookieJson);
        if (cookie.noAdsLeft === undefined) {
          cookie.noAdsLeft = 5;
        }
      } else {
        cookie = {
          counter: 0,
          noAdsLeft: 5,
        };
        this.setCookie(cookie);
      }
      return cookie;
    };
    VdotCalculatorPresenter.prototype.setCookie = function (cookie) {
      Cookie.set("_vdotCalc", JSON.stringify(cookie));
    };
    VdotCalculatorPresenter.prototype.analyticsAdvancedOption = function () {
      if (this.calculatorService.temperature != null) {
        return "temperature";
      }
      if (this.calculatorService.altitude != null) {
        return "altitude";
      }
      return "off";
    };
    return VdotCalculatorPresenter;
  })();
  var AdvancedAdjustmentResult = /** @class */ (function () {
    function AdvancedAdjustmentResult() {}
    return AdvancedAdjustmentResult;
  })();
  var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
      this.distance = 0.0;
      this.time = 0.0;
      this.pace = 0.0;
      this.paceUnit = DistanceUnit.mi;
      this.vdot = 0.0;
      this.showAdvancedAsAnticipated = true;
    }
    CalculatorService.prototype.reset = function () {
      this.distance = 0.0;
      this.time = 0.0;
      this.pace = 0.0;
      this.vdot = 0.0;
      this.temperature = null;
      this.altitude = null;
      this.advanced = null;
    };
    CalculatorService.prototype.hasResult = function () {
      return this.distance > 0 && this.time > 0 && this.pace > 0;
    };
    CalculatorService.prototype.hasInvalidVdot = function () {
      return this.vdot <= 0 || this.vdot >= 100;
    };
    CalculatorService.prototype.calculateFromDistanceAndTime = function () {
      var meters = this.distance;
      var paceDistance = Conversion.fromMetersToUnits(meters, this.paceUnit);
      this.pace = this.time / paceDistance;
      this.vdot = Formula.getVDOT(meters, this.time);
      this.updateAdvancedResultIfNeeded();
      return !this.isInvalidVdot(this.vdot);
    };
    CalculatorService.prototype.calculateFromDistanceAndPace = function () {
      var meters = this.distance;
      this.time = Conversion.getTimeFromMetersAndPace(
        meters,
        this.pace,
        this.paceUnit
      );
      this.vdot = Formula.getVDOT(meters, this.time);
      this.updateAdvancedResultIfNeeded();
      return !this.isInvalidVdot(this.vdot);
    };
    CalculatorService.prototype.calculateFromTimeAndPace = function () {
      var meters = Conversion.getMetersFromTimeAndPace(
        this.time,
        this.pace,
        this.paceUnit
      );
      this.distance = meters;
      this.vdot = Formula.getVDOT(meters, this.time);
      this.updateAdvancedResultIfNeeded();
      return !this.isInvalidVdot(this.vdot);
    };
    CalculatorService.prototype.reverseAdvancedCalculation = function () {
      if (!this.advanced) {
        return;
      }
      this.showAdvancedAsAnticipated = !this.showAdvancedAsAnticipated;
      if (this.showAdvancedAsAnticipated) {
        this.vdot = this.advanced.slowerVdot;
      } else {
        this.vdot = this.advanced.fasterVdot;
      }
    };
    CalculatorService.prototype.isInvalidVdot = function (vdot) {
      return vdot <= 0 || vdot > 100;
    };
    CalculatorService.prototype.updateAdvancedResultIfNeeded = function () {
      if (this.altitude == null && this.temperature == null) {
        this.advanced = null;
        return;
      }
      var advancedResult = new AdvancedAdjustmentResult();
      var advancedEffect = 0.0;
      if (this.temperature) {
        advancedResult.temperature = this.temperature;
        advancedResult.temperatureUnit = this.temperatureUnit;
        advancedEffect = this.getTemperatureEffect();
      } else if (this.altitude) {
        advancedResult.altitude = this.altitude;
        advancedResult.altitudeUnit = this.altitudeUnit;
        advancedEffect = this.getAltitudeEffect();
      }
      if (advancedEffect < 0) {
        advancedEffect = 0.0;
      }
      var paceDiff =
        advancedEffect /
        Conversion.fromMetersToUnits(this.distance, this.paceUnit);
      advancedResult.advancedEffect = advancedEffect;
      advancedResult.paceDiff = paceDiff;
      advancedResult.paceUnit = this.paceUnit;
      advancedResult.slowerPace = this.pace + paceDiff;
      advancedResult.slowerTime = this.time + advancedEffect;
      advancedResult.slowerVdot = Formula.getVDOT(
        this.distance,
        advancedResult.slowerTime
      );
      advancedResult.fasterPace = this.pace - paceDiff;
      advancedResult.fasterTime = this.time - advancedEffect;
      advancedResult.fasterVdot = Formula.getVDOT(
        this.distance,
        advancedResult.fasterTime
      );
      this.advanced = advancedResult;
      if (this.showAdvancedAsAnticipated) {
        this.vdot = advancedResult.slowerVdot;
      } else {
        this.vdot = advancedResult.fasterVdot;
      }
      return;
    };
    CalculatorService.prototype.getTemperatureEffect = function () {
      if (this.temperature == null) {
        return 0.0;
      }
      var celcius = Conversion.toCelcius(
        this.temperature,
        this.temperatureUnit
      );
      var impact = (celcius - 15) * (0.16667 * this.time);
      return impact / 60;
    };
    CalculatorService.prototype.getAltitudeEffect = function () {
      if (this.altitude == null) {
        return 0.0;
      }
      var meters = Conversion.altitudeToMeters(
        this.altitude,
        this.altitudeUnit
      );
      var percent = (meters * 0.004 - 3.0) / 100;
      var impact = this.time * percent;
      return impact;
    };
    return CalculatorService;
  })();
  // ReSharper disable once UnusedLocals
  var _ = new VdotCalculatorPresenter();
});
//# sourceMappingURL=CalculatorPresenter.js.map
