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
import { LeaveLine } from "./leaveline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperLine } from "./superline";
var PayTemplate = /** @class */ (function (_super) {
    __extends(PayTemplate, _super);
    function PayTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionLines", elemType: DeductionLine }),
        __metadata("design:type", Array)
    ], PayTemplate.prototype, "deductionLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EarningsLines", elemType: EarningsLine }),
        __metadata("design:type", Array)
    ], PayTemplate.prototype, "earningsLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine }),
        __metadata("design:type", Array)
    ], PayTemplate.prototype, "leaveLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReimbursementLines", elemType: ReimbursementLine }),
        __metadata("design:type", Array)
    ], PayTemplate.prototype, "reimbursementLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuperLines", elemType: SuperLine }),
        __metadata("design:type", Array)
    ], PayTemplate.prototype, "superLines", void 0);
    return PayTemplate;
}(SpeakeasyBase));
export { PayTemplate };
