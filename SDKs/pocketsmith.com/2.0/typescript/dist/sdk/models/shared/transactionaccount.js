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
import { Institution } from "./institution";
export var TransactionAccountTypeEnum;
(function (TransactionAccountTypeEnum) {
    TransactionAccountTypeEnum["Bank"] = "bank";
    TransactionAccountTypeEnum["Credits"] = "credits";
    TransactionAccountTypeEnum["Cash"] = "cash";
    TransactionAccountTypeEnum["Stocks"] = "stocks";
    TransactionAccountTypeEnum["Mortgage"] = "mortgage";
    TransactionAccountTypeEnum["Loans"] = "loans";
    TransactionAccountTypeEnum["Vehicle"] = "vehicle";
    TransactionAccountTypeEnum["Property"] = "property";
    TransactionAccountTypeEnum["Insurance"] = "insurance";
    TransactionAccountTypeEnum["OtherLiability"] = "other_liability";
})(TransactionAccountTypeEnum || (TransactionAccountTypeEnum = {}));
var TransactionAccount = /** @class */ (function (_super) {
    __extends(TransactionAccount, _super);
    function TransactionAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "currentBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_date" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "currentBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_exchange_rate" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "currentBalanceExchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "currentBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=institution" }),
        __metadata("design:type", Institution)
    ], TransactionAccount.prototype, "institution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "safeBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "safeBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starting_balance" }),
        __metadata("design:type", Number)
    ], TransactionAccount.prototype, "startingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starting_balance_date" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "startingBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], TransactionAccount.prototype, "updatedAt", void 0);
    return TransactionAccount;
}(SpeakeasyBase));
export { TransactionAccount };
