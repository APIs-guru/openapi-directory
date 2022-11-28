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
var GetDatabasePkTableTableNameSchemaNamePathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaNamePathParams, _super);
    function GetDatabasePkTableTableNameSchemaNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkTableTableNameSchemaNamePathParams.prototype, "pk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schema_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaNamePathParams.prototype, "schemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaNamePathParams.prototype, "tableName", void 0);
    return GetDatabasePkTableTableNameSchemaNamePathParams;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaNamePathParams };
var GetDatabasePkTableTableNameSchemaNameSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaNameSecurity, _super);
    function GetDatabasePkTableTableNameSchemaNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkTableTableNameSchemaNameSecurity.prototype, "jwt", void 0);
    return GetDatabasePkTableTableNameSchemaNameSecurity;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaNameSecurity };
var GetDatabasePkTableTableNameSchemaName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaName400ApplicationJson, _super);
    function GetDatabasePkTableTableNameSchemaName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaName400ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkTableTableNameSchemaName400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaName400ApplicationJson };
var GetDatabasePkTableTableNameSchemaName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaName401ApplicationJson, _super);
    function GetDatabasePkTableTableNameSchemaName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaName401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkTableTableNameSchemaName401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaName401ApplicationJson };
var GetDatabasePkTableTableNameSchemaName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaName404ApplicationJson, _super);
    function GetDatabasePkTableTableNameSchemaName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaName404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkTableTableNameSchemaName404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaName404ApplicationJson };
var GetDatabasePkTableTableNameSchemaName422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaName422ApplicationJson, _super);
    function GetDatabasePkTableTableNameSchemaName422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaName422ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkTableTableNameSchemaName422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaName422ApplicationJson };
var GetDatabasePkTableTableNameSchemaName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaName500ApplicationJson, _super);
    function GetDatabasePkTableTableNameSchemaName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaName500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkTableTableNameSchemaName500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaName500ApplicationJson };
var GetDatabasePkTableTableNameSchemaNameRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaNameRequest, _super);
    function GetDatabasePkTableTableNameSchemaNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaNamePathParams)
    ], GetDatabasePkTableTableNameSchemaNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaNameSecurity)
    ], GetDatabasePkTableTableNameSchemaNameRequest.prototype, "security", void 0);
    return GetDatabasePkTableTableNameSchemaNameRequest;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaNameRequest };
var GetDatabasePkTableTableNameSchemaNameResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkTableTableNameSchemaNameResponse, _super);
    function GetDatabasePkTableTableNameSchemaNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaName400ApplicationJson)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "getDatabasePkTableTableNameSchemaName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaName401ApplicationJson)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "getDatabasePkTableTableNameSchemaName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaName404ApplicationJson)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "getDatabasePkTableTableNameSchemaName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaName422ApplicationJson)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "getDatabasePkTableTableNameSchemaName422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkTableTableNameSchemaName500ApplicationJson)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "getDatabasePkTableTableNameSchemaName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TableMetadataResponseSchema)
    ], GetDatabasePkTableTableNameSchemaNameResponse.prototype, "tableMetadataResponseSchema", void 0);
    return GetDatabasePkTableTableNameSchemaNameResponse;
}(SpeakeasyBase));
export { GetDatabasePkTableTableNameSchemaNameResponse };
