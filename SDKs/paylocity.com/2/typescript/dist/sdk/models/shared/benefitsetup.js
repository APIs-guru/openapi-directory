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
// BenefitSetup
/**
 * The benefit setup model
**/
var BenefitSetup = /** @class */ (function (_super) {
    __extends(BenefitSetup, _super);
    function BenefitSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=benefitClass" }),
        __metadata("design:type", String)
    ], BenefitSetup.prototype, "benefitClass", void 0);
    __decorate([
        Metadata({ data: "json, name=benefitClassEffectiveDate" }),
        __metadata("design:type", String)
    ], BenefitSetup.prototype, "benefitClassEffectiveDate", void 0);
    __decorate([
        Metadata({ data: "json, name=benefitSalary" }),
        __metadata("design:type", Number)
    ], BenefitSetup.prototype, "benefitSalary", void 0);
    __decorate([
        Metadata({ data: "json, name=benefitSalaryEffectiveDate" }),
        __metadata("design:type", String)
    ], BenefitSetup.prototype, "benefitSalaryEffectiveDate", void 0);
    __decorate([
        Metadata({ data: "json, name=doNotApplyAdministrativePeriod" }),
        __metadata("design:type", Boolean)
    ], BenefitSetup.prototype, "doNotApplyAdministrativePeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=isMeasureAcaEligibility" }),
        __metadata("design:type", Boolean)
    ], BenefitSetup.prototype, "isMeasureAcaEligibility", void 0);
    return BenefitSetup;
}(SpeakeasyBase));
export { BenefitSetup };
