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
export var DeleteDocumentPermissionServerList = [
    "https://sync.twilio.com",
];
var DeleteDocumentPermissionPathParams = /** @class */ (function (_super) {
    __extends(DeleteDocumentPermissionPathParams, _super);
    function DeleteDocumentPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DocumentSid" }),
        __metadata("design:type", String)
    ], DeleteDocumentPermissionPathParams.prototype, "documentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], DeleteDocumentPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteDocumentPermissionPathParams.prototype, "serviceSid", void 0);
    return DeleteDocumentPermissionPathParams;
}(SpeakeasyBase));
export { DeleteDocumentPermissionPathParams };
var DeleteDocumentPermissionSecurity = /** @class */ (function (_super) {
    __extends(DeleteDocumentPermissionSecurity, _super);
    function DeleteDocumentPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteDocumentPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteDocumentPermissionSecurity;
}(SpeakeasyBase));
export { DeleteDocumentPermissionSecurity };
var DeleteDocumentPermissionRequest = /** @class */ (function (_super) {
    __extends(DeleteDocumentPermissionRequest, _super);
    function DeleteDocumentPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDocumentPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDocumentPermissionPathParams)
    ], DeleteDocumentPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDocumentPermissionSecurity)
    ], DeleteDocumentPermissionRequest.prototype, "security", void 0);
    return DeleteDocumentPermissionRequest;
}(SpeakeasyBase));
export { DeleteDocumentPermissionRequest };
var DeleteDocumentPermissionResponse = /** @class */ (function (_super) {
    __extends(DeleteDocumentPermissionResponse, _super);
    function DeleteDocumentPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDocumentPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDocumentPermissionResponse.prototype, "statusCode", void 0);
    return DeleteDocumentPermissionResponse;
}(SpeakeasyBase));
export { DeleteDocumentPermissionResponse };
