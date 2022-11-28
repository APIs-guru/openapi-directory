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
var GetQueryQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryQueryParams, _super);
    function GetQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetQueryQueryParams.prototype, "q", void 0);
    return GetQueryQueryParams;
}(SpeakeasyBase));
export { GetQueryQueryParams };
var GetQuerySecurity = /** @class */ (function (_super) {
    __extends(GetQuerySecurity, _super);
    function GetQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetQuerySecurity.prototype, "jwt", void 0);
    return GetQuerySecurity;
}(SpeakeasyBase));
export { GetQuerySecurity };
var GetQuery200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonDescriptionColumns, _super);
    function GetQuery200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetQuery200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonDescriptionColumns };
var GetQuery200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJsonLabelColumns, _super);
    function GetQuery200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetQuery200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetQuery200ApplicationJsonLabelColumns };
var GetQuery200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery200ApplicationJson, _super);
    function GetQuery200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetQuery200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetQuery200ApplicationJsonDescriptionColumns)
    ], GetQuery200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetQuery200ApplicationJsonLabelColumns)
    ], GetQuery200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetQuery200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.QueryRestApiGetList }),
        __metadata("design:type", Array)
    ], GetQuery200ApplicationJson.prototype, "result", void 0);
    return GetQuery200ApplicationJson;
}(SpeakeasyBase));
export { GetQuery200ApplicationJson };
var GetQuery400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery400ApplicationJson, _super);
    function GetQuery400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQuery400ApplicationJson.prototype, "message", void 0);
    return GetQuery400ApplicationJson;
}(SpeakeasyBase));
export { GetQuery400ApplicationJson };
var GetQuery401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery401ApplicationJson, _super);
    function GetQuery401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQuery401ApplicationJson.prototype, "message", void 0);
    return GetQuery401ApplicationJson;
}(SpeakeasyBase));
export { GetQuery401ApplicationJson };
var GetQuery422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery422ApplicationJson, _super);
    function GetQuery422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQuery422ApplicationJson.prototype, "message", void 0);
    return GetQuery422ApplicationJson;
}(SpeakeasyBase));
export { GetQuery422ApplicationJson };
var GetQuery500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQuery500ApplicationJson, _super);
    function GetQuery500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQuery500ApplicationJson.prototype, "message", void 0);
    return GetQuery500ApplicationJson;
}(SpeakeasyBase));
export { GetQuery500ApplicationJson };
var GetQueryRequest = /** @class */ (function (_super) {
    __extends(GetQueryRequest, _super);
    function GetQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryQueryParams)
    ], GetQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuerySecurity)
    ], GetQueryRequest.prototype, "security", void 0);
    return GetQueryRequest;
}(SpeakeasyBase));
export { GetQueryRequest };
var GetQueryResponse = /** @class */ (function (_super) {
    __extends(GetQueryResponse, _super);
    function GetQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery200ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery400ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery401ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery422ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuery500ApplicationJson)
    ], GetQueryResponse.prototype, "getQuery500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryResponse.prototype, "statusCode", void 0);
    return GetQueryResponse;
}(SpeakeasyBase));
export { GetQueryResponse };
