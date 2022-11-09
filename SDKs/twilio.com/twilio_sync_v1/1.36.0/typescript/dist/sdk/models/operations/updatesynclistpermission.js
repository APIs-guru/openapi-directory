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
export var UPDATESYNCLISTPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var UpdateSyncListPermissionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncListPermissionPathParams, _super);
    function UpdateSyncListPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateSyncListPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], UpdateSyncListPermissionPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncListPermissionPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncListPermissionPathParams;
}(SpeakeasyBase));
export { UpdateSyncListPermissionPathParams };
var UpdateSyncListPermissionUpdateSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListPermissionUpdateSyncListPermissionRequest, _super);
    function UpdateSyncListPermissionUpdateSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Manage;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncListPermissionUpdateSyncListPermissionRequest.prototype, "manage", void 0);
    __decorate([
        Metadata({ data: "form, name=Read;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncListPermissionUpdateSyncListPermissionRequest.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "form, name=Write;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncListPermissionUpdateSyncListPermissionRequest.prototype, "write", void 0);
    return UpdateSyncListPermissionUpdateSyncListPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncListPermissionUpdateSyncListPermissionRequest };
var UpdateSyncListPermissionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncListPermissionSecurity, _super);
    function UpdateSyncListPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncListPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncListPermissionSecurity;
}(SpeakeasyBase));
export { UpdateSyncListPermissionSecurity };
var UpdateSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncListPermissionRequest, _super);
    function UpdateSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncListPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncListPermissionPathParams)
    ], UpdateSyncListPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncListPermissionUpdateSyncListPermissionRequest)
    ], UpdateSyncListPermissionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncListPermissionSecurity)
    ], UpdateSyncListPermissionRequest.prototype, "security", void 0);
    return UpdateSyncListPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncListPermissionRequest };
var UpdateSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncListPermissionResponse, _super);
    function UpdateSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncListPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncListPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncListSyncListPermission)
    ], UpdateSyncListPermissionResponse.prototype, "syncV1ServiceSyncListSyncListPermission", void 0);
    return UpdateSyncListPermissionResponse;
}(SpeakeasyBase));
export { UpdateSyncListPermissionResponse };
