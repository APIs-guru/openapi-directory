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
export var CreateSyncDocumentServerList = [
    "https://preview.twilio.com",
];
var CreateSyncDocumentPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncDocumentPathParams, _super);
    function CreateSyncDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncDocumentPathParams.prototype, "serviceSid", void 0);
    return CreateSyncDocumentPathParams;
}(SpeakeasyBase));
export { CreateSyncDocumentPathParams };
var CreateSyncDocumentCreateSyncDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateSyncDocumentCreateSyncDocumentRequest, _super);
    function CreateSyncDocumentCreateSyncDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateSyncDocumentCreateSyncDocumentRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncDocumentCreateSyncDocumentRequest.prototype, "uniqueName", void 0);
    return CreateSyncDocumentCreateSyncDocumentRequest;
}(SpeakeasyBase));
export { CreateSyncDocumentCreateSyncDocumentRequest };
var CreateSyncDocumentSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncDocumentSecurity, _super);
    function CreateSyncDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncDocumentSecurity;
}(SpeakeasyBase));
export { CreateSyncDocumentSecurity };
var CreateSyncDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateSyncDocumentRequest, _super);
    function CreateSyncDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncDocumentPathParams)
    ], CreateSyncDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncDocumentCreateSyncDocumentRequest)
    ], CreateSyncDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncDocumentSecurity)
    ], CreateSyncDocumentRequest.prototype, "security", void 0);
    return CreateSyncDocumentRequest;
}(SpeakeasyBase));
export { CreateSyncDocumentRequest };
var CreateSyncDocumentResponse = /** @class */ (function (_super) {
    __extends(CreateSyncDocumentResponse, _super);
    function CreateSyncDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncServiceDocument)
    ], CreateSyncDocumentResponse.prototype, "previewSyncServiceDocument", void 0);
    return CreateSyncDocumentResponse;
}(SpeakeasyBase));
export { CreateSyncDocumentResponse };
