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
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
export var ScheduledTransactionDetailFlagColorEnum;
(function (ScheduledTransactionDetailFlagColorEnum) {
    ScheduledTransactionDetailFlagColorEnum["Red"] = "red";
    ScheduledTransactionDetailFlagColorEnum["Orange"] = "orange";
    ScheduledTransactionDetailFlagColorEnum["Yellow"] = "yellow";
    ScheduledTransactionDetailFlagColorEnum["Green"] = "green";
    ScheduledTransactionDetailFlagColorEnum["Blue"] = "blue";
    ScheduledTransactionDetailFlagColorEnum["Purple"] = "purple";
})(ScheduledTransactionDetailFlagColorEnum || (ScheduledTransactionDetailFlagColorEnum = {}));
export var ScheduledTransactionDetailFrequencyEnum;
(function (ScheduledTransactionDetailFrequencyEnum) {
    ScheduledTransactionDetailFrequencyEnum["Never"] = "never";
    ScheduledTransactionDetailFrequencyEnum["Daily"] = "daily";
    ScheduledTransactionDetailFrequencyEnum["Weekly"] = "weekly";
    ScheduledTransactionDetailFrequencyEnum["EveryOtherWeek"] = "everyOtherWeek";
    ScheduledTransactionDetailFrequencyEnum["TwiceAMonth"] = "twiceAMonth";
    ScheduledTransactionDetailFrequencyEnum["Every4Weeks"] = "every4Weeks";
    ScheduledTransactionDetailFrequencyEnum["Monthly"] = "monthly";
    ScheduledTransactionDetailFrequencyEnum["EveryOtherMonth"] = "everyOtherMonth";
    ScheduledTransactionDetailFrequencyEnum["Every3Months"] = "every3Months";
    ScheduledTransactionDetailFrequencyEnum["Every4Months"] = "every4Months";
    ScheduledTransactionDetailFrequencyEnum["TwiceAYear"] = "twiceAYear";
    ScheduledTransactionDetailFrequencyEnum["Yearly"] = "yearly";
    ScheduledTransactionDetailFrequencyEnum["EveryOtherYear"] = "everyOtherYear";
})(ScheduledTransactionDetailFrequencyEnum || (ScheduledTransactionDetailFrequencyEnum = {}));
var ScheduledTransactionDetail = /** @class */ (function (_super) {
    __extends(ScheduledTransactionDetail, _super);
    function ScheduledTransactionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_name" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ScheduledTransactionDetail.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_name" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "categoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_first" }),
        __metadata("design:type", Date)
    ], ScheduledTransactionDetail.prototype, "dateFirst", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_next" }),
        __metadata("design:type", Date)
    ], ScheduledTransactionDetail.prototype, "dateNext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ScheduledTransactionDetail.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_color" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "flagColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "memo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "payeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payee_name" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "payeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: ScheduledSubTransaction }),
        __metadata("design:type", Array)
    ], ScheduledTransactionDetail.prototype, "subtransactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_account_id" }),
        __metadata("design:type", String)
    ], ScheduledTransactionDetail.prototype, "transferAccountId", void 0);
    return ScheduledTransactionDetail;
}(SpeakeasyBase));
export { ScheduledTransactionDetail };
