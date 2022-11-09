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
export var UPDATESYNCSYNCLISTPERMISSION_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncSyncListPermissionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListPermissionPathParams, _super);
    function UpdateSyncSyncListPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListPermissionPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncListPermissionPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncSyncListPermissionPathParams;
}(SpeakeasyBase));
export { UpdateSyncSyncListPermissionPathParams };
var UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest, _super);
    function UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Manage;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest.prototype, "manage", void 0);
    __decorate([
        Metadata({ data: "form, name=Read;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "form, name=Write;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest.prototype, "write", void 0);
    return UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest };
var UpdateSyncSyncListPermissionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListPermissionSecurity, _super);
    function UpdateSyncSyncListPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncSyncListPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncSyncListPermissionSecurity;
}(SpeakeasyBase));
export { UpdateSyncSyncListPermissionSecurity };
var UpdateSyncSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListPermissionRequest, _super);
    function UpdateSyncSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncListPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncListPermissionPathParams)
    ], UpdateSyncSyncListPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest)
    ], UpdateSyncSyncListPermissionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncListPermissionSecurity)
    ], UpdateSyncSyncListPermissionRequest.prototype, "security", void 0);
    return UpdateSyncSyncListPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncListPermissionRequest };
var UpdateSyncSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncListPermissionResponse, _super);
    function UpdateSyncSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncListPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncSyncListPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncListSyncListPermission)
    ], UpdateSyncSyncListPermissionResponse.prototype, "previewSyncServiceSyncListSyncListPermission", void 0);
    return UpdateSyncSyncListPermissionResponse;
}(SpeakeasyBase));
export { UpdateSyncSyncListPermissionResponse };
