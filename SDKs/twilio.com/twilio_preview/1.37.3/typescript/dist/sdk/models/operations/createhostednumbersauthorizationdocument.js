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
export var CreateHostedNumbersAuthorizationDocumentServerList = [
    "https://preview.twilio.com",
];
var CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest, _super);
    function CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AddressSid;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "addressSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CcEmails;" }),
        __metadata("design:type", Array)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "ccEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ContactPhoneNumber;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "contactPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ContactTitle;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "contactTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Email;" }),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=HostedNumberOrderSids;" }),
        __metadata("design:type", Array)
    ], CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest.prototype, "hostedNumberOrderSids", void 0);
    return CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
}(SpeakeasyBase));
export { CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest };
var CreateHostedNumbersAuthorizationDocumentSecurity = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentSecurity, _super);
    function CreateHostedNumbersAuthorizationDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateHostedNumbersAuthorizationDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateHostedNumbersAuthorizationDocumentSecurity;
}(SpeakeasyBase));
export { CreateHostedNumbersAuthorizationDocumentSecurity };
var CreateHostedNumbersAuthorizationDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentRequest, _super);
    function CreateHostedNumbersAuthorizationDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateHostedNumbersAuthorizationDocumentSecurity)
    ], CreateHostedNumbersAuthorizationDocumentRequest.prototype, "security", void 0);
    return CreateHostedNumbersAuthorizationDocumentRequest;
}(SpeakeasyBase));
export { CreateHostedNumbersAuthorizationDocumentRequest };
var CreateHostedNumbersAuthorizationDocumentResponse = /** @class */ (function (_super) {
    __extends(CreateHostedNumbersAuthorizationDocumentResponse, _super);
    function CreateHostedNumbersAuthorizationDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewHostedNumbersAuthorizationDocument)
    ], CreateHostedNumbersAuthorizationDocumentResponse.prototype, "previewHostedNumbersAuthorizationDocument", void 0);
    return CreateHostedNumbersAuthorizationDocumentResponse;
}(SpeakeasyBase));
export { CreateHostedNumbersAuthorizationDocumentResponse };
