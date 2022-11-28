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
import { ScoreDetail } from "./scoredetail";
export var ScoreDataSetEnum;
(function (ScoreDataSetEnum) {
    ScoreDataSetEnum["AffiliationsAndInsurances"] = "affiliations_and_insurances";
    ScoreDataSetEnum["AlertInMedia"] = "alert_in_media";
    ScoreDataSetEnum["Behavior"] = "behavior";
    ScoreDataSetEnum["BusinessBackground"] = "business_background";
    ScoreDataSetEnum["CriminalRecord"] = "criminal_record";
    ScoreDataSetEnum["DrivingLicenses"] = "driving_licenses";
    ScoreDataSetEnum["InternationalBackground"] = "international_background";
    ScoreDataSetEnum["LegalBackground"] = "legal_background";
    ScoreDataSetEnum["PersonalIdentity"] = "personal_identity";
    ScoreDataSetEnum["ProfessionalBackground"] = "professional_background";
    ScoreDataSetEnum["TrafficFines"] = "traffic_fines";
    ScoreDataSetEnum["VehicleInformation"] = "vehicle_information";
    ScoreDataSetEnum["VehiclePermits"] = "vehicle_permits";
    ScoreDataSetEnum["TaxesAndFinances"] = "taxes_and_finances";
})(ScoreDataSetEnum || (ScoreDataSetEnum = {}));
export var ScoreResultEnum;
(function (ScoreResultEnum) {
    ScoreResultEnum["Pending"] = "pending";
    ScoreResultEnum["Found"] = "found";
    ScoreResultEnum["NotFound"] = "not_found";
    ScoreResultEnum["Error"] = "error";
    ScoreResultEnum["Delayed"] = "delayed";
    ScoreResultEnum["Ignored"] = "ignored";
})(ScoreResultEnum || (ScoreResultEnum = {}));
// Score
/**
 * Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both
**/
var Score = /** @class */ (function (_super) {
    __extends(Score, _super);
    function Score() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=by_id" }),
        __metadata("design:type", ScoreDetail)
    ], Score.prototype, "byId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=by_name" }),
        __metadata("design:type", ScoreDetail)
    ], Score.prototype, "byName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_set" }),
        __metadata("design:type", String)
    ], Score.prototype, "dataSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], Score.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], Score.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", Object)
    ], Score.prototype, "severity", void 0);
    return Score;
}(SpeakeasyBase));
export { Score };
