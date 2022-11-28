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
import * as shared from "../shared";
var PayorAddPayorLogoPathParams = /** @class */ (function (_super) {
    __extends(PayorAddPayorLogoPathParams, _super);
    function PayorAddPayorLogoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" }),
        __metadata("design:type", String)
    ], PayorAddPayorLogoPathParams.prototype, "payorId", void 0);
    return PayorAddPayorLogoPathParams;
}(SpeakeasyBase));
export { PayorAddPayorLogoPathParams };
var PayorAddPayorLogoRequest = /** @class */ (function (_super) {
    __extends(PayorAddPayorLogoRequest, _super);
    function PayorAddPayorLogoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PayorAddPayorLogoPathParams)
    ], PayorAddPayorLogoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.PayorLogoRequest)
    ], PayorAddPayorLogoRequest.prototype, "request", void 0);
    return PayorAddPayorLogoRequest;
}(SpeakeasyBase));
export { PayorAddPayorLogoRequest };
var PayorAddPayorLogoResponse = /** @class */ (function (_super) {
    __extends(PayorAddPayorLogoResponse, _super);
    function PayorAddPayorLogoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PayorAddPayorLogoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PayorAddPayorLogoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorAddPayorLogoResponse.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorAddPayorLogoResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorAddPayorLogoResponse.prototype, "inlineResponse404", void 0);
    return PayorAddPayorLogoResponse;
}(SpeakeasyBase));
export { PayorAddPayorLogoResponse };
