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
var PayorCreateApplicationRequestPathParams = /** @class */ (function (_super) {
    __extends(PayorCreateApplicationRequestPathParams, _super);
    function PayorCreateApplicationRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" }),
        __metadata("design:type", String)
    ], PayorCreateApplicationRequestPathParams.prototype, "payorId", void 0);
    return PayorCreateApplicationRequestPathParams;
}(SpeakeasyBase));
export { PayorCreateApplicationRequestPathParams };
var PayorCreateApplicationRequestRequest = /** @class */ (function (_super) {
    __extends(PayorCreateApplicationRequestRequest, _super);
    function PayorCreateApplicationRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PayorCreateApplicationRequestPathParams)
    ], PayorCreateApplicationRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PayorCreateApplicationRequest)
    ], PayorCreateApplicationRequestRequest.prototype, "request", void 0);
    return PayorCreateApplicationRequestRequest;
}(SpeakeasyBase));
export { PayorCreateApplicationRequestRequest };
var PayorCreateApplicationRequestResponse = /** @class */ (function (_super) {
    __extends(PayorCreateApplicationRequestResponse, _super);
    function PayorCreateApplicationRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PayorCreateApplicationRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PayorCreateApplicationRequestResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PayorCreateApplicationRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorCreateApplicationRequestResponse.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorCreateApplicationRequestResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorCreateApplicationRequestResponse.prototype, "inlineResponse404", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PayorCreateApplicationRequestResponse.prototype, "inlineResponse409", void 0);
    return PayorCreateApplicationRequestResponse;
}(SpeakeasyBase));
export { PayorCreateApplicationRequestResponse };
