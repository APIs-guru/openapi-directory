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
export var PayLinePayLinePayCodeTypeEnum;
(function (PayLinePayLinePayCodeTypeEnum) {
    PayLinePayLinePayCodeTypeEnum["NotSet"] = "NotSet";
    PayLinePayLinePayCodeTypeEnum["Payment"] = "Payment";
    PayLinePayLinePayCodeTypeEnum["Deduction"] = "Deduction";
})(PayLinePayLinePayCodeTypeEnum || (PayLinePayLinePayCodeTypeEnum = {}));
var PayLinePayLine = /** @class */ (function (_super) {
    __extends(PayLinePayLine, _super);
    function PayLinePayLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Calculator" }),
        __metadata("design:type", String)
    ], PayLinePayLine.prototype, "calculator", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PayLinePayLine.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Generated" }),
        __metadata("design:type", Date)
    ], PayLinePayLine.prototype, "generated", void 0);
    __decorate([
        Metadata({ data: "json, name=PayCode" }),
        __metadata("design:type", String)
    ], PayLinePayLine.prototype, "payCode", void 0);
    __decorate([
        Metadata({ data: "json, name=PayCodeType" }),
        __metadata("design:type", String)
    ], PayLinePayLine.prototype, "payCodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=PayRunSequence" }),
        __metadata("design:type", Number)
    ], PayLinePayLine.prototype, "payRunSequence", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", Date)
    ], PayLinePayLine.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxPeriod" }),
        __metadata("design:type", Number)
    ], PayLinePayLine.prototype, "taxPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], PayLinePayLine.prototype, "taxYear", void 0);
    __decorate([
        Metadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], PayLinePayLine.prototype, "value", void 0);
    return PayLinePayLine;
}(SpeakeasyBase));
export { PayLinePayLine };
var PayLine = /** @class */ (function (_super) {
    __extends(PayLine, _super);
    function PayLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=PayLine" }),
        __metadata("design:type", PayLinePayLine)
    ], PayLine.prototype, "payLine", void 0);
    return PayLine;
}(SpeakeasyBase));
export { PayLine };
