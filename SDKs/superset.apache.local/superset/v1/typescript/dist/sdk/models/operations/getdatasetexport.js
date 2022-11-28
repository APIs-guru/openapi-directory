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
var GetDatasetExportQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetExportQueryParams, _super);
    function GetDatasetExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetDatasetExportQueryParams.prototype, "q", void 0);
    return GetDatasetExportQueryParams;
}(SpeakeasyBase));
export { GetDatasetExportQueryParams };
var GetDatasetExportSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetExportSecurity, _super);
    function GetDatasetExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetExportSecurity.prototype, "jwt", void 0);
    return GetDatasetExportSecurity;
}(SpeakeasyBase));
export { GetDatasetExportSecurity };
var GetDatasetExport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetExport400ApplicationJson, _super);
    function GetDatasetExport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetExport400ApplicationJson.prototype, "message", void 0);
    return GetDatasetExport400ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetExport400ApplicationJson };
var GetDatasetExport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetExport401ApplicationJson, _super);
    function GetDatasetExport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetExport401ApplicationJson.prototype, "message", void 0);
    return GetDatasetExport401ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetExport401ApplicationJson };
var GetDatasetExport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetExport404ApplicationJson, _super);
    function GetDatasetExport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetExport404ApplicationJson.prototype, "message", void 0);
    return GetDatasetExport404ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetExport404ApplicationJson };
var GetDatasetExport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetExport500ApplicationJson, _super);
    function GetDatasetExport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetExport500ApplicationJson.prototype, "message", void 0);
    return GetDatasetExport500ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetExport500ApplicationJson };
var GetDatasetExportRequest = /** @class */ (function (_super) {
    __extends(GetDatasetExportRequest, _super);
    function GetDatasetExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExportQueryParams)
    ], GetDatasetExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExportSecurity)
    ], GetDatasetExportRequest.prototype, "security", void 0);
    return GetDatasetExportRequest;
}(SpeakeasyBase));
export { GetDatasetExportRequest };
var GetDatasetExportResponse = /** @class */ (function (_super) {
    __extends(GetDatasetExportResponse, _super);
    function GetDatasetExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetExportResponse.prototype, "getDatasetExport200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExport400ApplicationJson)
    ], GetDatasetExportResponse.prototype, "getDatasetExport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExport401ApplicationJson)
    ], GetDatasetExportResponse.prototype, "getDatasetExport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExport404ApplicationJson)
    ], GetDatasetExportResponse.prototype, "getDatasetExport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetExport500ApplicationJson)
    ], GetDatasetExportResponse.prototype, "getDatasetExport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetExportResponse.prototype, "statusCode", void 0);
    return GetDatasetExportResponse;
}(SpeakeasyBase));
export { GetDatasetExportResponse };
