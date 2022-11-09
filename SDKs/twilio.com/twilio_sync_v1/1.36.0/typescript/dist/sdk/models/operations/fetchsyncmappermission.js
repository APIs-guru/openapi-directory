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
export var FETCHSYNCMAPPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var FetchSyncMapPermissionPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncMapPermissionPathParams, _super);
    function FetchSyncMapPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], FetchSyncMapPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], FetchSyncMapPermissionPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncMapPermissionPathParams.prototype, "serviceSid", void 0);
    return FetchSyncMapPermissionPathParams;
}(SpeakeasyBase));
export { FetchSyncMapPermissionPathParams };
var FetchSyncMapPermissionSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncMapPermissionSecurity, _super);
    function FetchSyncMapPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncMapPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncMapPermissionSecurity;
}(SpeakeasyBase));
export { FetchSyncMapPermissionSecurity };
var FetchSyncMapPermissionRequest = /** @class */ (function (_super) {
    __extends(FetchSyncMapPermissionRequest, _super);
    function FetchSyncMapPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncMapPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncMapPermissionPathParams)
    ], FetchSyncMapPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSyncMapPermissionSecurity)
    ], FetchSyncMapPermissionRequest.prototype, "security", void 0);
    return FetchSyncMapPermissionRequest;
}(SpeakeasyBase));
export { FetchSyncMapPermissionRequest };
var FetchSyncMapPermissionResponse = /** @class */ (function (_super) {
    __extends(FetchSyncMapPermissionResponse, _super);
    function FetchSyncMapPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSyncMapPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSyncMapPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncMapSyncMapPermission)
    ], FetchSyncMapPermissionResponse.prototype, "syncV1ServiceSyncMapSyncMapPermission", void 0);
    return FetchSyncMapPermissionResponse;
}(SpeakeasyBase));
export { FetchSyncMapPermissionResponse };
