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
import * as shared from "../shared";
export var UPDATESYNCSYNCMAPITEM_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemPathParams, _super);
    function UpdateSyncSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Key" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemPathParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncSyncMapItemPathParams;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemPathParams };
var UpdateSyncSyncMapItemHeaders = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemHeaders, _super);
    function UpdateSyncSyncMapItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemHeaders.prototype, "ifMatch", void 0);
    return UpdateSyncSyncMapItemHeaders;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemHeaders };
var UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest, _super);
    function UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest.prototype, "data", void 0);
    return UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest };
var UpdateSyncSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemSecurity, _super);
    function UpdateSyncSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncSyncMapItemSecurity;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemSecurity };
var UpdateSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemRequest, _super);
    function UpdateSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncMapItemPathParams)
    ], UpdateSyncSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncMapItemHeaders)
    ], UpdateSyncSyncMapItemRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest)
    ], UpdateSyncSyncMapItemRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncMapItemSecurity)
    ], UpdateSyncSyncMapItemRequest.prototype, "security", void 0);
    return UpdateSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemRequest };
var UpdateSyncSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapItemResponse, _super);
    function UpdateSyncSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncMapSyncMapItem)
    ], UpdateSyncSyncMapItemResponse.prototype, "previewSyncServiceSyncMapSyncMapItem", void 0);
    return UpdateSyncSyncMapItemResponse;
}(SpeakeasyBase));
export { UpdateSyncSyncMapItemResponse };
