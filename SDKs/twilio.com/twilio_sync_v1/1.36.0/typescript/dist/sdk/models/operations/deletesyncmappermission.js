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
export var DELETESYNCMAPPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var DeleteSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncMapPermissionPathParams, _super);
    function DeleteSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], DeleteSyncMapPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], DeleteSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return DeleteSyncMapPermissionPathParams;
}(SpeakeasyBase));
export { DeleteSyncMapPermissionPathParams };
var DeleteSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncMapPermissionSecurity, _super);
    function DeleteSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncMapPermissionSecurity;
}(SpeakeasyBase));
export { DeleteSyncMapPermissionSecurity };
var DeleteSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncMapPermissionRequest, _super);
    function DeleteSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncMapPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncMapPermissionPathParams)
    ], DeleteSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncMapPermissionSecurity)
    ], DeleteSyncMapPermissionRequest.prototype, "security", void 0);
    return DeleteSyncMapPermissionRequest;
}(SpeakeasyBase));
export { DeleteSyncMapPermissionRequest };
var DeleteSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncMapPermissionResponse, _super);
    function DeleteSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSyncMapPermissionResponse.prototype, "statusCode", void 0);
    return DeleteSyncMapPermissionResponse;
}(SpeakeasyBase));
export { DeleteSyncMapPermissionResponse };
