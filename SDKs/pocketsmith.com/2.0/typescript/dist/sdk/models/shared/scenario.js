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
export var ScenarioTypeEnum;
(function (ScenarioTypeEnum) {
    ScenarioTypeEnum["NoInterest"] = "no-interest";
    ScenarioTypeEnum["Savings"] = "savings";
    ScenarioTypeEnum["Debt"] = "debt";
})(ScenarioTypeEnum || (ScenarioTypeEnum = {}));
var Scenario = /** @class */ (function (_super) {
    __extends(Scenario, _super);
    function Scenario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=achieve_date" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "achieveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_balance" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "closingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closing_balance_date" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "closingBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "currentBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_date" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "currentBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_exchange_rate" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "currentBalanceExchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "currentBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interest_rate" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "interestRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interest_rate_repeat_id" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "interestRateRepeatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum-value" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "maximumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum-value" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "minimumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "safeBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "safeBalanceInBaseCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starting_balance" }),
        __metadata("design:type", Number)
    ], Scenario.prototype, "startingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starting_balance_date" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "startingBalanceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], Scenario.prototype, "updatedAt", void 0);
    return Scenario;
}(SpeakeasyBase));
export { Scenario };
