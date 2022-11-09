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
export var UPDATEDOCUMENTPERMISSION_SERVERS = [
    "https://sync.twilio.com",
];
var UpdateDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocumentPermissionPathParams, _super);
    function UpdateDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], UpdateDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return UpdateDocumentPermissionPathParams;
}(SpeakeasyBase));
export { UpdateDocumentPermissionPathParams };
var UpdateDocumentPermissionUpdateDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentPermissionUpdateDocumentPermissionRequest, _super);
    function UpdateDocumentPermissionUpdateDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Manage;" }),
        __metadata("design:type", Boolean)
    ], UpdateDocumentPermissionUpdateDocumentPermissionRequest.prototype, "manage", void 0);
    __decorate([
        Metadata({ data: "form, name=Read;" }),
        __metadata("design:type", Boolean)
    ], UpdateDocumentPermissionUpdateDocumentPermissionRequest.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "form, name=Write;" }),
        __metadata("design:type", Boolean)
    ], UpdateDocumentPermissionUpdateDocumentPermissionRequest.prototype, "write", void 0);
    return UpdateDocumentPermissionUpdateDocumentPermissionRequest;
}(SpeakeasyBase));
export { UpdateDocumentPermissionUpdateDocumentPermissionRequest };
var UpdateDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(UpdateDocumentPermissionSecurity, _super);
    function UpdateDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDocumentPermissionSecurity;
}(SpeakeasyBase));
export { UpdateDocumentPermissionSecurity };
var UpdateDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentPermissionRequest, _super);
    function UpdateDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentPermissionPathParams)
    ], UpdateDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDocumentPermissionUpdateDocumentPermissionRequest)
    ], UpdateDocumentPermissionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDocumentPermissionSecurity)
    ], UpdateDocumentPermissionRequest.prototype, "security", void 0);
    return UpdateDocumentPermissionRequest;
}(SpeakeasyBase));
export { UpdateDocumentPermissionRequest };
var UpdateDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(UpdateDocumentPermissionResponse, _super);
    function UpdateDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDocumentPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SyncV1ServiceDocumentDocumentPermission)
    ], UpdateDocumentPermissionResponse.prototype, "syncV1ServiceDocumentDocumentPermission", void 0);
    return UpdateDocumentPermissionResponse;
}(SpeakeasyBase));
export { UpdateDocumentPermissionResponse };
