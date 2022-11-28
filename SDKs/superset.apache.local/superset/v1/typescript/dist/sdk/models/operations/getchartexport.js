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
var GetChartExportQueryParams = /** @class */ (function (_super) {
    __extends(GetChartExportQueryParams, _super);
    function GetChartExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetChartExportQueryParams.prototype, "q", void 0);
    return GetChartExportQueryParams;
}(SpeakeasyBase));
export { GetChartExportQueryParams };
var GetChartExportSecurity = /** @class */ (function (_super) {
    __extends(GetChartExportSecurity, _super);
    function GetChartExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartExportSecurity.prototype, "jwt", void 0);
    return GetChartExportSecurity;
}(SpeakeasyBase));
export { GetChartExportSecurity };
var GetChartExport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartExport400ApplicationJson, _super);
    function GetChartExport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartExport400ApplicationJson.prototype, "message", void 0);
    return GetChartExport400ApplicationJson;
}(SpeakeasyBase));
export { GetChartExport400ApplicationJson };
var GetChartExport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartExport401ApplicationJson, _super);
    function GetChartExport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartExport401ApplicationJson.prototype, "message", void 0);
    return GetChartExport401ApplicationJson;
}(SpeakeasyBase));
export { GetChartExport401ApplicationJson };
var GetChartExport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartExport404ApplicationJson, _super);
    function GetChartExport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartExport404ApplicationJson.prototype, "message", void 0);
    return GetChartExport404ApplicationJson;
}(SpeakeasyBase));
export { GetChartExport404ApplicationJson };
var GetChartExport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartExport500ApplicationJson, _super);
    function GetChartExport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartExport500ApplicationJson.prototype, "message", void 0);
    return GetChartExport500ApplicationJson;
}(SpeakeasyBase));
export { GetChartExport500ApplicationJson };
var GetChartExportRequest = /** @class */ (function (_super) {
    __extends(GetChartExportRequest, _super);
    function GetChartExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExportQueryParams)
    ], GetChartExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExportSecurity)
    ], GetChartExportRequest.prototype, "security", void 0);
    return GetChartExportRequest;
}(SpeakeasyBase));
export { GetChartExportRequest };
var GetChartExportResponse = /** @class */ (function (_super) {
    __extends(GetChartExportResponse, _super);
    function GetChartExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetChartExportResponse.prototype, "getChartExport200ApplicationZipBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExport400ApplicationJson)
    ], GetChartExportResponse.prototype, "getChartExport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExport401ApplicationJson)
    ], GetChartExportResponse.prototype, "getChartExport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExport404ApplicationJson)
    ], GetChartExportResponse.prototype, "getChartExport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartExport500ApplicationJson)
    ], GetChartExportResponse.prototype, "getChartExport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartExportResponse.prototype, "statusCode", void 0);
    return GetChartExportResponse;
}(SpeakeasyBase));
export { GetChartExportResponse };
