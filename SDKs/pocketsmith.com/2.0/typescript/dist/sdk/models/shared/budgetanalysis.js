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
import { Period } from "./period";
var BudgetAnalysis = /** @class */ (function (_super) {
    __extends(BudgetAnalysis, _super);
    function BudgetAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=average_actual_amount" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "averageActualAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=average_forecast_amount" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "averageForecastAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_date" }),
        __metadata("design:type", String)
    ], BudgetAnalysis.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periods", elemType: Period }),
        __metadata("design:type", Array)
    ], BudgetAnalysis.prototype, "periods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], BudgetAnalysis.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_actual_amount" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "totalActualAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_forecast_amount" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "totalForecastAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_over_by" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "totalOverBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_under_by" }),
        __metadata("design:type", Number)
    ], BudgetAnalysis.prototype, "totalUnderBy", void 0);
    return BudgetAnalysis;
}(SpeakeasyBase));
export { BudgetAnalysis };
