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
export var UPDATESYNCSYNCLISTITEM_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemPathParams, _super);
    function UpdateSyncSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Index" }),
        __metadata("design:type", Number)
    ], UpdateSyncSyncListItemPathParams.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListItemPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncSyncListItemPathParams;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemPathParams };
var UpdateSyncSyncListItemHeaders = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemHeaders, _super);
    function UpdateSyncSyncListItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListItemHeaders.prototype, "ifMatch", void 0);
    return UpdateSyncSyncListItemHeaders;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemHeaders };
var UpdateSyncSyncListItemUpdateSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemUpdateSyncSyncListItemRequest, _super);
    function UpdateSyncSyncListItemUpdateSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateSyncSyncListItemUpdateSyncSyncListItemRequest.prototype, "data", void 0);
    return UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemUpdateSyncSyncListItemRequest };
var UpdateSyncSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemSecurity, _super);
    function UpdateSyncSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncSyncListItemSecurity;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemSecurity };
var UpdateSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemRequest, _super);
    function UpdateSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncListItemPathParams)
    ], UpdateSyncSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncListItemHeaders)
    ], UpdateSyncSyncListItemRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncSyncListItemUpdateSyncSyncListItemRequest)
    ], UpdateSyncSyncListItemRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncListItemSecurity)
    ], UpdateSyncSyncListItemRequest.prototype, "security", void 0);
    return UpdateSyncSyncListItemRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemRequest };
var UpdateSyncSyncListItemResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListItemResponse, _super);
    function UpdateSyncSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncSyncListItemResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncListSyncListItem)
    ], UpdateSyncSyncListItemResponse.prototype, "previewSyncServiceSyncListSyncListItem", void 0);
    return UpdateSyncSyncListItemResponse;
}(SpeakeasyBase));
export { UpdateSyncSyncListItemResponse };
