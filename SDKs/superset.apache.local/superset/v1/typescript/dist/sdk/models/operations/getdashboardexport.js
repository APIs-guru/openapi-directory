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
var GetDashboardExportQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardExportQueryParams, _super);
    function GetDashboardExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetDashboardExportQueryParams.prototype, "q", void 0);
    return GetDashboardExportQueryParams;
}(SpeakeasyBase));
export { GetDashboardExportQueryParams };
var GetDashboardExportSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardExportSecurity, _super);
    function GetDashboardExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardExportSecurity.prototype, "jwt", void 0);
    return GetDashboardExportSecurity;
}(SpeakeasyBase));
export { GetDashboardExportSecurity };
var GetDashboardExport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardExport400ApplicationJson, _super);
    function GetDashboardExport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardExport400ApplicationJson.prototype, "message", void 0);
    return GetDashboardExport400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardExport400ApplicationJson };
var GetDashboardExport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardExport401ApplicationJson, _super);
    function GetDashboardExport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardExport401ApplicationJson.prototype, "message", void 0);
    return GetDashboardExport401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardExport401ApplicationJson };
var GetDashboardExport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardExport404ApplicationJson, _super);
    function GetDashboardExport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardExport404ApplicationJson.prototype, "message", void 0);
    return GetDashboardExport404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardExport404ApplicationJson };
var GetDashboardExport422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardExport422ApplicationJson, _super);
    function GetDashboardExport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardExport422ApplicationJson.prototype, "message", void 0);
    return GetDashboardExport422ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardExport422ApplicationJson };
var GetDashboardExport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardExport500ApplicationJson, _super);
    function GetDashboardExport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardExport500ApplicationJson.prototype, "message", void 0);
    return GetDashboardExport500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardExport500ApplicationJson };
var GetDashboardExportRequest = /** @class */ (function (_super) {
    __extends(GetDashboardExportRequest, _super);
    function GetDashboardExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExportQueryParams)
    ], GetDashboardExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExportSecurity)
    ], GetDashboardExportRequest.prototype, "security", void 0);
    return GetDashboardExportRequest;
}(SpeakeasyBase));
export { GetDashboardExportRequest };
var GetDashboardExportResponse = /** @class */ (function (_super) {
    __extends(GetDashboardExportResponse, _super);
    function GetDashboardExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardExportResponse.prototype, "getDashboardExport200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExport400ApplicationJson)
    ], GetDashboardExportResponse.prototype, "getDashboardExport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExport401ApplicationJson)
    ], GetDashboardExportResponse.prototype, "getDashboardExport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExport404ApplicationJson)
    ], GetDashboardExportResponse.prototype, "getDashboardExport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExport422ApplicationJson)
    ], GetDashboardExportResponse.prototype, "getDashboardExport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardExport500ApplicationJson)
    ], GetDashboardExportResponse.prototype, "getDashboardExport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardExportResponse.prototype, "statusCode", void 0);
    return GetDashboardExportResponse;
}(SpeakeasyBase));
export { GetDashboardExportResponse };
