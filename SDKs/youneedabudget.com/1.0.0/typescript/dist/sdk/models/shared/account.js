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
export var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["Checking"] = "checking";
    AccountTypeEnum["Savings"] = "savings";
    AccountTypeEnum["Cash"] = "cash";
    AccountTypeEnum["CreditCard"] = "creditCard";
    AccountTypeEnum["LineOfCredit"] = "lineOfCredit";
    AccountTypeEnum["OtherAsset"] = "otherAsset";
    AccountTypeEnum["OtherLiability"] = "otherLiability";
    AccountTypeEnum["PayPal"] = "payPal";
    AccountTypeEnum["MerchantAccount"] = "merchantAccount";
    AccountTypeEnum["InvestmentAccount"] = "investmentAccount";
    AccountTypeEnum["Mortgage"] = "mortgage";
})(AccountTypeEnum || (AccountTypeEnum = {}));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleared_balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "clearedBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_import_in_error" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "directImportInError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_import_linked" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "directImportLinked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Account.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=on_budget" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "onBudget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_payee_id" }),
        __metadata("design:type", String)
    ], Account.prototype, "transferPayeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Account.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uncleared_balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "unclearedBalance", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
