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
import { Scenario } from "./scenario";
import { TransactionAccount } from "./transactionaccount";
export var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["Bank"] = "bank";
    AccountTypeEnum["Credits"] = "credits";
    AccountTypeEnum["Cash"] = "cash";
    AccountTypeEnum["Stocks"] = "stocks";
    AccountTypeEnum["Mortgage"] = "mortgage";
    AccountTypeEnum["Loans"] = "loans";
    AccountTypeEnum["Vehicle"] = "vehicle";
    AccountTypeEnum["Property"] = "property";
    AccountTypeEnum["Insurance"] = "insurance";
    AccountTypeEnum["OtherLiability"] = "other_liability";
})(AccountTypeEnum || (AccountTypeEnum = {}));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Account.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], Account.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "currentBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_date" }),
        __metadata("design:type", String)
    ], Account.prototype, "currentBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_exchange_rate" }),
        __metadata("design:type", Number)
    ], Account.prototype, "currentBalanceExchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], Account.prototype, "currentBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_net_worth" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isNetWorth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_scenario" }),
        __metadata("design:type", Scenario)
    ], Account.prototype, "primaryScenario", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_transaction_account" }),
        __metadata("design:type", TransactionAccount)
    ], Account.prototype, "primaryTransactionAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "safeBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], Account.prototype, "safeBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scenarios", elemType: Scenario }),
        __metadata("design:type", Array)
    ], Account.prototype, "scenarios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Account.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_accounts", elemType: TransactionAccount }),
        __metadata("design:type", Array)
    ], Account.prototype, "transactionAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Account.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Account.prototype, "updatedAt", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
