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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// RtiJobInstructionRtiJobInstructionEmployer
/**
 * The rti job instructions' employer
**/
var RtiJobInstructionRtiJobInstructionEmployer = /** @class */ (function (_super) {
    __extends(RtiJobInstructionRtiJobInstructionEmployer, _super);
    function RtiJobInstructionRtiJobInstructionEmployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionEmployer.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionEmployer.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionEmployer.prototype, "atTitle", void 0);
    return RtiJobInstructionRtiJobInstructionEmployer;
}(SpeakeasyBase));
export { RtiJobInstructionRtiJobInstructionEmployer };
export var RtiJobInstructionRtiJobInstructionLateReasonEnum;
(function (RtiJobInstructionRtiJobInstructionLateReasonEnum) {
    RtiJobInstructionRtiJobInstructionLateReasonEnum["A"] = "A";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["B"] = "B";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["C"] = "C";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["D"] = "D";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["F"] = "F";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["G"] = "G";
    RtiJobInstructionRtiJobInstructionLateReasonEnum["H"] = "H";
})(RtiJobInstructionRtiJobInstructionLateReasonEnum || (RtiJobInstructionRtiJobInstructionLateReasonEnum = {}));
// RtiJobInstructionRtiJobInstructionPaySchedule
/**
 * The rti job instructions' pay schedule
**/
var RtiJobInstructionRtiJobInstructionPaySchedule = /** @class */ (function (_super) {
    __extends(RtiJobInstructionRtiJobInstructionPaySchedule, _super);
    function RtiJobInstructionRtiJobInstructionPaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionPaySchedule.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionPaySchedule.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionPaySchedule.prototype, "atTitle", void 0);
    return RtiJobInstructionRtiJobInstructionPaySchedule;
}(SpeakeasyBase));
export { RtiJobInstructionRtiJobInstructionPaySchedule };
// RtiJobInstructionRtiJobInstructionRtiTransaction
/**
 * The rti job instructions' rti transaction
**/
var RtiJobInstructionRtiJobInstructionRtiTransaction = /** @class */ (function (_super) {
    __extends(RtiJobInstructionRtiJobInstructionRtiTransaction, _super);
    function RtiJobInstructionRtiJobInstructionRtiTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionRtiTransaction.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionRtiTransaction.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstructionRtiTransaction.prototype, "atTitle", void 0);
    return RtiJobInstructionRtiJobInstructionRtiTransaction;
}(SpeakeasyBase));
export { RtiJobInstructionRtiJobInstructionRtiTransaction };
var RtiJobInstructionRtiJobInstruction = /** @class */ (function (_super) {
    __extends(RtiJobInstructionRtiJobInstruction, _super);
    function RtiJobInstructionRtiJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=EarlierTaxYear" }),
        __metadata("design:type", Number)
    ], RtiJobInstructionRtiJobInstruction.prototype, "earlierTaxYear", void 0);
    __decorate([
        Metadata({ data: "json, name=Employer" }),
        __metadata("design:type", RtiJobInstructionRtiJobInstructionEmployer)
    ], RtiJobInstructionRtiJobInstruction.prototype, "employer", void 0);
    __decorate([
        Metadata({ data: "json, name=FinalSubmissionForYear" }),
        __metadata("design:type", Boolean)
    ], RtiJobInstructionRtiJobInstruction.prototype, "finalSubmissionForYear", void 0);
    __decorate([
        Metadata({ data: "json, name=Generate" }),
        __metadata("design:type", Boolean)
    ], RtiJobInstructionRtiJobInstruction.prototype, "generate", void 0);
    __decorate([
        Metadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "holdingDate", void 0);
    __decorate([
        Metadata({ data: "json, name=LateReason" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstruction.prototype, "lateReason", void 0);
    __decorate([
        Metadata({ data: "json, name=NoPaymentForPeriodFrom" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "noPaymentForPeriodFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=NoPaymentForPeriodTo" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "noPaymentForPeriodTo", void 0);
    __decorate([
        Metadata({ data: "json, name=PaySchedule" }),
        __metadata("design:type", RtiJobInstructionRtiJobInstructionPaySchedule)
    ], RtiJobInstructionRtiJobInstruction.prototype, "paySchedule", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=PeriodOfInactivityFrom" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "periodOfInactivityFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=PeriodOfInactivityTo" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "periodOfInactivityTo", void 0);
    __decorate([
        Metadata({ data: "json, name=RtiTransaction" }),
        __metadata("design:type", RtiJobInstructionRtiJobInstructionRtiTransaction)
    ], RtiJobInstructionRtiJobInstruction.prototype, "rtiTransaction", void 0);
    __decorate([
        Metadata({ data: "json, name=RtiType" }),
        __metadata("design:type", String)
    ], RtiJobInstructionRtiJobInstruction.prototype, "rtiType", void 0);
    __decorate([
        Metadata({ data: "json, name=SchemeCeased" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "schemeCeased", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxMonth" }),
        __metadata("design:type", Number)
    ], RtiJobInstructionRtiJobInstruction.prototype, "taxMonth", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], RtiJobInstructionRtiJobInstruction.prototype, "taxYear", void 0);
    __decorate([
        Metadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", Date)
    ], RtiJobInstructionRtiJobInstruction.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=Transmit" }),
        __metadata("design:type", Boolean)
    ], RtiJobInstructionRtiJobInstruction.prototype, "transmit", void 0);
    return RtiJobInstructionRtiJobInstruction;
}(SpeakeasyBase));
export { RtiJobInstructionRtiJobInstruction };
var RtiJobInstruction = /** @class */ (function (_super) {
    __extends(RtiJobInstruction, _super);
    function RtiJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RtiJobInstruction" }),
        __metadata("design:type", RtiJobInstructionRtiJobInstruction)
    ], RtiJobInstruction.prototype, "rtiJobInstruction", void 0);
    return RtiJobInstruction;
}(SpeakeasyBase));
export { RtiJobInstruction };
