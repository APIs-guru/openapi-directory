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
export var FetchSyncSyncMapItemServerList = [
    "https://preview.twilio.com",
];
var FetchSyncSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncSyncMapItemPathParams, _super);
    function FetchSyncSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" }),
        __metadata("design:type", String)
    ], FetchSyncSyncMapItemPathParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], FetchSyncSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return FetchSyncSyncMapItemPathParams;
}(SpeakeasyBase));
export { FetchSyncSyncMapItemPathParams };
var FetchSyncSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncSyncMapItemSecurity, _super);
    function FetchSyncSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncSyncMapItemSecurity;
}(SpeakeasyBase));
export { FetchSyncSyncMapItemSecurity };
var FetchSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(FetchSyncSyncMapItemRequest, _super);
    function FetchSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncSyncMapItemPathParams)
    ], FetchSyncSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncSyncMapItemSecurity)
    ], FetchSyncSyncMapItemRequest.prototype, "security", void 0);
    return FetchSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { FetchSyncSyncMapItemRequest };
var FetchSyncSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(FetchSyncSyncMapItemResponse, _super);
    function FetchSyncSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSyncSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncMapSyncMapItem)
    ], FetchSyncSyncMapItemResponse.prototype, "previewSyncServiceSyncMapSyncMapItem", void 0);
    return FetchSyncSyncMapItemResponse;
}(SpeakeasyBase));
export { FetchSyncSyncMapItemResponse };
