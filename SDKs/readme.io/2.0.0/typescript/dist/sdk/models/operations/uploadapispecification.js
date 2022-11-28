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
var UploadApiSpecificationHeaders = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationHeaders, _super);
    function UploadApiSpecificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" }),
        __metadata("design:type", String)
    ], UploadApiSpecificationHeaders.prototype, "xReadmeVersion", void 0);
    return UploadApiSpecificationHeaders;
}(SpeakeasyBase));
export { UploadApiSpecificationHeaders };
var UploadApiSpecificationRequestBodySpec = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationRequestBodySpec, _super);
    function UploadApiSpecificationRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadApiSpecificationRequestBodySpec.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=spec" }),
        __metadata("design:type", String)
    ], UploadApiSpecificationRequestBodySpec.prototype, "spec", void 0);
    return UploadApiSpecificationRequestBodySpec;
}(SpeakeasyBase));
export { UploadApiSpecificationRequestBodySpec };
var UploadApiSpecificationRequestBody = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationRequestBody, _super);
    function UploadApiSpecificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadApiSpecificationRequestBodySpec)
    ], UploadApiSpecificationRequestBody.prototype, "spec", void 0);
    return UploadApiSpecificationRequestBody;
}(SpeakeasyBase));
export { UploadApiSpecificationRequestBody };
var UploadApiSpecificationSecurity = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationSecurity, _super);
    function UploadApiSpecificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UploadApiSpecificationSecurity.prototype, "apiKey", void 0);
    return UploadApiSpecificationSecurity;
}(SpeakeasyBase));
export { UploadApiSpecificationSecurity };
var UploadApiSpecificationRequest = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationRequest, _super);
    function UploadApiSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadApiSpecificationHeaders)
    ], UploadApiSpecificationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadApiSpecificationRequestBody)
    ], UploadApiSpecificationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadApiSpecificationSecurity)
    ], UploadApiSpecificationRequest.prototype, "security", void 0);
    return UploadApiSpecificationRequest;
}(SpeakeasyBase));
export { UploadApiSpecificationRequest };
var UploadApiSpecificationResponse = /** @class */ (function (_super) {
    __extends(UploadApiSpecificationResponse, _super);
    function UploadApiSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadApiSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadApiSpecificationResponse.prototype, "statusCode", void 0);
    return UploadApiSpecificationResponse;
}(SpeakeasyBase));
export { UploadApiSpecificationResponse };
