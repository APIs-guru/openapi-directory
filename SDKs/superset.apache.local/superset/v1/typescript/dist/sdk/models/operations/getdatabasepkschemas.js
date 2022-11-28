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
var GetDatabasePkSchemasPathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemasPathParams, _super);
    function GetDatabasePkSchemasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkSchemasPathParams.prototype, "pk", void 0);
    return GetDatabasePkSchemasPathParams;
}(SpeakeasyBase));
export { GetDatabasePkSchemasPathParams };
var GetDatabasePkSchemasQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemasQueryParams, _super);
    function GetDatabasePkSchemasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.DatabaseSchemasQuerySchema)
    ], GetDatabasePkSchemasQueryParams.prototype, "q", void 0);
    return GetDatabasePkSchemasQueryParams;
}(SpeakeasyBase));
export { GetDatabasePkSchemasQueryParams };
var GetDatabasePkSchemasSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemasSecurity, _super);
    function GetDatabasePkSchemasSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkSchemasSecurity.prototype, "jwt", void 0);
    return GetDatabasePkSchemasSecurity;
}(SpeakeasyBase));
export { GetDatabasePkSchemasSecurity };
var GetDatabasePkSchemas400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemas400ApplicationJson, _super);
    function GetDatabasePkSchemas400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSchemas400ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSchemas400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSchemas400ApplicationJson };
var GetDatabasePkSchemas401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemas401ApplicationJson, _super);
    function GetDatabasePkSchemas401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSchemas401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSchemas401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSchemas401ApplicationJson };
var GetDatabasePkSchemas404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemas404ApplicationJson, _super);
    function GetDatabasePkSchemas404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSchemas404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSchemas404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSchemas404ApplicationJson };
var GetDatabasePkSchemas500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemas500ApplicationJson, _super);
    function GetDatabasePkSchemas500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSchemas500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSchemas500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSchemas500ApplicationJson };
var GetDatabasePkSchemasRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemasRequest, _super);
    function GetDatabasePkSchemasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemasPathParams)
    ], GetDatabasePkSchemasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemasQueryParams)
    ], GetDatabasePkSchemasRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemasSecurity)
    ], GetDatabasePkSchemasRequest.prototype, "security", void 0);
    return GetDatabasePkSchemasRequest;
}(SpeakeasyBase));
export { GetDatabasePkSchemasRequest };
var GetDatabasePkSchemasResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkSchemasResponse, _super);
    function GetDatabasePkSchemasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkSchemasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemas400ApplicationJson)
    ], GetDatabasePkSchemasResponse.prototype, "getDatabasePkSchemas400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemas401ApplicationJson)
    ], GetDatabasePkSchemasResponse.prototype, "getDatabasePkSchemas401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemas404ApplicationJson)
    ], GetDatabasePkSchemasResponse.prototype, "getDatabasePkSchemas404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSchemas500ApplicationJson)
    ], GetDatabasePkSchemasResponse.prototype, "getDatabasePkSchemas500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SchemasResponseSchema)
    ], GetDatabasePkSchemasResponse.prototype, "schemasResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkSchemasResponse.prototype, "statusCode", void 0);
    return GetDatabasePkSchemasResponse;
}(SpeakeasyBase));
export { GetDatabasePkSchemasResponse };
