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
var OptCapProgramInPriceHeaders = /** @class */ (function (_super) {
    __extends(OptCapProgramInPriceHeaders, _super);
    function OptCapProgramInPriceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], OptCapProgramInPriceHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], OptCapProgramInPriceHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], OptCapProgramInPriceHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], OptCapProgramInPriceHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], OptCapProgramInPriceHeaders.prototype, "wmSvcName", void 0);
    return OptCapProgramInPriceHeaders;
}(SpeakeasyBase));
export { OptCapProgramInPriceHeaders };
var OptCapProgramInPriceRequestBody = /** @class */ (function (_super) {
    __extends(OptCapProgramInPriceRequestBody, _super);
    function OptCapProgramInPriceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsidyEnrolled" }),
        __metadata("design:type", Boolean)
    ], OptCapProgramInPriceRequestBody.prototype, "subsidyEnrolled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsidyPreference" }),
        __metadata("design:type", Boolean)
    ], OptCapProgramInPriceRequestBody.prototype, "subsidyPreference", void 0);
    return OptCapProgramInPriceRequestBody;
}(SpeakeasyBase));
export { OptCapProgramInPriceRequestBody };
var OptCapProgramInPrice200ApplicationJsonStatusInfo = /** @class */ (function (_super) {
    __extends(OptCapProgramInPrice200ApplicationJsonStatusInfo, _super);
    function OptCapProgramInPrice200ApplicationJsonStatusInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsidyEnrolled" }),
        __metadata("design:type", Boolean)
    ], OptCapProgramInPrice200ApplicationJsonStatusInfo.prototype, "subsidyEnrolled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsidyPreference" }),
        __metadata("design:type", Boolean)
    ], OptCapProgramInPrice200ApplicationJsonStatusInfo.prototype, "subsidyPreference", void 0);
    return OptCapProgramInPrice200ApplicationJsonStatusInfo;
}(SpeakeasyBase));
export { OptCapProgramInPrice200ApplicationJsonStatusInfo };
var OptCapProgramInPrice200ApplicationJson = /** @class */ (function (_super) {
    __extends(OptCapProgramInPrice200ApplicationJson, _super);
    function OptCapProgramInPrice200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=martId" }),
        __metadata("design:type", String)
    ], OptCapProgramInPrice200ApplicationJson.prototype, "martId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusInfo" }),
        __metadata("design:type", OptCapProgramInPrice200ApplicationJsonStatusInfo)
    ], OptCapProgramInPrice200ApplicationJson.prototype, "statusInfo", void 0);
    return OptCapProgramInPrice200ApplicationJson;
}(SpeakeasyBase));
export { OptCapProgramInPrice200ApplicationJson };
var OptCapProgramInPriceRequest = /** @class */ (function (_super) {
    __extends(OptCapProgramInPriceRequest, _super);
    function OptCapProgramInPriceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OptCapProgramInPriceHeaders)
    ], OptCapProgramInPriceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OptCapProgramInPriceRequestBody)
    ], OptCapProgramInPriceRequest.prototype, "request", void 0);
    return OptCapProgramInPriceRequest;
}(SpeakeasyBase));
export { OptCapProgramInPriceRequest };
var OptCapProgramInPriceResponse = /** @class */ (function (_super) {
    __extends(OptCapProgramInPriceResponse, _super);
    function OptCapProgramInPriceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OptCapProgramInPriceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OptCapProgramInPriceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OptCapProgramInPrice200ApplicationJson)
    ], OptCapProgramInPriceResponse.prototype, "optCapProgramInPrice200ApplicationJsonObject", void 0);
    return OptCapProgramInPriceResponse;
}(SpeakeasyBase));
export { OptCapProgramInPriceResponse };
