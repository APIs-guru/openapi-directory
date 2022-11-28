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
export var CreateSupportingDocumentServerList = [
    "https://trusthub.twilio.com",
];
var CreateSupportingDocumentCreateSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateSupportingDocumentCreateSupportingDocumentRequest, _super);
    function CreateSupportingDocumentCreateSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", Object)
    ], CreateSupportingDocumentCreateSupportingDocumentRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSupportingDocumentCreateSupportingDocumentRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateSupportingDocumentCreateSupportingDocumentRequest.prototype, "type", void 0);
    return CreateSupportingDocumentCreateSupportingDocumentRequest;
}(SpeakeasyBase));
export { CreateSupportingDocumentCreateSupportingDocumentRequest };
var CreateSupportingDocumentSecurity = /** @class */ (function (_super) {
    __extends(CreateSupportingDocumentSecurity, _super);
    function CreateSupportingDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSupportingDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSupportingDocumentSecurity;
}(SpeakeasyBase));
export { CreateSupportingDocumentSecurity };
var CreateSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateSupportingDocumentRequest, _super);
    function CreateSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSupportingDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSupportingDocumentCreateSupportingDocumentRequest)
    ], CreateSupportingDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSupportingDocumentSecurity)
    ], CreateSupportingDocumentRequest.prototype, "security", void 0);
    return CreateSupportingDocumentRequest;
}(SpeakeasyBase));
export { CreateSupportingDocumentRequest };
var CreateSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(CreateSupportingDocumentResponse, _super);
    function CreateSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSupportingDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSupportingDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrusthubV1SupportingDocument)
    ], CreateSupportingDocumentResponse.prototype, "trusthubV1SupportingDocument", void 0);
    return CreateSupportingDocumentResponse;
}(SpeakeasyBase));
export { CreateSupportingDocumentResponse };
