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
var PutBenefitsDocumentUploadHeaders = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUploadHeaders, _super);
    function PutBenefitsDocumentUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-MD5" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUploadHeaders.prototype, "contentMd5", void 0);
    return PutBenefitsDocumentUploadHeaders;
}(SpeakeasyBase));
export { PutBenefitsDocumentUploadHeaders };
var PutBenefitsDocumentUpload401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUpload401ApplicationJson, _super);
    function PutBenefitsDocumentUpload401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload401ApplicationJson.prototype, "message", void 0);
    return PutBenefitsDocumentUpload401ApplicationJson;
}(SpeakeasyBase));
export { PutBenefitsDocumentUpload401ApplicationJson };
var PutBenefitsDocumentUpload422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUpload422ApplicationJson, _super);
    function PutBenefitsDocumentUpload422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], PutBenefitsDocumentUpload422ApplicationJson.prototype, "errors", void 0);
    return PutBenefitsDocumentUpload422ApplicationJson;
}(SpeakeasyBase));
export { PutBenefitsDocumentUpload422ApplicationJson };
var PutBenefitsDocumentUpload429ApplicationJson = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUpload429ApplicationJson, _super);
    function PutBenefitsDocumentUpload429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload429ApplicationJson.prototype, "message", void 0);
    return PutBenefitsDocumentUpload429ApplicationJson;
}(SpeakeasyBase));
export { PutBenefitsDocumentUpload429ApplicationJson };
var PutBenefitsDocumentUpload500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUpload500ApplicationJson, _super);
    function PutBenefitsDocumentUpload500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload500ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUpload500ApplicationJson.prototype, "title", void 0);
    return PutBenefitsDocumentUpload500ApplicationJson;
}(SpeakeasyBase));
export { PutBenefitsDocumentUpload500ApplicationJson };
var PutBenefitsDocumentUploadRequest = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUploadRequest, _super);
    function PutBenefitsDocumentUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBenefitsDocumentUploadHeaders)
    ], PutBenefitsDocumentUploadRequest.prototype, "headers", void 0);
    return PutBenefitsDocumentUploadRequest;
}(SpeakeasyBase));
export { PutBenefitsDocumentUploadRequest };
var PutBenefitsDocumentUploadResponse = /** @class */ (function (_super) {
    __extends(PutBenefitsDocumentUploadResponse, _super);
    function PutBenefitsDocumentUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutBenefitsDocumentUploadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutBenefitsDocumentUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutBenefitsDocumentUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBenefitsDocumentUpload401ApplicationJson)
    ], PutBenefitsDocumentUploadResponse.prototype, "putBenefitsDocumentUpload401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBenefitsDocumentUpload422ApplicationJson)
    ], PutBenefitsDocumentUploadResponse.prototype, "putBenefitsDocumentUpload422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBenefitsDocumentUpload429ApplicationJson)
    ], PutBenefitsDocumentUploadResponse.prototype, "putBenefitsDocumentUpload429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutBenefitsDocumentUpload500ApplicationJson)
    ], PutBenefitsDocumentUploadResponse.prototype, "putBenefitsDocumentUpload500ApplicationJsonObject", void 0);
    return PutBenefitsDocumentUploadResponse;
}(SpeakeasyBase));
export { PutBenefitsDocumentUploadResponse };
