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
export var UpdateDocumentServerList = [
    "https://sync.twilio.com",
];
var UpdateDocumentPathParams = /** @class */ (function (_super) {
    __extends(UpdateDocumentPathParams, _super);
    function UpdateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateDocumentPathParams.prototype, "sid", void 0);
    return UpdateDocumentPathParams;
}(SpeakeasyBase));
export { UpdateDocumentPathParams };
var UpdateDocumentHeaders = /** @class */ (function (_super) {
    __extends(UpdateDocumentHeaders, _super);
    function UpdateDocumentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], UpdateDocumentHeaders.prototype, "ifMatch", void 0);
    return UpdateDocumentHeaders;
}(SpeakeasyBase));
export { UpdateDocumentHeaders };
var UpdateDocumentUpdateDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentUpdateDocumentRequest, _super);
    function UpdateDocumentUpdateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], UpdateDocumentUpdateDocumentRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], UpdateDocumentUpdateDocumentRequest.prototype, "ttl", void 0);
    return UpdateDocumentUpdateDocumentRequest;
}(SpeakeasyBase));
export { UpdateDocumentUpdateDocumentRequest };
var UpdateDocumentSecurity = /** @class */ (function (_super) {
    __extends(UpdateDocumentSecurity, _super);
    function UpdateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateDocumentSecurity;
}(SpeakeasyBase));
export { UpdateDocumentSecurity };
var UpdateDocumentRequest = /** @class */ (function (_super) {
    __extends(UpdateDocumentRequest, _super);
    function UpdateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocumentPathParams)
    ], UpdateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocumentHeaders)
    ], UpdateDocumentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateDocumentUpdateDocumentRequest)
    ], UpdateDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDocumentSecurity)
    ], UpdateDocumentRequest.prototype, "security", void 0);
    return UpdateDocumentRequest;
}(SpeakeasyBase));
export { UpdateDocumentRequest };
var UpdateDocumentResponse = /** @class */ (function (_super) {
    __extends(UpdateDocumentResponse, _super);
    function UpdateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceDocument)
    ], UpdateDocumentResponse.prototype, "syncV1ServiceDocument", void 0);
    return UpdateDocumentResponse;
}(SpeakeasyBase));
export { UpdateDocumentResponse };
