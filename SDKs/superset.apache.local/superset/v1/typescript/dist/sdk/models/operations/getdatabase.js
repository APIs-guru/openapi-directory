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
var GetDatabaseQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabaseQueryParams, _super);
    function GetDatabaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetDatabaseQueryParams.prototype, "q", void 0);
    return GetDatabaseQueryParams;
}(SpeakeasyBase));
export { GetDatabaseQueryParams };
var GetDatabaseSecurity = /** @class */ (function (_super) {
    __extends(GetDatabaseSecurity, _super);
    function GetDatabaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabaseSecurity.prototype, "jwt", void 0);
    return GetDatabaseSecurity;
}(SpeakeasyBase));
export { GetDatabaseSecurity };
var GetDatabase200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetDatabase200ApplicationJsonDescriptionColumns, _super);
    function GetDatabase200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatabase200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetDatabase200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetDatabase200ApplicationJsonDescriptionColumns };
var GetDatabase200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetDatabase200ApplicationJsonLabelColumns, _super);
    function GetDatabase200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatabase200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetDatabase200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetDatabase200ApplicationJsonLabelColumns };
var GetDatabase200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabase200ApplicationJson, _super);
    function GetDatabase200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetDatabase200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetDatabase200ApplicationJsonDescriptionColumns)
    ], GetDatabase200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetDatabase200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetDatabase200ApplicationJsonLabelColumns)
    ], GetDatabase200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetDatabase200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetDatabase200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetDatabase200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DatabaseRestApiGetList }),
        __metadata("design:type", Array)
    ], GetDatabase200ApplicationJson.prototype, "result", void 0);
    return GetDatabase200ApplicationJson;
}(SpeakeasyBase));
export { GetDatabase200ApplicationJson };
var GetDatabase400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabase400ApplicationJson, _super);
    function GetDatabase400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabase400ApplicationJson.prototype, "message", void 0);
    return GetDatabase400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabase400ApplicationJson };
var GetDatabase401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabase401ApplicationJson, _super);
    function GetDatabase401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabase401ApplicationJson.prototype, "message", void 0);
    return GetDatabase401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabase401ApplicationJson };
var GetDatabase422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabase422ApplicationJson, _super);
    function GetDatabase422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabase422ApplicationJson.prototype, "message", void 0);
    return GetDatabase422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabase422ApplicationJson };
var GetDatabase500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabase500ApplicationJson, _super);
    function GetDatabase500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabase500ApplicationJson.prototype, "message", void 0);
    return GetDatabase500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabase500ApplicationJson };
var GetDatabaseRequest = /** @class */ (function (_super) {
    __extends(GetDatabaseRequest, _super);
    function GetDatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseQueryParams)
    ], GetDatabaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabaseSecurity)
    ], GetDatabaseRequest.prototype, "security", void 0);
    return GetDatabaseRequest;
}(SpeakeasyBase));
export { GetDatabaseRequest };
var GetDatabaseResponse = /** @class */ (function (_super) {
    __extends(GetDatabaseResponse, _super);
    function GetDatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabase200ApplicationJson)
    ], GetDatabaseResponse.prototype, "getDatabase200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabase400ApplicationJson)
    ], GetDatabaseResponse.prototype, "getDatabase400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabase401ApplicationJson)
    ], GetDatabaseResponse.prototype, "getDatabase401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabase422ApplicationJson)
    ], GetDatabaseResponse.prototype, "getDatabase422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabase500ApplicationJson)
    ], GetDatabaseResponse.prototype, "getDatabase500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabaseResponse.prototype, "statusCode", void 0);
    return GetDatabaseResponse;
}(SpeakeasyBase));
export { GetDatabaseResponse };
