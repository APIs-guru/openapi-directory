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
export var CreateCheckInputCountryEnum;
(function (CreateCheckInputCountryEnum) {
    CreateCheckInputCountryEnum["All"] = "ALL";
    CreateCheckInputCountryEnum["Br"] = "BR";
    CreateCheckInputCountryEnum["Cl"] = "CL";
    CreateCheckInputCountryEnum["Co"] = "CO";
    CreateCheckInputCountryEnum["Cr"] = "CR";
    CreateCheckInputCountryEnum["Ec"] = "EC";
    CreateCheckInputCountryEnum["Mx"] = "MX";
    CreateCheckInputCountryEnum["Pe"] = "PE";
    CreateCheckInputCountryEnum["Ar"] = "AR";
})(CreateCheckInputCountryEnum || (CreateCheckInputCountryEnum = {}));
export var CreateCheckInputRegionEnum;
(function (CreateCheckInputRegionEnum) {
    CreateCheckInputRegionEnum["Df"] = "DF";
    CreateCheckInputRegionEnum["Ac"] = "AC";
    CreateCheckInputRegionEnum["Al"] = "AL";
    CreateCheckInputRegionEnum["Ap"] = "AP";
    CreateCheckInputRegionEnum["Am"] = "AM";
    CreateCheckInputRegionEnum["Ba"] = "BA";
    CreateCheckInputRegionEnum["Ce"] = "CE";
    CreateCheckInputRegionEnum["Es"] = "ES";
    CreateCheckInputRegionEnum["Go"] = "GO";
    CreateCheckInputRegionEnum["Ma"] = "MA";
    CreateCheckInputRegionEnum["Mt"] = "MT";
    CreateCheckInputRegionEnum["Ms"] = "MS";
    CreateCheckInputRegionEnum["Mg"] = "MG";
    CreateCheckInputRegionEnum["Pa"] = "PA";
    CreateCheckInputRegionEnum["Pb"] = "PB";
    CreateCheckInputRegionEnum["Pr"] = "PR";
    CreateCheckInputRegionEnum["Pe"] = "PE";
    CreateCheckInputRegionEnum["Pi"] = "PI";
    CreateCheckInputRegionEnum["Rj"] = "RJ";
    CreateCheckInputRegionEnum["Rn"] = "RN";
    CreateCheckInputRegionEnum["Rs"] = "RS";
    CreateCheckInputRegionEnum["Ro"] = "RO";
    CreateCheckInputRegionEnum["Rr"] = "RR";
    CreateCheckInputRegionEnum["Sc"] = "SC";
    CreateCheckInputRegionEnum["Sp"] = "SP";
    CreateCheckInputRegionEnum["Se"] = "SE";
    CreateCheckInputRegionEnum["To"] = "TO";
})(CreateCheckInputRegionEnum || (CreateCheckInputRegionEnum = {}));
export var CreateCheckInputTypeEnum;
(function (CreateCheckInputTypeEnum) {
    CreateCheckInputTypeEnum["Person"] = "person";
    CreateCheckInputTypeEnum["Vehicle"] = "vehicle";
    CreateCheckInputTypeEnum["Company"] = "company";
    CreateCheckInputTypeEnum["CustomTypeName"] = "custom_type_name";
})(CreateCheckInputTypeEnum || (CreateCheckInputTypeEnum = {}));
// CreateCheckInput
/**
 * Represents paramaters required to create a background check
**/
var CreateCheckInput = /** @class */ (function (_super) {
    __extends(CreateCheckInput, _super);
    function CreateCheckInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=birth_certificate;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "birthCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=company_name;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=date_of_birth;" }),
        __metadata("design:type", Date)
    ], CreateCheckInput.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=diplomatic_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "diplomaticId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=driver_license;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "driverLicense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=escrow;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "escrow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=first_name;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=force_creation;" }),
        __metadata("design:type", Boolean)
    ], CreateCheckInput.prototype, "forceCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=foreign_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "foreignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=issue_date;" }),
        __metadata("design:type", Date)
    ], CreateCheckInput.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=last_name;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=license_plate;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "licensePlate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=national_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "nationalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=native_country;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "nativeCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=owner_document_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "ownerDocumentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=owner_document_type;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "ownerDocumentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=passport;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "passport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=payment_date;" }),
        __metadata("design:type", Date)
    ], CreateCheckInput.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=pep;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "pep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=phone_number;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=professional_card;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "professionalCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ptp;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "ptp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=region;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=report_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "reportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=state_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "stateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tax_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=type;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=user_authorized;" }),
        __metadata("design:type", Boolean)
    ], CreateCheckInput.prototype, "userAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vehicle_id;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "vehicleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=verification_code;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "verificationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=watch;" }),
        __metadata("design:type", String)
    ], CreateCheckInput.prototype, "watch", void 0);
    return CreateCheckInput;
}(SpeakeasyBase));
export { CreateCheckInput };
