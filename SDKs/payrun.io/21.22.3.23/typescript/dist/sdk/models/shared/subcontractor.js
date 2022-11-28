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
// SubContractorSubContractorAddress
/**
 * The sub contractors' address
**/
var SubContractorSubContractorAddress = /** @class */ (function (_super) {
    __extends(SubContractorSubContractorAddress, _super);
    function SubContractorSubContractorAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address1" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address2" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address3" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "address3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address4" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "address4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Postcode" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorAddress.prototype, "postcode", void 0);
    return SubContractorSubContractorAddress;
}(SpeakeasyBase));
export { SubContractorSubContractorAddress };
// SubContractorSubContractorBankAccount
/**
 * The sub contractors' bank account
**/
var SubContractorSubContractorBankAccount = /** @class */ (function (_super) {
    __extends(SubContractorSubContractorBankAccount, _super);
    function SubContractorSubContractorBankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorBankAccount.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorBankAccount.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorBankAccount.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortCode" }),
        __metadata("design:type", String)
    ], SubContractorSubContractorBankAccount.prototype, "sortCode", void 0);
    return SubContractorSubContractorBankAccount;
}(SpeakeasyBase));
export { SubContractorSubContractorBankAccount };
export var SubContractorSubContractorBusinessTypeEnum;
(function (SubContractorSubContractorBusinessTypeEnum) {
    SubContractorSubContractorBusinessTypeEnum["SoleTrader"] = "SoleTrader";
    SubContractorSubContractorBusinessTypeEnum["Company"] = "Company";
    SubContractorSubContractorBusinessTypeEnum["Partnership"] = "Partnership";
    SubContractorSubContractorBusinessTypeEnum["Trust"] = "Trust";
})(SubContractorSubContractorBusinessTypeEnum || (SubContractorSubContractorBusinessTypeEnum = {}));
export var SubContractorSubContractorPayFrequencyEnum;
(function (SubContractorSubContractorPayFrequencyEnum) {
    SubContractorSubContractorPayFrequencyEnum["Monthly"] = "Monthly";
    SubContractorSubContractorPayFrequencyEnum["Weekly"] = "Weekly";
})(SubContractorSubContractorPayFrequencyEnum || (SubContractorSubContractorPayFrequencyEnum = {}));
export var SubContractorSubContractorPaymentMethodEnum;
(function (SubContractorSubContractorPaymentMethodEnum) {
    SubContractorSubContractorPaymentMethodEnum["NotSet"] = "NotSet";
    SubContractorSubContractorPaymentMethodEnum["Cash"] = "Cash";
    SubContractorSubContractorPaymentMethodEnum["Cheque"] = "Cheque";
    SubContractorSubContractorPaymentMethodEnum["Bacs"] = "BACS";
    SubContractorSubContractorPaymentMethodEnum["FasterPayments"] = "FasterPayments";
    SubContractorSubContractorPaymentMethodEnum["Other"] = "Other";
})(SubContractorSubContractorPaymentMethodEnum || (SubContractorSubContractorPaymentMethodEnum = {}));
export var SubContractorSubContractorRegionEnum;
(function (SubContractorSubContractorRegionEnum) {
    SubContractorSubContractorRegionEnum["NotSet"] = "NotSet";
    SubContractorSubContractorRegionEnum["England"] = "England";
    SubContractorSubContractorRegionEnum["Scotland"] = "Scotland";
    SubContractorSubContractorRegionEnum["Wales"] = "Wales";
})(SubContractorSubContractorRegionEnum || (SubContractorSubContractorRegionEnum = {}));
export var SubContractorSubContractorTaxationStatusEnum;
(function (SubContractorSubContractorTaxationStatusEnum) {
    SubContractorSubContractorTaxationStatusEnum["Unmatched"] = "Unmatched";
    SubContractorSubContractorTaxationStatusEnum["Net"] = "Net";
    SubContractorSubContractorTaxationStatusEnum["Gross"] = "Gross";
})(SubContractorSubContractorTaxationStatusEnum || (SubContractorSubContractorTaxationStatusEnum = {}));
export var SubContractorSubContractorTerritoryEnum;
(function (SubContractorSubContractorTerritoryEnum) {
    SubContractorSubContractorTerritoryEnum["UnitedKingdom"] = "UnitedKingdom";
})(SubContractorSubContractorTerritoryEnum || (SubContractorSubContractorTerritoryEnum = {}));
var SubContractorSubContractor = /** @class */ (function (_super) {
    __extends(SubContractorSubContractor, _super);
    function SubContractorSubContractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", SubContractorSubContractorAddress)
    ], SubContractorSubContractor.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankAccount" }),
        __metadata("design:type", SubContractorSubContractorBankAccount)
    ], SubContractorSubContractor.prototype, "bankAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BusinessType" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "businessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "companyRegistrationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deactivated" }),
        __metadata("design:type", Boolean)
    ], SubContractorSubContractor.prototype, "deactivated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], SubContractorSubContractor.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initials" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], SubContractorSubContractor.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NiNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "niNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartnershipName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "partnershipName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartnershipUniqueTaxReference" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "partnershipUniqueTaxReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentMethod" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], SubContractorSubContractor.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxationStatus" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "taxationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Telephone" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "telephone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Territory" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "territory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TradingName" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "tradingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UniqueTaxReference" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "uniqueTaxReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VatRegistered" }),
        __metadata("design:type", Boolean)
    ], SubContractorSubContractor.prototype, "vatRegistered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VatRegistrationNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "vatRegistrationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationDate" }),
        __metadata("design:type", Date)
    ], SubContractorSubContractor.prototype, "verificationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "verificationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorksNumber" }),
        __metadata("design:type", String)
    ], SubContractorSubContractor.prototype, "worksNumber", void 0);
    return SubContractorSubContractor;
}(SpeakeasyBase));
export { SubContractorSubContractor };
var SubContractor = /** @class */ (function (_super) {
    __extends(SubContractor, _super);
    function SubContractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubContractor" }),
        __metadata("design:type", SubContractorSubContractor)
    ], SubContractor.prototype, "subContractor", void 0);
    return SubContractor;
}(SpeakeasyBase));
export { SubContractor };
