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
var GetBenefitsDocumentUploadStatusPathParams = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusPathParams, _super);
    function GetBenefitsDocumentUploadStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusPathParams.prototype, "id", void 0);
    return GetBenefitsDocumentUploadStatusPathParams;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusPathParams };
var GetBenefitsDocumentUploadStatusSecurity = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusSecurity, _super);
    function GetBenefitsDocumentUploadStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetBenefitsDocumentUploadStatusSecurity.prototype, "apikey", void 0);
    return GetBenefitsDocumentUploadStatusSecurity;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusSecurity };
var GetBenefitsDocumentUploadStatusRequest = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusRequest, _super);
    function GetBenefitsDocumentUploadStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusPathParams)
    ], GetBenefitsDocumentUploadStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusSecurity)
    ], GetBenefitsDocumentUploadStatusRequest.prototype, "security", void 0);
    return GetBenefitsDocumentUploadStatusRequest;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusRequest };
var GetBenefitsDocumentUploadStatus401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatus401ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatus401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus401ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatus401ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatus401ApplicationJson };
var GetBenefitsDocumentUploadStatus403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatus403ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatus403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus403ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatus403ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatus403ApplicationJson };
var GetBenefitsDocumentUploadStatus404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatus404ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatus404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus404ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus404ApplicationJson.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus404ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadStatus404ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatus404ApplicationJson };
var GetBenefitsDocumentUploadStatus429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatus429ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatus429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus429ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatus429ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatus429ApplicationJson };
var GetBenefitsDocumentUploadStatus500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatus500ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatus500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus500ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus500ApplicationJson.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatus500ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadStatus500ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatus500ApplicationJson };
var GetBenefitsDocumentUploadStatusResponse = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusResponse, _super);
    function GetBenefitsDocumentUploadStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatus401ApplicationJson)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatus403ApplicationJson)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus403ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatus404ApplicationJson)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatus429ApplicationJson)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus429ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatus500ApplicationJson)
    ], GetBenefitsDocumentUploadStatusResponse.prototype, "getBenefitsDocumentUploadStatus500ApplicationJsonObject", void 0);
    return GetBenefitsDocumentUploadStatusResponse;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusResponse };
