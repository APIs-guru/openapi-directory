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
var GetSavedQueryQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryQueryParams, _super);
    function GetSavedQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetSavedQueryQueryParams.prototype, "q", void 0);
    return GetSavedQueryQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryQueryParams };
var GetSavedQuerySecurity = /** @class */ (function (_super) {
    __extends(GetSavedQuerySecurity, _super);
    function GetSavedQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQuerySecurity.prototype, "jwt", void 0);
    return GetSavedQuerySecurity;
}(SpeakeasyBase));
export { GetSavedQuerySecurity };
var GetSavedQuery200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetSavedQuery200ApplicationJsonDescriptionColumns, _super);
    function GetSavedQuery200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQuery200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetSavedQuery200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetSavedQuery200ApplicationJsonDescriptionColumns };
var GetSavedQuery200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetSavedQuery200ApplicationJsonLabelColumns, _super);
    function GetSavedQuery200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQuery200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetSavedQuery200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetSavedQuery200ApplicationJsonLabelColumns };
var GetSavedQuery200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQuery200ApplicationJson, _super);
    function GetSavedQuery200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetSavedQuery200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetSavedQuery200ApplicationJsonDescriptionColumns)
    ], GetSavedQuery200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetSavedQuery200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetSavedQuery200ApplicationJsonLabelColumns)
    ], GetSavedQuery200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetSavedQuery200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetSavedQuery200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetSavedQuery200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.SavedQueryRestApiGetList }),
        __metadata("design:type", Array)
    ], GetSavedQuery200ApplicationJson.prototype, "result", void 0);
    return GetSavedQuery200ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQuery200ApplicationJson };
var GetSavedQuery400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQuery400ApplicationJson, _super);
    function GetSavedQuery400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQuery400ApplicationJson.prototype, "message", void 0);
    return GetSavedQuery400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQuery400ApplicationJson };
var GetSavedQuery401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQuery401ApplicationJson, _super);
    function GetSavedQuery401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQuery401ApplicationJson.prototype, "message", void 0);
    return GetSavedQuery401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQuery401ApplicationJson };
var GetSavedQuery422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQuery422ApplicationJson, _super);
    function GetSavedQuery422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQuery422ApplicationJson.prototype, "message", void 0);
    return GetSavedQuery422ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQuery422ApplicationJson };
var GetSavedQuery500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQuery500ApplicationJson, _super);
    function GetSavedQuery500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQuery500ApplicationJson.prototype, "message", void 0);
    return GetSavedQuery500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQuery500ApplicationJson };
var GetSavedQueryRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryRequest, _super);
    function GetSavedQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryQueryParams)
    ], GetSavedQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuerySecurity)
    ], GetSavedQueryRequest.prototype, "security", void 0);
    return GetSavedQueryRequest;
}(SpeakeasyBase));
export { GetSavedQueryRequest };
var GetSavedQueryResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryResponse, _super);
    function GetSavedQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuery200ApplicationJson)
    ], GetSavedQueryResponse.prototype, "getSavedQuery200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuery400ApplicationJson)
    ], GetSavedQueryResponse.prototype, "getSavedQuery400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuery401ApplicationJson)
    ], GetSavedQueryResponse.prototype, "getSavedQuery401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuery422ApplicationJson)
    ], GetSavedQueryResponse.prototype, "getSavedQuery422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQuery500ApplicationJson)
    ], GetSavedQueryResponse.prototype, "getSavedQuery500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryResponse.prototype, "statusCode", void 0);
    return GetSavedQueryResponse;
}(SpeakeasyBase));
export { GetSavedQueryResponse };
