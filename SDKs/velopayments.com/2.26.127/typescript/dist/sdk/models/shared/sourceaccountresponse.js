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
export var SourceAccountResponseCurrencyEnum;
(function (SourceAccountResponseCurrencyEnum) {
    SourceAccountResponseCurrencyEnum["Usd"] = "USD";
})(SourceAccountResponseCurrencyEnum || (SourceAccountResponseCurrencyEnum = {}));
var SourceAccountResponse = /** @class */ (function (_super) {
    __extends(SourceAccountResponse, _super);
    function SourceAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], SourceAccountResponse.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceVisible" }),
        __metadata("design:type", Boolean)
    ], SourceAccountResponse.prototype, "balanceVisible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingAccountId" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "fundingAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingRef" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "fundingRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalAccountId" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "physicalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalAccountName" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "physicalAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pooled" }),
        __metadata("design:type", Boolean)
    ], SourceAccountResponse.prototype, "pooled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=railsId" }),
        __metadata("design:type", String)
    ], SourceAccountResponse.prototype, "railsId", void 0);
    return SourceAccountResponse;
}(SpeakeasyBase));
export { SourceAccountResponse };
