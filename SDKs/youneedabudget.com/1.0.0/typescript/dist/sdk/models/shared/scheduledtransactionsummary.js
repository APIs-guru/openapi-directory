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
export var ScheduledTransactionSummaryFlagColorEnum;
(function (ScheduledTransactionSummaryFlagColorEnum) {
    ScheduledTransactionSummaryFlagColorEnum["Red"] = "red";
    ScheduledTransactionSummaryFlagColorEnum["Orange"] = "orange";
    ScheduledTransactionSummaryFlagColorEnum["Yellow"] = "yellow";
    ScheduledTransactionSummaryFlagColorEnum["Green"] = "green";
    ScheduledTransactionSummaryFlagColorEnum["Blue"] = "blue";
    ScheduledTransactionSummaryFlagColorEnum["Purple"] = "purple";
})(ScheduledTransactionSummaryFlagColorEnum || (ScheduledTransactionSummaryFlagColorEnum = {}));
export var ScheduledTransactionSummaryFrequencyEnum;
(function (ScheduledTransactionSummaryFrequencyEnum) {
    ScheduledTransactionSummaryFrequencyEnum["Never"] = "never";
    ScheduledTransactionSummaryFrequencyEnum["Daily"] = "daily";
    ScheduledTransactionSummaryFrequencyEnum["Weekly"] = "weekly";
    ScheduledTransactionSummaryFrequencyEnum["EveryOtherWeek"] = "everyOtherWeek";
    ScheduledTransactionSummaryFrequencyEnum["TwiceAMonth"] = "twiceAMonth";
    ScheduledTransactionSummaryFrequencyEnum["Every4Weeks"] = "every4Weeks";
    ScheduledTransactionSummaryFrequencyEnum["Monthly"] = "monthly";
    ScheduledTransactionSummaryFrequencyEnum["EveryOtherMonth"] = "everyOtherMonth";
    ScheduledTransactionSummaryFrequencyEnum["Every3Months"] = "every3Months";
    ScheduledTransactionSummaryFrequencyEnum["Every4Months"] = "every4Months";
    ScheduledTransactionSummaryFrequencyEnum["TwiceAYear"] = "twiceAYear";
    ScheduledTransactionSummaryFrequencyEnum["Yearly"] = "yearly";
    ScheduledTransactionSummaryFrequencyEnum["EveryOtherYear"] = "everyOtherYear";
})(ScheduledTransactionSummaryFrequencyEnum || (ScheduledTransactionSummaryFrequencyEnum = {}));
var ScheduledTransactionSummary = /** @class */ (function (_super) {
    __extends(ScheduledTransactionSummary, _super);
    function ScheduledTransactionSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ScheduledTransactionSummary.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_first" }),
        __metadata("design:type", Date)
    ], ScheduledTransactionSummary.prototype, "dateFirst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_next" }),
        __metadata("design:type", Date)
    ], ScheduledTransactionSummary.prototype, "dateNext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ScheduledTransactionSummary.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_color" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "flagColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_account_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionSummary.prototype, "transferAccountId", void 0);
    return ScheduledTransactionSummary;
}(SpeakeasyBase));
export { ScheduledTransactionSummary };
