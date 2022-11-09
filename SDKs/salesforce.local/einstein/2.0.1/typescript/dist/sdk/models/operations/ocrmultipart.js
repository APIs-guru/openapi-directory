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
var OcrMultipartRequestBodySampleContent = /** @class */ (function (_super) {
    __extends(OcrMultipartRequestBodySampleContent, _super);
    function OcrMultipartRequestBodySampleContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], OcrMultipartRequestBodySampleContent.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=sampleContent" }),
        __metadata("design:type", String)
    ], OcrMultipartRequestBodySampleContent.prototype, "sampleContent", void 0);
    return OcrMultipartRequestBodySampleContent;
}(SpeakeasyBase));
export { OcrMultipartRequestBodySampleContent };
var OcrMultipartRequestBody = /** @class */ (function (_super) {
    __extends(OcrMultipartRequestBody, _super);
    function OcrMultipartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], OcrMultipartRequestBody.prototype, "modelId", void 0);
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", OcrMultipartRequestBodySampleContent)
    ], OcrMultipartRequestBody.prototype, "sampleContent", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=sampleId" }),
        __metadata("design:type", String)
    ], OcrMultipartRequestBody.prototype, "sampleId", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=sampleLocation" }),
        __metadata("design:type", String)
    ], OcrMultipartRequestBody.prototype, "sampleLocation", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=task" }),
        __metadata("design:type", String)
    ], OcrMultipartRequestBody.prototype, "task", void 0);
    return OcrMultipartRequestBody;
}(SpeakeasyBase));
export { OcrMultipartRequestBody };
var OcrMultipartSecurity = /** @class */ (function (_super) {
    __extends(OcrMultipartSecurity, _super);
    function OcrMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], OcrMultipartSecurity.prototype, "bearerToken", void 0);
    return OcrMultipartSecurity;
}(SpeakeasyBase));
export { OcrMultipartSecurity };
var OcrMultipartRequest = /** @class */ (function (_super) {
    __extends(OcrMultipartRequest, _super);
    function OcrMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", OcrMultipartRequestBody)
    ], OcrMultipartRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OcrMultipartSecurity)
    ], OcrMultipartRequest.prototype, "security", void 0);
    return OcrMultipartRequest;
}(SpeakeasyBase));
export { OcrMultipartRequest };
var OcrMultipartResponse = /** @class */ (function (_super) {
    __extends(OcrMultipartResponse, _super);
    function OcrMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OcrMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OcrPredictResponse)
    ], OcrMultipartResponse.prototype, "ocrPredictResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OcrMultipartResponse.prototype, "statusCode", void 0);
    return OcrMultipartResponse;
}(SpeakeasyBase));
export { OcrMultipartResponse };
