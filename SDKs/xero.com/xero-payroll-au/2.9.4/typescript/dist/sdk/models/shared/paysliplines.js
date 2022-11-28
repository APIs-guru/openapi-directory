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
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveAccrualLine } from "./leaveaccrualline";
import { LeaveEarningsLine } from "./leaveearningsline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperannuationLine } from "./superannuationline";
import { TaxLine } from "./taxline";
var PayslipLines = /** @class */ (function (_super) {
    __extends(PayslipLines, _super);
    function PayslipLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionLines", elemType: DeductionLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "deductionLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsLines", elemType: EarningsLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "earningsLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveAccrualLines", elemType: LeaveAccrualLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "leaveAccrualLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveEarningsLines", elemType: LeaveEarningsLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "leaveEarningsLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReimbursementLines", elemType: ReimbursementLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "reimbursementLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperannuationLines", elemType: SuperannuationLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "superannuationLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxLines", elemType: TaxLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "taxLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimesheetEarningsLines", elemType: EarningsLine }),
        __metadata("design:type", Array)
    ], PayslipLines.prototype, "timesheetEarningsLines", void 0);
    return PayslipLines;
}(SpeakeasyBase));
export { PayslipLines };
