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
import { AutoTopUpConfig2 } from "./autotopupconfig2";
import { Notifications2 } from "./notifications2";
export var SourceAccountResponseV3CurrencyEnum;
(function (SourceAccountResponseV3CurrencyEnum) {
    SourceAccountResponseV3CurrencyEnum["Usd"] = "USD";
    SourceAccountResponseV3CurrencyEnum["Eur"] = "EUR";
    SourceAccountResponseV3CurrencyEnum["Gbp"] = "GBP";
    SourceAccountResponseV3CurrencyEnum["Cad"] = "CAD";
    SourceAccountResponseV3CurrencyEnum["Hkd"] = "HKD";
})(SourceAccountResponseV3CurrencyEnum || (SourceAccountResponseV3CurrencyEnum = {}));
var SourceAccountResponseV3 = /** @class */ (function (_super) {
    __extends(SourceAccountResponseV3, _super);
    function SourceAccountResponseV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoTopUpConfig" }),
        __metadata("design:type", AutoTopUpConfig2)
    ], SourceAccountResponseV3.prototype, "autoTopUpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], SourceAccountResponseV3.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SourceAccountResponseV3.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletedAt" }),
        __metadata("design:type", Date)
    ], SourceAccountResponseV3.prototype, "deletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fundingRef" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "fundingRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications" }),
        __metadata("design:type", Notifications2)
    ], SourceAccountResponseV3.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalAccountId" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "physicalAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalAccountName" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "physicalAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pooled" }),
        __metadata("design:type", Boolean)
    ], SourceAccountResponseV3.prototype, "pooled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=railsId" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "railsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SourceAccountResponseV3.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDeleted" }),
        __metadata("design:type", Boolean)
    ], SourceAccountResponseV3.prototype, "userDeleted", void 0);
    return SourceAccountResponseV3;
}(SpeakeasyBase));
export { SourceAccountResponseV3 };
