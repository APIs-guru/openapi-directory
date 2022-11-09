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
export var UPDATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateHostedNumbersAuthorizationDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersAuthorizationDocumentPathParams, _super);
    function UpdateHostedNumbersAuthorizationDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentPathParams.prototype, "sid", void 0);
    return UpdateHostedNumbersAuthorizationDocumentPathParams;
}(SpeakeasyBase));
export { UpdateHostedNumbersAuthorizationDocumentPathParams };
var UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest, _super);
    function UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "addressSid", void 0);
    __decorate([
        Metadata({ data: "form, name=CcEmails;" }),
        __metadata("design:type", Array)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "ccEmails", void 0);
    __decorate([
        Metadata({ data: "form, name=ContactPhoneNumber;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "contactPhoneNumber", void 0);
    __decorate([
        Metadata({ data: "form, name=ContactTitle;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "contactTitle", void 0);
    __decorate([
        Metadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "form, name=HostedNumberOrderSids;" }),
        __metadata("design:type", Array)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "hostedNumberOrderSids", void 0);
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest.prototype, "status", void 0);
    return UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;
}(SpeakeasyBase));
export { UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest };
var UpdateHostedNumbersAuthorizationDocumentSecurity = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersAuthorizationDocumentSecurity, _super);
    function UpdateHostedNumbersAuthorizationDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateHostedNumbersAuthorizationDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateHostedNumbersAuthorizationDocumentSecurity;
}(SpeakeasyBase));
export { UpdateHostedNumbersAuthorizationDocumentSecurity };
var UpdateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersAuthorizationDocumentRequest, _super);
    function UpdateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateHostedNumbersAuthorizationDocumentPathParams)
    ], UpdateHostedNumbersAuthorizationDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest)
    ], UpdateHostedNumbersAuthorizationDocumentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateHostedNumbersAuthorizationDocumentSecurity)
    ], UpdateHostedNumbersAuthorizationDocumentRequest.prototype, "security", void 0);
    return UpdateHostedNumbersAuthorizationDocumentRequest;
}(SpeakeasyBase));
export { UpdateHostedNumbersAuthorizationDocumentRequest };
var UpdateHostedNumbersAuthorizationDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateHostedNumbersAuthorizationDocumentResponse, _super);
    function UpdateHostedNumbersAuthorizationDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateHostedNumbersAuthorizationDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateHostedNumbersAuthorizationDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewHostedNumbersAuthorizationDocument)
    ], UpdateHostedNumbersAuthorizationDocumentResponse.prototype, "previewHostedNumbersAuthorizationDocument", void 0);
    return UpdateHostedNumbersAuthorizationDocumentResponse;
}(SpeakeasyBase));
export { UpdateHostedNumbersAuthorizationDocumentResponse };
