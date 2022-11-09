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
export var UPDATESYNCSYNCMAPPERMISSION_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapPermissionPathParams, _super);
    function UpdateSyncSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncSyncMapPermissionPathParams;
}(SpeakeasyBase));
export { UpdateSyncSyncMapPermissionPathParams };
var UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest, _super);
    function UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Manage;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest.prototype, "manage", void 0);
    __decorate([
        Metadata({ data: "form, name=Read;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "form, name=Write;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest.prototype, "write", void 0);
    return UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest };
var UpdateSyncSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapPermissionSecurity, _super);
    function UpdateSyncSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncSyncMapPermissionSecurity;
}(SpeakeasyBase));
export { UpdateSyncSyncMapPermissionSecurity };
var UpdateSyncSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapPermissionRequest, _super);
    function UpdateSyncSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncMapPermissionPathParams)
    ], UpdateSyncSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest)
    ], UpdateSyncSyncMapPermissionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncSyncMapPermissionSecurity)
    ], UpdateSyncSyncMapPermissionRequest.prototype, "security", void 0);
    return UpdateSyncSyncMapPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncSyncMapPermissionRequest };
var UpdateSyncSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncSyncMapPermissionResponse, _super);
    function UpdateSyncSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncSyncMapPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncMapSyncMapPermission)
    ], UpdateSyncSyncMapPermissionResponse.prototype, "previewSyncServiceSyncMapSyncMapPermission", void 0);
    return UpdateSyncSyncMapPermissionResponse;
}(SpeakeasyBase));
export { UpdateSyncSyncMapPermissionResponse };
