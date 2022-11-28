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
export var CreateConfigInputCountryEnum;
(function (CreateConfigInputCountryEnum) {
    CreateConfigInputCountryEnum["All"] = "ALL";
    CreateConfigInputCountryEnum["Br"] = "BR";
    CreateConfigInputCountryEnum["Cl"] = "CL";
    CreateConfigInputCountryEnum["Co"] = "CO";
    CreateConfigInputCountryEnum["Cr"] = "CR";
    CreateConfigInputCountryEnum["Ec"] = "EC";
    CreateConfigInputCountryEnum["Mx"] = "MX";
    CreateConfigInputCountryEnum["Pe"] = "PE";
    CreateConfigInputCountryEnum["Ar"] = "AR";
})(CreateConfigInputCountryEnum || (CreateConfigInputCountryEnum = {}));
// CreateConfigInput
/**
 * Represents paramaters required to create a score configuration
**/
var CreateConfigInput = /** @class */ (function (_super) {
    __extends(CreateConfigInput, _super);
    function CreateConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], CreateConfigInput.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_affiliations_and_insurances;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetAffiliationsAndInsurances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_alert_in_media;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetAlertInMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_business_background;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetBusinessBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_criminal_record;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetCriminalRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_driving_licenses;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetDrivingLicenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_international_background;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetInternationalBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_legal_background;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetLegalBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_personal_identity;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetPersonalIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_professional_background;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetProfessionalBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_taxes_and_finances;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetTaxesAndFinances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_traffic_fines;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetTrafficFines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_vehicle_information;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetVehicleInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dataset_vehicle_permits;" }),
        __metadata("design:type", Number)
    ], CreateConfigInput.prototype, "datasetVehiclePermits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=type;" }),
        __metadata("design:type", String)
    ], CreateConfigInput.prototype, "type", void 0);
    return CreateConfigInput;
}(SpeakeasyBase));
export { CreateConfigInput };
