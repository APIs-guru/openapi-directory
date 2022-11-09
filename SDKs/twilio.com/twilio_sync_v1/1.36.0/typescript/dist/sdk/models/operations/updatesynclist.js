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
export var UPDATESYNCLIST_SERVERS = [
    "https://sync.twilio.com",
];
var UpdateSyncListPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncListPathParams, _super);
    function UpdateSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncListPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSyncListPathParams.prototype, "sid", void 0);
    return UpdateSyncListPathParams;
}(SpeakeasyBase));
export { UpdateSyncListPathParams };
var UpdateSyncListUpdateSyncListRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListUpdateSyncListRequest, _super);
    function UpdateSyncListUpdateSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncListUpdateSyncListRequest.prototype, "collectionTtl", void 0);
    __decorate([
        Metadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateSyncListUpdateSyncListRequest.prototype, "ttl", void 0);
    return UpdateSyncListUpdateSyncListRequest;
}(SpeakeasyBase));
export { UpdateSyncListUpdateSyncListRequest };
var UpdateSyncListSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncListSecurity, _super);
    function UpdateSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncListSecurity;
}(SpeakeasyBase));
export { UpdateSyncListSecurity };
var UpdateSyncListRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListRequest, _super);
    function UpdateSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncListPathParams)
    ], UpdateSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncListUpdateSyncListRequest)
    ], UpdateSyncListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncListSecurity)
    ], UpdateSyncListRequest.prototype, "security", void 0);
    return UpdateSyncListRequest;
}(SpeakeasyBase));
export { UpdateSyncListRequest };
var UpdateSyncListResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncListResponse, _super);
    function UpdateSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncList)
    ], UpdateSyncListResponse.prototype, "syncV1ServiceSyncList", void 0);
    return UpdateSyncListResponse;
}(SpeakeasyBase));
export { UpdateSyncListResponse };
