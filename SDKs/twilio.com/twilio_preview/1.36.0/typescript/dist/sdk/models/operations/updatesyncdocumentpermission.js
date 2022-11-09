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
export var UPDATESYNCDOCUMENTPERMISSION_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPermissionPathParams, _super);
    function UpdateSyncDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return UpdateSyncDocumentPermissionPathParams;
}(SpeakeasyBase));
export { UpdateSyncDocumentPermissionPathParams };
var UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest, _super);
    function UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Manage;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest.prototype, "manage", void 0);
    __decorate([
        Metadata({ data: "form, name=Read;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "form, name=Write;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest.prototype, "write", void 0);
    return UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest };
var UpdateSyncDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPermissionSecurity, _super);
    function UpdateSyncDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncDocumentPermissionSecurity;
}(SpeakeasyBase));
export { UpdateSyncDocumentPermissionSecurity };
var UpdateSyncDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPermissionRequest, _super);
    function UpdateSyncDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncDocumentPermissionPathParams)
    ], UpdateSyncDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest)
    ], UpdateSyncDocumentPermissionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncDocumentPermissionSecurity)
    ], UpdateSyncDocumentPermissionRequest.prototype, "security", void 0);
    return UpdateSyncDocumentPermissionRequest;
}(SpeakeasyBase));
export { UpdateSyncDocumentPermissionRequest };
var UpdateSyncDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncDocumentPermissionResponse, _super);
    function UpdateSyncDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncDocumentPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceDocumentDocumentPermission)
    ], UpdateSyncDocumentPermissionResponse.prototype, "previewSyncServiceDocumentDocumentPermission", void 0);
    return UpdateSyncDocumentPermissionResponse;
}(SpeakeasyBase));
export { UpdateSyncDocumentPermissionResponse };
