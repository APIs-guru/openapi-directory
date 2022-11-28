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
var UpdateBulkInventoryQueryParams = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryQueryParams, _super);
    function UpdateBulkInventoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feedType" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryQueryParams.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryQueryParams.prototype, "shipNode", void 0);
    return UpdateBulkInventoryQueryParams;
}(SpeakeasyBase));
export { UpdateBulkInventoryQueryParams };
var UpdateBulkInventoryHeaders = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryHeaders, _super);
    function UpdateBulkInventoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryHeaders.prototype, "wmSvcName", void 0);
    return UpdateBulkInventoryHeaders;
}(SpeakeasyBase));
export { UpdateBulkInventoryHeaders };
var UpdateBulkInventoryRequestBodyFile = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryRequestBodyFile, _super);
    function UpdateBulkInventoryRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UpdateBulkInventoryRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UpdateBulkInventoryRequestBodyFile.prototype, "file", void 0);
    return UpdateBulkInventoryRequestBodyFile;
}(SpeakeasyBase));
export { UpdateBulkInventoryRequestBodyFile };
var UpdateBulkInventoryRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryRequestBody, _super);
    function UpdateBulkInventoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UpdateBulkInventoryRequestBodyFile)
    ], UpdateBulkInventoryRequestBody.prototype, "file", void 0);
    return UpdateBulkInventoryRequestBody;
}(SpeakeasyBase));
export { UpdateBulkInventoryRequestBody };
var UpdateBulkInventory200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateBulkInventory200ApplicationJson, _super);
    function UpdateBulkInventory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAttributes" }),
        __metadata("design:type", Map)
    ], UpdateBulkInventory200ApplicationJson.prototype, "additionalAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], UpdateBulkInventory200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedId" }),
        __metadata("design:type", String)
    ], UpdateBulkInventory200ApplicationJson.prototype, "feedId", void 0);
    return UpdateBulkInventory200ApplicationJson;
}(SpeakeasyBase));
export { UpdateBulkInventory200ApplicationJson };
var UpdateBulkInventoryRequest = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryRequest, _super);
    function UpdateBulkInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBulkInventoryQueryParams)
    ], UpdateBulkInventoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBulkInventoryHeaders)
    ], UpdateBulkInventoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateBulkInventoryRequestBody)
    ], UpdateBulkInventoryRequest.prototype, "request", void 0);
    return UpdateBulkInventoryRequest;
}(SpeakeasyBase));
export { UpdateBulkInventoryRequest };
var UpdateBulkInventoryResponse = /** @class */ (function (_super) {
    __extends(UpdateBulkInventoryResponse, _super);
    function UpdateBulkInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateBulkInventoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBulkInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBulkInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBulkInventory200ApplicationJson)
    ], UpdateBulkInventoryResponse.prototype, "updateBulkInventory200ApplicationJsonObject", void 0);
    return UpdateBulkInventoryResponse;
}(SpeakeasyBase));
export { UpdateBulkInventoryResponse };
