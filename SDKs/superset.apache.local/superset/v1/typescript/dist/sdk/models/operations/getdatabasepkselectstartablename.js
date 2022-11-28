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
var GetDatabasePkSelectStarTableNamePathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNamePathParams, _super);
    function GetDatabasePkSelectStarTableNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkSelectStarTableNamePathParams.prototype, "pk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNamePathParams.prototype, "tableName", void 0);
    return GetDatabasePkSelectStarTableNamePathParams;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNamePathParams };
var GetDatabasePkSelectStarTableNameQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameQueryParams, _super);
    function GetDatabasePkSelectStarTableNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schema_name" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameQueryParams.prototype, "schemaName", void 0);
    return GetDatabasePkSelectStarTableNameQueryParams;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameQueryParams };
var GetDatabasePkSelectStarTableNameSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameSecurity, _super);
    function GetDatabasePkSelectStarTableNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkSelectStarTableNameSecurity.prototype, "jwt", void 0);
    return GetDatabasePkSelectStarTableNameSecurity;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameSecurity };
var GetDatabasePkSelectStarTableName400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableName400ApplicationJson, _super);
    function GetDatabasePkSelectStarTableName400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableName400ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableName400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableName400ApplicationJson };
var GetDatabasePkSelectStarTableName401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableName401ApplicationJson, _super);
    function GetDatabasePkSelectStarTableName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableName401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableName401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableName401ApplicationJson };
var GetDatabasePkSelectStarTableName404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableName404ApplicationJson, _super);
    function GetDatabasePkSelectStarTableName404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableName404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableName404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableName404ApplicationJson };
var GetDatabasePkSelectStarTableName422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableName422ApplicationJson, _super);
    function GetDatabasePkSelectStarTableName422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableName422ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableName422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableName422ApplicationJson };
var GetDatabasePkSelectStarTableName500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableName500ApplicationJson, _super);
    function GetDatabasePkSelectStarTableName500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableName500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePkSelectStarTableName500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableName500ApplicationJson };
var GetDatabasePkSelectStarTableNameRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameRequest, _super);
    function GetDatabasePkSelectStarTableNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNamePathParams)
    ], GetDatabasePkSelectStarTableNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameQueryParams)
    ], GetDatabasePkSelectStarTableNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableNameSecurity)
    ], GetDatabasePkSelectStarTableNameRequest.prototype, "security", void 0);
    return GetDatabasePkSelectStarTableNameRequest;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameRequest };
var GetDatabasePkSelectStarTableNameResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkSelectStarTableNameResponse, _super);
    function GetDatabasePkSelectStarTableNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableName400ApplicationJson)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "getDatabasePkSelectStarTableName400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableName401ApplicationJson)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "getDatabasePkSelectStarTableName401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableName404ApplicationJson)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "getDatabasePkSelectStarTableName404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableName422ApplicationJson)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "getDatabasePkSelectStarTableName422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSelectStarTableName500ApplicationJson)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "getDatabasePkSelectStarTableName500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SelectStarResponseSchema)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "selectStarResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkSelectStarTableNameResponse.prototype, "statusCode", void 0);
    return GetDatabasePkSelectStarTableNameResponse;
}(SpeakeasyBase));
export { GetDatabasePkSelectStarTableNameResponse };
