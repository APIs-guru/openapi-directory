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
import { Addresses } from "./addresses";
import { DetailedService } from "./detailedservice";
import { Hours } from "./hours";
import { OperatingStatus } from "./operatingstatus";
import { Phone } from "./phone";
import { Satisfaction } from "./satisfaction";
import { Services } from "./services";
import { WaitTimes } from "./waittimes";
export var FacilityAttributesActiveStatusEnum;
(function (FacilityAttributesActiveStatusEnum) {
    FacilityAttributesActiveStatusEnum["A"] = "A";
    FacilityAttributesActiveStatusEnum["T"] = "T";
})(FacilityAttributesActiveStatusEnum || (FacilityAttributesActiveStatusEnum = {}));
export var FacilityAttributesFacilityTypeEnum;
(function (FacilityAttributesFacilityTypeEnum) {
    FacilityAttributesFacilityTypeEnum["VaBenefitsFacility"] = "va_benefits_facility";
    FacilityAttributesFacilityTypeEnum["VaCemetery"] = "va_cemetery";
    FacilityAttributesFacilityTypeEnum["VaHealthFacility"] = "va_health_facility";
    FacilityAttributesFacilityTypeEnum["VetCenter"] = "vet_center";
})(FacilityAttributesFacilityTypeEnum || (FacilityAttributesFacilityTypeEnum = {}));
var FacilityAttributes = /** @class */ (function (_super) {
    __extends(FacilityAttributes, _super);
    function FacilityAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_status" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Addresses)
    ], FacilityAttributes.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailed_services", elemType: DetailedService }),
        __metadata("design:type", Array)
    ], FacilityAttributes.prototype, "detailedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facility_type" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "facilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hours" }),
        __metadata("design:type", Hours)
    ], FacilityAttributes.prototype, "hours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], FacilityAttributes.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=long" }),
        __metadata("design:type", Number)
    ], FacilityAttributes.prototype, "long", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile" }),
        __metadata("design:type", Boolean)
    ], FacilityAttributes.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operating_status" }),
        __metadata("design:type", OperatingStatus)
    ], FacilityAttributes.prototype, "operatingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operational_hours_special_instructions" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "operationalHoursSpecialInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", Phone)
    ], FacilityAttributes.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfaction" }),
        __metadata("design:type", Satisfaction)
    ], FacilityAttributes.prototype, "satisfaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Services)
    ], FacilityAttributes.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_zone" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visn" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "visn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wait_times" }),
        __metadata("design:type", WaitTimes)
    ], FacilityAttributes.prototype, "waitTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], FacilityAttributes.prototype, "website", void 0);
    return FacilityAttributes;
}(SpeakeasyBase));
export { FacilityAttributes };
