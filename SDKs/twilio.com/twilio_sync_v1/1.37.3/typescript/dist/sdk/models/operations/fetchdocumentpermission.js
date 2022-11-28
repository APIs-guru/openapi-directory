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
export var FetchDocumentPermissionServerList = [
    "https://sync.twilio.com",
];
var FetchDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(FetchDocumentPermissionPathParams, _super);
    function FetchDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], FetchDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], FetchDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return FetchDocumentPermissionPathParams;
}(SpeakeasyBase));
export { FetchDocumentPermissionPathParams };
var FetchDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(FetchDocumentPermissionSecurity, _super);
    function FetchDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchDocumentPermissionSecurity;
}(SpeakeasyBase));
export { FetchDocumentPermissionSecurity };
var FetchDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(FetchDocumentPermissionRequest, _super);
    function FetchDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchDocumentPermissionPathParams)
    ], FetchDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchDocumentPermissionSecurity)
    ], FetchDocumentPermissionRequest.prototype, "security", void 0);
    return FetchDocumentPermissionRequest;
}(SpeakeasyBase));
export { FetchDocumentPermissionRequest };
var FetchDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(FetchDocumentPermissionResponse, _super);
    function FetchDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchDocumentPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceDocumentDocumentPermission)
    ], FetchDocumentPermissionResponse.prototype, "syncV1ServiceDocumentDocumentPermission", void 0);
    return FetchDocumentPermissionResponse;
}(SpeakeasyBase));
export { FetchDocumentPermissionResponse };
