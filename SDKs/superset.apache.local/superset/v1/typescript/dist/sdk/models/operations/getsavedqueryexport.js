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
var GetSavedQueryExportQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryExportQueryParams, _super);
    function GetSavedQueryExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetSavedQueryExportQueryParams.prototype, "q", void 0);
    return GetSavedQueryExportQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryExportQueryParams };
var GetSavedQueryExportSecurity = /** @class */ (function (_super) {
    __extends(GetSavedQueryExportSecurity, _super);
    function GetSavedQueryExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQueryExportSecurity.prototype, "jwt", void 0);
    return GetSavedQueryExportSecurity;
}(SpeakeasyBase));
export { GetSavedQueryExportSecurity };
var GetSavedQueryExport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryExport400ApplicationJson, _super);
    function GetSavedQueryExport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryExport400ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryExport400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryExport400ApplicationJson };
var GetSavedQueryExport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryExport401ApplicationJson, _super);
    function GetSavedQueryExport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryExport401ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryExport401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryExport401ApplicationJson };
var GetSavedQueryExport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryExport404ApplicationJson, _super);
    function GetSavedQueryExport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryExport404ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryExport404ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryExport404ApplicationJson };
var GetSavedQueryExport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryExport500ApplicationJson, _super);
    function GetSavedQueryExport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryExport500ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryExport500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryExport500ApplicationJson };
var GetSavedQueryExportRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryExportRequest, _super);
    function GetSavedQueryExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExportQueryParams)
    ], GetSavedQueryExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExportSecurity)
    ], GetSavedQueryExportRequest.prototype, "security", void 0);
    return GetSavedQueryExportRequest;
}(SpeakeasyBase));
export { GetSavedQueryExportRequest };
var GetSavedQueryExportResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryExportResponse, _super);
    function GetSavedQueryExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSavedQueryExportResponse.prototype, "getSavedQueryExport200ApplicationZipBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExport400ApplicationJson)
    ], GetSavedQueryExportResponse.prototype, "getSavedQueryExport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExport401ApplicationJson)
    ], GetSavedQueryExportResponse.prototype, "getSavedQueryExport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExport404ApplicationJson)
    ], GetSavedQueryExportResponse.prototype, "getSavedQueryExport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryExport500ApplicationJson)
    ], GetSavedQueryExportResponse.prototype, "getSavedQueryExport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryExportResponse.prototype, "statusCode", void 0);
    return GetSavedQueryExportResponse;
}(SpeakeasyBase));
export { GetSavedQueryExportResponse };
