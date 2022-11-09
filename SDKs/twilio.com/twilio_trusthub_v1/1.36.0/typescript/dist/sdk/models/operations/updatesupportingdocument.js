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
export var UPDATESUPPORTINGDOCUMENT_SERVERS = [
    "https://trusthub.twilio.com",
];
var UpdateSupportingDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateSupportingDocumentPathParams, _super);
    function UpdateSupportingDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSupportingDocumentPathParams.prototype, "sid", void 0);
    return UpdateSupportingDocumentPathParams;
}(SpeakeasyBase));
export { UpdateSupportingDocumentPathParams };
var UpdateSupportingDocumentUpdateSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateSupportingDocumentUpdateSupportingDocumentRequest, _super);
    function UpdateSupportingDocumentUpdateSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Attributes;" }),
        __metadata("design:type", Object)
    ], UpdateSupportingDocumentUpdateSupportingDocumentRequest.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSupportingDocumentUpdateSupportingDocumentRequest.prototype, "friendlyName", void 0);
    return UpdateSupportingDocumentUpdateSupportingDocumentRequest;
}(SpeakeasyBase));
export { UpdateSupportingDocumentUpdateSupportingDocumentRequest };
var UpdateSupportingDocumentSecurity = /** @class */ (function (_super) {
    __extends(UpdateSupportingDocumentSecurity, _super);
    function UpdateSupportingDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSupportingDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSupportingDocumentSecurity;
}(SpeakeasyBase));
export { UpdateSupportingDocumentSecurity };
var UpdateSupportingDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateSupportingDocumentRequest, _super);
    function UpdateSupportingDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSupportingDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSupportingDocumentPathParams)
    ], UpdateSupportingDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSupportingDocumentUpdateSupportingDocumentRequest)
    ], UpdateSupportingDocumentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSupportingDocumentSecurity)
    ], UpdateSupportingDocumentRequest.prototype, "security", void 0);
    return UpdateSupportingDocumentRequest;
}(SpeakeasyBase));
export { UpdateSupportingDocumentRequest };
var UpdateSupportingDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateSupportingDocumentResponse, _super);
    function UpdateSupportingDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSupportingDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSupportingDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrusthubV1SupportingDocument)
    ], UpdateSupportingDocumentResponse.prototype, "trusthubV1SupportingDocument", void 0);
    return UpdateSupportingDocumentResponse;
}(SpeakeasyBase));
export { UpdateSupportingDocumentResponse };
