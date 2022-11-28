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
export var PriceBulkUploadsFeedTypeEnum;
(function (PriceBulkUploadsFeedTypeEnum) {
    PriceBulkUploadsFeedTypeEnum["Price"] = "price";
    PriceBulkUploadsFeedTypeEnum["CptSellerEligibility"] = "CPT_SELLER_ELIGIBILITY";
})(PriceBulkUploadsFeedTypeEnum || (PriceBulkUploadsFeedTypeEnum = {}));
var PriceBulkUploadsQueryParams = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsQueryParams, _super);
    function PriceBulkUploadsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feedType" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsQueryParams.prototype, "feedType", void 0);
    return PriceBulkUploadsQueryParams;
}(SpeakeasyBase));
export { PriceBulkUploadsQueryParams };
var PriceBulkUploadsHeaders = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsHeaders, _super);
    function PriceBulkUploadsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsHeaders.prototype, "wmSvcName", void 0);
    return PriceBulkUploadsHeaders;
}(SpeakeasyBase));
export { PriceBulkUploadsHeaders };
var PriceBulkUploadsRequestBodyFile = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequestBodyFile, _super);
    function PriceBulkUploadsRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PriceBulkUploadsRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PriceBulkUploadsRequestBodyFile.prototype, "file", void 0);
    return PriceBulkUploadsRequestBodyFile;
}(SpeakeasyBase));
export { PriceBulkUploadsRequestBodyFile };
var PriceBulkUploadsRequestBody = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequestBody, _super);
    function PriceBulkUploadsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PriceBulkUploadsRequestBodyFile)
    ], PriceBulkUploadsRequestBody.prototype, "file", void 0);
    return PriceBulkUploadsRequestBody;
}(SpeakeasyBase));
export { PriceBulkUploadsRequestBody };
var PriceBulkUploads200ApplicationJson = /** @class */ (function (_super) {
    __extends(PriceBulkUploads200ApplicationJson, _super);
    function PriceBulkUploads200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAttributes" }),
        __metadata("design:type", Map)
    ], PriceBulkUploads200ApplicationJson.prototype, "additionalAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], PriceBulkUploads200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedId" }),
        __metadata("design:type", String)
    ], PriceBulkUploads200ApplicationJson.prototype, "feedId", void 0);
    return PriceBulkUploads200ApplicationJson;
}(SpeakeasyBase));
export { PriceBulkUploads200ApplicationJson };
var PriceBulkUploadsRequest = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsRequest, _super);
    function PriceBulkUploadsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PriceBulkUploadsQueryParams)
    ], PriceBulkUploadsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PriceBulkUploadsHeaders)
    ], PriceBulkUploadsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PriceBulkUploadsRequestBody)
    ], PriceBulkUploadsRequest.prototype, "request", void 0);
    return PriceBulkUploadsRequest;
}(SpeakeasyBase));
export { PriceBulkUploadsRequest };
var PriceBulkUploadsResponse = /** @class */ (function (_super) {
    __extends(PriceBulkUploadsResponse, _super);
    function PriceBulkUploadsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PriceBulkUploadsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriceBulkUploadsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PriceBulkUploadsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PriceBulkUploads200ApplicationJson)
    ], PriceBulkUploadsResponse.prototype, "priceBulkUploads200ApplicationJsonObject", void 0);
    return PriceBulkUploadsResponse;
}(SpeakeasyBase));
export { PriceBulkUploadsResponse };
