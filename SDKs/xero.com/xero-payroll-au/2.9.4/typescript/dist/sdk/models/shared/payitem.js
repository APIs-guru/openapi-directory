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
import { DeductionTypeInput } from "./deductiontype";
import { EarningsRateInput } from "./earningsrate";
import { LeaveTypeInput } from "./leavetype";
import { ReimbursementTypeInput } from "./reimbursementtype";
import { DeductionType } from "./deductiontype";
import { EarningsRate } from "./earningsrate";
import { LeaveType } from "./leavetype";
import { ReimbursementType } from "./reimbursementtype";
var PayItemInput = /** @class */ (function (_super) {
    __extends(PayItemInput, _super);
    function PayItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionTypes", elemType: DeductionTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "deductionTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsRates", elemType: EarningsRateInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "earningsRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveTypes", elemType: LeaveTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "leaveTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReimbursementTypes", elemType: ReimbursementTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "reimbursementTypes", void 0);
    return PayItemInput;
}(SpeakeasyBase));
export { PayItemInput };
var PayItem = /** @class */ (function (_super) {
    __extends(PayItem, _super);
    function PayItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionTypes", elemType: DeductionType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "deductionTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsRates", elemType: EarningsRate }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "earningsRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveTypes", elemType: LeaveType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "leaveTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReimbursementTypes", elemType: ReimbursementType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "reimbursementTypes", void 0);
    return PayItem;
}(SpeakeasyBase));
export { PayItem };
