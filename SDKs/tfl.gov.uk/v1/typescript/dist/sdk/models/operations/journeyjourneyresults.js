var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var JourneyJourneyResultsPathParams = /** @class */ (function (_super) {
    __extends(JourneyJourneyResultsPathParams, _super);
    function JourneyJourneyResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=from" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsPathParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=to" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsPathParams.prototype, "to", void 0);
    return JourneyJourneyResultsPathParams;
}(SpeakeasyBase));
export { JourneyJourneyResultsPathParams };
export var JourneyJourneyResultsAccessibilityPreferenceEnum;
(function (JourneyJourneyResultsAccessibilityPreferenceEnum) {
    JourneyJourneyResultsAccessibilityPreferenceEnum["NoRequirements"] = "NoRequirements";
    JourneyJourneyResultsAccessibilityPreferenceEnum["NoSolidStairs"] = "NoSolidStairs";
    JourneyJourneyResultsAccessibilityPreferenceEnum["NoEscalators"] = "NoEscalators";
    JourneyJourneyResultsAccessibilityPreferenceEnum["NoElevators"] = "NoElevators";
    JourneyJourneyResultsAccessibilityPreferenceEnum["StepFreeToVehicle"] = "StepFreeToVehicle";
    JourneyJourneyResultsAccessibilityPreferenceEnum["StepFreeToPlatform"] = "StepFreeToPlatform";
})(JourneyJourneyResultsAccessibilityPreferenceEnum || (JourneyJourneyResultsAccessibilityPreferenceEnum = {}));
export var JourneyJourneyResultsBikeProficiencyEnum;
(function (JourneyJourneyResultsBikeProficiencyEnum) {
    JourneyJourneyResultsBikeProficiencyEnum["Easy"] = "Easy";
    JourneyJourneyResultsBikeProficiencyEnum["Moderate"] = "Moderate";
    JourneyJourneyResultsBikeProficiencyEnum["Fast"] = "Fast";
})(JourneyJourneyResultsBikeProficiencyEnum || (JourneyJourneyResultsBikeProficiencyEnum = {}));
export var JourneyJourneyResultsCyclePreferenceEnum;
(function (JourneyJourneyResultsCyclePreferenceEnum) {
    JourneyJourneyResultsCyclePreferenceEnum["None"] = "None";
    JourneyJourneyResultsCyclePreferenceEnum["LeaveAtStation"] = "LeaveAtStation";
    JourneyJourneyResultsCyclePreferenceEnum["TakeOnTransport"] = "TakeOnTransport";
    JourneyJourneyResultsCyclePreferenceEnum["AllTheWay"] = "AllTheWay";
    JourneyJourneyResultsCyclePreferenceEnum["CycleHire"] = "CycleHire";
})(JourneyJourneyResultsCyclePreferenceEnum || (JourneyJourneyResultsCyclePreferenceEnum = {}));
export var JourneyJourneyResultsJourneyPreferenceEnum;
(function (JourneyJourneyResultsJourneyPreferenceEnum) {
    JourneyJourneyResultsJourneyPreferenceEnum["LeastInterchange"] = "LeastInterchange";
    JourneyJourneyResultsJourneyPreferenceEnum["LeastTime"] = "LeastTime";
    JourneyJourneyResultsJourneyPreferenceEnum["LeastWalking"] = "LeastWalking";
})(JourneyJourneyResultsJourneyPreferenceEnum || (JourneyJourneyResultsJourneyPreferenceEnum = {}));
export var JourneyJourneyResultsTimeIsEnum;
(function (JourneyJourneyResultsTimeIsEnum) {
    JourneyJourneyResultsTimeIsEnum["Arriving"] = "Arriving";
    JourneyJourneyResultsTimeIsEnum["Departing"] = "Departing";
})(JourneyJourneyResultsTimeIsEnum || (JourneyJourneyResultsTimeIsEnum = {}));
export var JourneyJourneyResultsWalkingSpeedEnum;
(function (JourneyJourneyResultsWalkingSpeedEnum) {
    JourneyJourneyResultsWalkingSpeedEnum["Slow"] = "Slow";
    JourneyJourneyResultsWalkingSpeedEnum["Average"] = "Average";
    JourneyJourneyResultsWalkingSpeedEnum["Fast"] = "Fast";
})(JourneyJourneyResultsWalkingSpeedEnum || (JourneyJourneyResultsWalkingSpeedEnum = {}));
var JourneyJourneyResultsQueryParams = /** @class */ (function (_super) {
    __extends(JourneyJourneyResultsQueryParams, _super);
    function JourneyJourneyResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessibilityPreference" }),
        __metadata("design:type", Array)
    ], JourneyJourneyResultsQueryParams.prototype, "accessibilityPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adjustment" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "adjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternativeCycle" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "alternativeCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alternativeWalking" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "alternativeWalking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applyHtmlMarkup" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "applyHtmlMarkup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bikeProficiency" }),
        __metadata("design:type", Array)
    ], JourneyJourneyResultsQueryParams.prototype, "bikeProficiency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cyclePreference" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "cyclePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromName" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "fromName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journeyPreference" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "journeyPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxTransferMinutes" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "maxTransferMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWalkingMinutes" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "maxWalkingMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", Array)
    ], JourneyJourneyResultsQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nationalSearch" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "nationalSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeBetweenEntrances" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "routeBetweenEntrances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxiOnlyTrip" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "taxiOnlyTrip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeIs" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "timeIs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toName" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "toName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useMultiModalCall" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "useMultiModalCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useRealTimeLiveArrivals" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "useRealTimeLiveArrivals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=via" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "via", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viaName" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "viaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=walkingOptimization" }),
        __metadata("design:type", Boolean)
    ], JourneyJourneyResultsQueryParams.prototype, "walkingOptimization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=walkingSpeed" }),
        __metadata("design:type", String)
    ], JourneyJourneyResultsQueryParams.prototype, "walkingSpeed", void 0);
    return JourneyJourneyResultsQueryParams;
}(SpeakeasyBase));
export { JourneyJourneyResultsQueryParams };
var JourneyJourneyResultsRequest = /** @class */ (function (_super) {
    __extends(JourneyJourneyResultsRequest, _super);
    function JourneyJourneyResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JourneyJourneyResultsPathParams)
    ], JourneyJourneyResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JourneyJourneyResultsQueryParams)
    ], JourneyJourneyResultsRequest.prototype, "queryParams", void 0);
    return JourneyJourneyResultsRequest;
}(SpeakeasyBase));
export { JourneyJourneyResultsRequest };
var JourneyJourneyResultsResponse = /** @class */ (function (_super) {
    __extends(JourneyJourneyResultsResponse, _super);
    function JourneyJourneyResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], JourneyJourneyResultsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JourneyJourneyResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JourneyJourneyResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TflApiPresentationEntitiesJourneyPlannerItineraryResult)
    ], JourneyJourneyResultsResponse.prototype, "tflApiPresentationEntitiesJourneyPlannerItineraryResult", void 0);
    return JourneyJourneyResultsResponse;
}(SpeakeasyBase));
export { JourneyJourneyResultsResponse };
