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
export var CreateDocumentServerList = [
    "https://sync.twilio.com",
];
var CreateDocumentPathParams = /** @class */ (function (_super) {
    __extends(CreateDocumentPathParams, _super);
    function CreateDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateDocumentPathParams.prototype, "serviceSid", void 0);
    return CreateDocumentPathParams;
}(SpeakeasyBase));
export { CreateDocumentPathParams };
var CreateDocumentCreateDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentCreateDocumentRequest, _super);
    function CreateDocumentCreateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateDocumentCreateDocumentRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateDocumentCreateDocumentRequest.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateDocumentCreateDocumentRequest.prototype, "uniqueName", void 0);
    return CreateDocumentCreateDocumentRequest;
}(SpeakeasyBase));
export { CreateDocumentCreateDocumentRequest };
var CreateDocumentSecurity = /** @class */ (function (_super) {
    __extends(CreateDocumentSecurity, _super);
    function CreateDocumentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDocumentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDocumentSecurity;
}(SpeakeasyBase));
export { CreateDocumentSecurity };
var CreateDocumentRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentRequest, _super);
    function CreateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDocumentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDocumentPathParams)
    ], CreateDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDocumentCreateDocumentRequest)
    ], CreateDocumentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDocumentSecurity)
    ], CreateDocumentRequest.prototype, "security", void 0);
    return CreateDocumentRequest;
}(SpeakeasyBase));
export { CreateDocumentRequest };
var CreateDocumentResponse = /** @class */ (function (_super) {
    __extends(CreateDocumentResponse, _super);
    function CreateDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceDocument)
    ], CreateDocumentResponse.prototype, "syncV1ServiceDocument", void 0);
    return CreateDocumentResponse;
}(SpeakeasyBase));
export { CreateDocumentResponse };
