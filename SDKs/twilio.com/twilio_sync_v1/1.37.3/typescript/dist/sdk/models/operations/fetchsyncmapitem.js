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
export var FetchSyncMapItemServerList = [
    "https://sync.twilio.com",
];
var FetchSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncMapItemPathParams, _super);
    function FetchSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Key" }),
        __metadata("design:type", String)
    ], FetchSyncMapItemPathParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], FetchSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return FetchSyncMapItemPathParams;
}(SpeakeasyBase));
export { FetchSyncMapItemPathParams };
var FetchSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncMapItemSecurity, _super);
    function FetchSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncMapItemSecurity;
}(SpeakeasyBase));
export { FetchSyncMapItemSecurity };
var FetchSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(FetchSyncMapItemRequest, _super);
    function FetchSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncMapItemPathParams)
    ], FetchSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncMapItemSecurity)
    ], FetchSyncMapItemRequest.prototype, "security", void 0);
    return FetchSyncMapItemRequest;
}(SpeakeasyBase));
export { FetchSyncMapItemRequest };
var FetchSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(FetchSyncMapItemResponse, _super);
    function FetchSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncMapSyncMapItem)
    ], FetchSyncMapItemResponse.prototype, "syncV1ServiceSyncMapSyncMapItem", void 0);
    return FetchSyncMapItemResponse;
}(SpeakeasyBase));
export { FetchSyncMapItemResponse };
