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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var FetchSyncDocumentPermissionServerList = [
    "https://preview.twilio.com",
];
var FetchSyncDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionPathParams, _super);
    function FetchSyncDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return FetchSyncDocumentPermissionPathParams;
}(SpeakeasyBase));
export { FetchSyncDocumentPermissionPathParams };
var FetchSyncDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionSecurity, _super);
    function FetchSyncDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncDocumentPermissionSecurity;
}(SpeakeasyBase));
export { FetchSyncDocumentPermissionSecurity };
var FetchSyncDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionRequest, _super);
    function FetchSyncDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncDocumentPermissionPathParams)
    ], FetchSyncDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncDocumentPermissionSecurity)
    ], FetchSyncDocumentPermissionRequest.prototype, "security", void 0);
    return FetchSyncDocumentPermissionRequest;
}(SpeakeasyBase));
export { FetchSyncDocumentPermissionRequest };
var FetchSyncDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(FetchSyncDocumentPermissionResponse, _super);
    function FetchSyncDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSyncDocumentPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncServiceDocumentDocumentPermission)
    ], FetchSyncDocumentPermissionResponse.prototype, "previewSyncServiceDocumentDocumentPermission", void 0);
    return FetchSyncDocumentPermissionResponse;
}(SpeakeasyBase));
export { FetchSyncDocumentPermissionResponse };
