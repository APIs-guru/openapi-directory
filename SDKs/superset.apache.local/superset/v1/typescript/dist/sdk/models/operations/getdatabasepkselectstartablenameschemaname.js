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
var GetDatabasePkSelectStarTableNameSchemaNamePathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaNamePathParams, _super);
    function GetDatabasePkSelectStarTableNameSchemaNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkSelectStarTableNameSchemaNamePathParams.prototype, "pk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schema_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaNamePathParams.prototype, "schemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaNamePathParams.prototype, "tableName", void 0);
    return GetDatabasePkSelectStarTableNameSchemaNamePathParams;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaNamePathParams };
var GetDatabasePkSelectStarTableNameSchemaNameSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaNameSecurity, _super);
    function GetDatabasePkSelectStarTableNameSchemaNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkSelectStarTableNameSchemaNameSecurity.prototype, "jwt", void 0);
    return GetDatabasePkSelectStarTableNameSchemaNameSecurity;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaNameSecurity };
var GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson, _super);
    function GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson };
var GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson, _super);
    function GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson };
var GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson, _super);
    function GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson };
var GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson, _super);
    function GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson };
var GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson, _super);
    function GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson };
var GetDatabasePkSelectStarTableNameSchemaNameRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaNameRequest, _super);
    function GetDatabasePkSelectStarTableNameSchemaNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaNamePathParams)
    ], GetDatabasePkSelectStarTableNameSchemaNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaNameSecurity)
    ], GetDatabasePkSelectStarTableNameSchemaNameRequest.prototype, "security", void 0);
    return GetDatabasePkSelectStarTableNameSchemaNameRequest;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaNameRequest };
var GetDatabasePkSelectStarTableNameSchemaNameResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSchemaNameResponse, _super);
    function GetDatabasePkSelectStarTableNameSchemaNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "getDatabasePkSelectStarTableNameSchemaName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "getDatabasePkSelectStarTableNameSchemaName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "getDatabasePkSelectStarTableNameSchemaName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "getDatabasePkSelectStarTableNameSchemaName422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "getDatabasePkSelectStarTableNameSchemaName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SelectStarResponseSchema)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "selectStarResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkSelectStarTableNameSchemaNameResponse.prototype, "statusCode", void 0);
    return GetDatabasePkSelectStarTableNameSchemaNameResponse;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSchemaNameResponse };
