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
export var PayRunPayRunPayFrequencyEnum;
(function (PayRunPayRunPayFrequencyEnum) {
    PayRunPayRunPayFrequencyEnum["Weekly"] = "Weekly";
    PayRunPayRunPayFrequencyEnum["Monthly"] = "Monthly";
    PayRunPayRunPayFrequencyEnum["TwoWeekly"] = "TwoWeekly";
    PayRunPayRunPayFrequencyEnum["FourWeekly"] = "FourWeekly";
    PayRunPayRunPayFrequencyEnum["Yearly"] = "Yearly";
})(PayRunPayRunPayFrequencyEnum || (PayRunPayRunPayFrequencyEnum = {}));
// PayRunPayRunPaySchedule
/**
 * The pay runs' pay schedule
**/
var PayRunPayRunPaySchedule = /** @class */ (function (_super) {
    __extends(PayRunPayRunPaySchedule, _super);
    function PayRunPayRunPaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], PayRunPayRunPaySchedule.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], PayRunPayRunPaySchedule.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], PayRunPayRunPaySchedule.prototype, "atTitle", void 0);
    return PayRunPayRunPaySchedule;
}(SpeakeasyBase));
export { PayRunPayRunPaySchedule };
// PayRunPayRunProceedingPayRun
/**
 * The pay runs' proceeding pay run
**/
var PayRunPayRunProceedingPayRun = /** @class */ (function (_super) {
    __extends(PayRunPayRunProceedingPayRun, _super);
    function PayRunPayRunProceedingPayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], PayRunPayRunProceedingPayRun.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], PayRunPayRunProceedingPayRun.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], PayRunPayRunProceedingPayRun.prototype, "atTitle", void 0);
    return PayRunPayRunProceedingPayRun;
}(SpeakeasyBase));
export { PayRunPayRunProceedingPayRun };
var PayRunPayRun = /** @class */ (function (_super) {
    __extends(PayRunPayRun, _super);
    function PayRunPayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Executed" }),
        __metadata("design:type", Date)
    ], PayRunPayRun.prototype, "executed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSupplementary" }),
        __metadata("design:type", Boolean)
    ], PayRunPayRun.prototype, "isSupplementary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], PayRunPayRun.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaySchedule" }),
        __metadata("design:type", PayRunPayRunPaySchedule)
    ], PayRunPayRun.prototype, "paySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", Date)
    ], PayRunPayRun.prototype, "paymentDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeriodEnd" }),
        __metadata("design:type", Date)
    ], PayRunPayRun.prototype, "periodEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeriodStart" }),
        __metadata("design:type", Date)
    ], PayRunPayRun.prototype, "periodStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProceedingPayRun" }),
        __metadata("design:type", PayRunPayRunProceedingPayRun)
    ], PayRunPayRun.prototype, "proceedingPayRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sequence" }),
        __metadata("design:type", Number)
    ], PayRunPayRun.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxPeriod" }),
        __metadata("design:type", Number)
    ], PayRunPayRun.prototype, "taxPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], PayRunPayRun.prototype, "taxYear", void 0);
    return PayRunPayRun;
}(SpeakeasyBase));
export { PayRunPayRun };
var PayRun = /** @class */ (function (_super) {
    __extends(PayRun, _super);
    function PayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayRun" }),
        __metadata("design:type", PayRunPayRun)
    ], PayRun.prototype, "payRun", void 0);
    return PayRun;
}(SpeakeasyBase));
export { PayRun };
