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
import { Account } from "./account";
import { Category } from "./category";
import { CategoryGroup } from "./categorygroup";
import { CurrencyFormat } from "./currencyformat";
import { DateFormat } from "./dateformat";
import { MonthDetail } from "./monthdetail";
import { PayeeLocation } from "./payeelocation";
import { Payee } from "./payee";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
import { ScheduledTransactionSummary } from "./scheduledtransactionsummary";
import { SubTransaction } from "./subtransaction";
import { TransactionSummary } from "./transactionsummary";
var BudgetDetail = /** @class */ (function (_super) {
    __extends(BudgetDetail, _super);
    function BudgetDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: Category }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_groups", elemType: CategoryGroup }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "categoryGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_format" }),
        __metadata("design:type", CurrencyFormat)
    ], BudgetDetail.prototype, "currencyFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_format" }),
        __metadata("design:type", DateFormat)
    ], BudgetDetail.prototype, "dateFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_month" }),
        __metadata("design:type", Date)
    ], BudgetDetail.prototype, "firstMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BudgetDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_modified_on" }),
        __metadata("design:type", Date)
    ], BudgetDetail.prototype, "lastModifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_month" }),
        __metadata("design:type", Date)
    ], BudgetDetail.prototype, "lastMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=months", elemType: MonthDetail }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "months", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BudgetDetail.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_locations", elemType: PayeeLocation }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "payeeLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payees", elemType: Payee }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "payees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduled_subtransactions", elemType: ScheduledSubTransaction }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "scheduledSubtransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduled_transactions", elemType: ScheduledTransactionSummary }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "scheduledTransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: SubTransaction }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "subtransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactions", elemType: TransactionSummary }),
        __metadata("design:type", Array)
    ], BudgetDetail.prototype, "transactions", void 0);
    return BudgetDetail;
}(SpeakeasyBase));
export { BudgetDetail };
