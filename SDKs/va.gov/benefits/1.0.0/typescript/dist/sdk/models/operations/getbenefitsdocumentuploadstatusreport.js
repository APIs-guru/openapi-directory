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
var GetBenefitsDocumentUploadStatusReportSecurity = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportSecurity, _super);
    function GetBenefitsDocumentUploadStatusReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], GetBenefitsDocumentUploadStatusReportSecurity.prototype, "apikey", void 0);
    return GetBenefitsDocumentUploadStatusReportSecurity;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReportSecurity };
var GetBenefitsDocumentUploadStatusReport200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport200ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetBenefitsDocumentUploadStatusReport200ApplicationJson.prototype, "data", void 0);
    return GetBenefitsDocumentUploadStatusReport200ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport200ApplicationJson };
var GetBenefitsDocumentUploadStatusReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport401ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport401ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport401ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport401ApplicationJson };
var GetBenefitsDocumentUploadStatusReport403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport403ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport403ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport403ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport403ApplicationJson };
var GetBenefitsDocumentUploadStatusReport422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport422ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GetBenefitsDocumentUploadStatusReport422ApplicationJson.prototype, "errors", void 0);
    return GetBenefitsDocumentUploadStatusReport422ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport422ApplicationJson };
var GetBenefitsDocumentUploadStatusReport429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport429ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport429ApplicationJson.prototype, "message", void 0);
    return GetBenefitsDocumentUploadStatusReport429ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport429ApplicationJson };
var GetBenefitsDocumentUploadStatusReport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReport500ApplicationJson, _super);
    function GetBenefitsDocumentUploadStatusReport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReport500ApplicationJson.prototype, "title", void 0);
    return GetBenefitsDocumentUploadStatusReport500ApplicationJson;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReport500ApplicationJson };
var GetBenefitsDocumentUploadStatusReportRequest = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportRequest, _super);
    function GetBenefitsDocumentUploadStatusReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DocumentUploadStatusGuidList)
    ], GetBenefitsDocumentUploadStatusReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReportSecurity)
    ], GetBenefitsDocumentUploadStatusReportRequest.prototype, "security", void 0);
    return GetBenefitsDocumentUploadStatusReportRequest;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReportRequest };
var GetBenefitsDocumentUploadStatusReportResponse = /** @class */ (function (_super) {
    __extends(GetBenefitsDocumentUploadStatusReportResponse, _super);
    function GetBenefitsDocumentUploadStatusReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport200ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport401ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport403ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport422ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport429ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBenefitsDocumentUploadStatusReport500ApplicationJson)
    ], GetBenefitsDocumentUploadStatusReportResponse.prototype, "getBenefitsDocumentUploadStatusReport500ApplicationJsonObject", void 0);
    return GetBenefitsDocumentUploadStatusReportResponse;
}(SpeakeasyBase));
export { GetBenefitsDocumentUploadStatusReportResponse };
