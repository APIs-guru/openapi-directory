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
export var FETCHSYNCLISTITEM_SERVERS = [
    "https://sync.twilio.com",
];
var FetchSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncListItemPathParams, _super);
    function FetchSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Index" }),
        __metadata("design:type", Number)
    ], FetchSyncListItemPathParams.prototype, "index", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], FetchSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncListItemPathParams.prototype, "serviceSid", void 0);
    return FetchSyncListItemPathParams;
}(SpeakeasyBase));
export { FetchSyncListItemPathParams };
var FetchSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncListItemSecurity, _super);
    function FetchSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncListItemSecurity;
}(SpeakeasyBase));
export { FetchSyncListItemSecurity };
var FetchSyncListItemRequest = /** @class */ (function (_super) {
    __extends(FetchSyncListItemRequest, _super);
    function FetchSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncListItemPathParams)
    ], FetchSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncListItemSecurity)
    ], FetchSyncListItemRequest.prototype, "security", void 0);
    return FetchSyncListItemRequest;
}(SpeakeasyBase));
export { FetchSyncListItemRequest };
var FetchSyncListItemResponse = /** @class */ (function (_super) {
    __extends(FetchSyncListItemResponse, _super);
    function FetchSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSyncListItemResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncListSyncListItem)
    ], FetchSyncListItemResponse.prototype, "syncV1ServiceSyncListSyncListItem", void 0);
    return FetchSyncListItemResponse;
}(SpeakeasyBase));
export { FetchSyncListItemResponse };
