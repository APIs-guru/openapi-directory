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
// PayRunJobInstructionPayRunJobInstructionEmployee
/**
 * The pay run job instructions' employees
**/
var PayRunJobInstructionPayRunJobInstructionEmployee = /** @class */ (function (_super) {
    __extends(PayRunJobInstructionPayRunJobInstructionEmployee, _super);
    function PayRunJobInstructionPayRunJobInstructionEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Employee" }),
        __metadata("design:type", Array)
    ], PayRunJobInstructionPayRunJobInstructionEmployee.prototype, "employee", void 0);
    return PayRunJobInstructionPayRunJobInstructionEmployee;
}(SpeakeasyBase));
export { PayRunJobInstructionPayRunJobInstructionEmployee };
// PayRunJobInstructionPayRunJobInstructionPaySchedule
/**
 * The pay run job instructions' pay schedule
**/
var PayRunJobInstructionPayRunJobInstructionPaySchedule = /** @class */ (function (_super) {
    __extends(PayRunJobInstructionPayRunJobInstructionPaySchedule, _super);
    function PayRunJobInstructionPayRunJobInstructionPaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], PayRunJobInstructionPayRunJobInstructionPaySchedule.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], PayRunJobInstructionPayRunJobInstructionPaySchedule.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], PayRunJobInstructionPayRunJobInstructionPaySchedule.prototype, "atTitle", void 0);
    return PayRunJobInstructionPayRunJobInstructionPaySchedule;
}(SpeakeasyBase));
export { PayRunJobInstructionPayRunJobInstructionPaySchedule };
var PayRunJobInstructionPayRunJobInstruction = /** @class */ (function (_super) {
    __extends(PayRunJobInstructionPayRunJobInstruction, _super);
    function PayRunJobInstructionPayRunJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Employees" }),
        __metadata("design:type", PayRunJobInstructionPayRunJobInstructionEmployee)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "employees", void 0);
    __decorate([
        Metadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "holdingDate", void 0);
    __decorate([
        Metadata({ data: "json, name=IsSupplementary" }),
        __metadata("design:type", Boolean)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "isSupplementary", void 0);
    __decorate([
        Metadata({ data: "json, name=PaySchedule" }),
        __metadata("design:type", PayRunJobInstructionPayRunJobInstructionPaySchedule)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "paySchedule", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", Date)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], PayRunJobInstructionPayRunJobInstruction.prototype, "startDate", void 0);
    return PayRunJobInstructionPayRunJobInstruction;
}(SpeakeasyBase));
export { PayRunJobInstructionPayRunJobInstruction };
var PayRunJobInstruction = /** @class */ (function (_super) {
    __extends(PayRunJobInstruction, _super);
    function PayRunJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=PayRunJobInstruction" }),
        __metadata("design:type", PayRunJobInstructionPayRunJobInstruction)
    ], PayRunJobInstruction.prototype, "payRunJobInstruction", void 0);
    return PayRunJobInstruction;
}(SpeakeasyBase));
export { PayRunJobInstruction };
