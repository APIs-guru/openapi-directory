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
// AdditionalRate
/**
 * The additional pay rate model
**/
var AdditionalRate = /** @class */ (function (_super) {
    __extends(AdditionalRate, _super);
    function AdditionalRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeReason" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "changeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter1" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "costCenter1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter2" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "costCenter2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costCenter3" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "costCenter3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endCheckDate" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "endCheckDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdditionalRate.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateCode" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "rateCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateNotes" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "rateNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratePer" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "ratePer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shift" }),
        __metadata("design:type", String)
    ], AdditionalRate.prototype, "shift", void 0);
    return AdditionalRate;
}(SpeakeasyBase));
export { AdditionalRate };
