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
export var FETCHSYNCSYNCLIST_SERVERS = [
    "https://preview.twilio.com",
];
var FetchSyncSyncListPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncSyncListPathParams, _super);
    function FetchSyncSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncSyncListPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSyncSyncListPathParams.prototype, "sid", void 0);
    return FetchSyncSyncListPathParams;
}(SpeakeasyBase));
export { FetchSyncSyncListPathParams };
var FetchSyncSyncListSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncSyncListSecurity, _super);
    function FetchSyncSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncSyncListSecurity;
}(SpeakeasyBase));
export { FetchSyncSyncListSecurity };
var FetchSyncSyncListRequest = /** @class */ (function (_super) {
    __extends(FetchSyncSyncListRequest, _super);
    function FetchSyncSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncSyncListPathParams)
    ], FetchSyncSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncSyncListSecurity)
    ], FetchSyncSyncListRequest.prototype, "security", void 0);
    return FetchSyncSyncListRequest;
}(SpeakeasyBase));
export { FetchSyncSyncListRequest };
var FetchSyncSyncListResponse = /** @class */ (function (_super) {
    __extends(FetchSyncSyncListResponse, _super);
    function FetchSyncSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSyncSyncListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncList)
    ], FetchSyncSyncListResponse.prototype, "previewSyncServiceSyncList", void 0);
    return FetchSyncSyncListResponse;
}(SpeakeasyBase));
export { FetchSyncSyncListResponse };
