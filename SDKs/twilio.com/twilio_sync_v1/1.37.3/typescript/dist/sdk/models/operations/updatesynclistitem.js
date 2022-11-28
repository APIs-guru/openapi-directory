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
export var UpdateSyncListItemServerList = [
    "https://sync.twilio.com",
];
var UpdateSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemPathParams, _super);
    function UpdateSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Index" }),
        __metadata("design:type", Number)
    ], UpdateSyncListItemPathParams.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], UpdateSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncListItemPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncListItemPathParams;
}(SpeakeasyBase));
export { UpdateSyncListItemPathParams };
var UpdateSyncListItemHeaders = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemHeaders, _super);
    function UpdateSyncListItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateSyncListItemHeaders.prototype, "ifMatch", void 0);
    return UpdateSyncListItemHeaders;
}(SpeakeasyBase));
export { UpdateSyncListItemHeaders };
var UpdateSyncListItemUpdateSyncListItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemUpdateSyncListItemRequest, _super);
    function UpdateSyncListItemUpdateSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncListItemUpdateSyncListItemRequest.prototype, "collectionTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateSyncListItemUpdateSyncListItemRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ItemTtl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncListItemUpdateSyncListItemRequest.prototype, "itemTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncListItemUpdateSyncListItemRequest.prototype, "ttl", void 0);
    return UpdateSyncListItemUpdateSyncListItemRequest;
}(SpeakeasyBase));
export { UpdateSyncListItemUpdateSyncListItemRequest };
var UpdateSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemSecurity, _super);
    function UpdateSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncListItemSecurity;
}(SpeakeasyBase));
export { UpdateSyncListItemSecurity };
var UpdateSyncListItemRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemRequest, _super);
    function UpdateSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSyncListItemPathParams)
    ], UpdateSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSyncListItemHeaders)
    ], UpdateSyncListItemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncListItemUpdateSyncListItemRequest)
    ], UpdateSyncListItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSyncListItemSecurity)
    ], UpdateSyncListItemRequest.prototype, "security", void 0);
    return UpdateSyncListItemRequest;
}(SpeakeasyBase));
export { UpdateSyncListItemRequest };
var UpdateSyncListItemResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncListItemResponse, _super);
    function UpdateSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSyncListItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncListSyncListItem)
    ], UpdateSyncListItemResponse.prototype, "syncV1ServiceSyncListSyncListItem", void 0);
    return UpdateSyncListItemResponse;
}(SpeakeasyBase));
export { UpdateSyncListItemResponse };
