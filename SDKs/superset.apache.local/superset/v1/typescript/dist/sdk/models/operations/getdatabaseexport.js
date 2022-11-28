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
var GetDatabaseExportQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabaseExportQueryParams, _super);
    function GetDatabaseExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], GetDatabaseExportQueryParams.prototype, "q", void 0);
    return GetDatabaseExportQueryParams;
}(SpeakeasyBase));
export { GetDatabaseExportQueryParams };
var GetDatabaseExportSecurity = /** @class */ (function (_super) {
    __extends(GetDatabaseExportSecurity, _super);
    function GetDatabaseExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabaseExportSecurity.prototype, "jwt", void 0);
    return GetDatabaseExportSecurity;
}(SpeakeasyBase));
export { GetDatabaseExportSecurity };
var GetDatabaseExport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseExport401ApplicationJson, _super);
    function GetDatabaseExport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseExport401ApplicationJson.prototype, "message", void 0);
    return GetDatabaseExport401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseExport401ApplicationJson };
var GetDatabaseExport404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseExport404ApplicationJson, _super);
    function GetDatabaseExport404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseExport404ApplicationJson.prototype, "message", void 0);
    return GetDatabaseExport404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseExport404ApplicationJson };
var GetDatabaseExport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabaseExport500ApplicationJson, _super);
    function GetDatabaseExport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabaseExport500ApplicationJson.prototype, "message", void 0);
    return GetDatabaseExport500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabaseExport500ApplicationJson };
var GetDatabaseExportRequest = /** @class */ (function (_super) {
    __extends(GetDatabaseExportRequest, _super);
    function GetDatabaseExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseExportQueryParams)
    ], GetDatabaseExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseExportSecurity)
    ], GetDatabaseExportRequest.prototype, "security", void 0);
    return GetDatabaseExportRequest;
}(SpeakeasyBase));
export { GetDatabaseExportRequest };
var GetDatabaseExportResponse = /** @class */ (function (_super) {
    __extends(GetDatabaseExportResponse, _super);
    function GetDatabaseExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabaseExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDatabaseExportResponse.prototype, "getDatabaseExport200ApplicationZipBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseExport401ApplicationJson)
    ], GetDatabaseExportResponse.prototype, "getDatabaseExport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseExport404ApplicationJson)
    ], GetDatabaseExportResponse.prototype, "getDatabaseExport404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseExport500ApplicationJson)
    ], GetDatabaseExportResponse.prototype, "getDatabaseExport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabaseExportResponse.prototype, "statusCode", void 0);
    return GetDatabaseExportResponse;
}(SpeakeasyBase));
export { GetDatabaseExportResponse };
