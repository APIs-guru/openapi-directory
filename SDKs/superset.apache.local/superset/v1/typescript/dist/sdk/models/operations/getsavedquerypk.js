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
var GetSavedQueryPkPathParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryPkPathParams, _super);
    function GetSavedQueryPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetSavedQueryPkPathParams.prototype, "pk", void 0);
    return GetSavedQueryPkPathParams;
}(SpeakeasyBase));
export { GetSavedQueryPkPathParams };
var GetSavedQueryPkQueryParams = /** @class */ (function (_super) {
    __extends(GetSavedQueryPkQueryParams, _super);
    function GetSavedQueryPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetSavedQueryPkQueryParams.prototype, "q", void 0);
    return GetSavedQueryPkQueryParams;
}(SpeakeasyBase));
export { GetSavedQueryPkQueryParams };
var GetSavedQueryPkSecurity = /** @class */ (function (_super) {
    __extends(GetSavedQueryPkSecurity, _super);
    function GetSavedQueryPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetSavedQueryPkSecurity.prototype, "jwt", void 0);
    return GetSavedQueryPkSecurity;
}(SpeakeasyBase));
export { GetSavedQueryPkSecurity };
var GetSavedQueryPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk200ApplicationJsonDescriptionColumns, _super);
    function GetSavedQueryPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetSavedQueryPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetSavedQueryPk200ApplicationJsonDescriptionColumns };
var GetSavedQueryPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk200ApplicationJsonLabelColumns, _super);
    function GetSavedQueryPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetSavedQueryPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetSavedQueryPk200ApplicationJsonLabelColumns };
var GetSavedQueryPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk200ApplicationJson, _super);
    function GetSavedQueryPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetSavedQueryPk200ApplicationJsonDescriptionColumns)
    ], GetSavedQueryPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetSavedQueryPk200ApplicationJsonLabelColumns)
    ], GetSavedQueryPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.SavedQueryRestApiGet)
    ], GetSavedQueryPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetSavedQueryPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetSavedQueryPk200ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk200ApplicationJson };
var GetSavedQueryPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk400ApplicationJson, _super);
    function GetSavedQueryPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk400ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryPk400ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk400ApplicationJson };
var GetSavedQueryPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk401ApplicationJson, _super);
    function GetSavedQueryPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk401ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryPk401ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk401ApplicationJson };
var GetSavedQueryPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk404ApplicationJson, _super);
    function GetSavedQueryPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk404ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryPk404ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk404ApplicationJson };
var GetSavedQueryPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk422ApplicationJson, _super);
    function GetSavedQueryPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk422ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryPk422ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk422ApplicationJson };
var GetSavedQueryPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSavedQueryPk500ApplicationJson, _super);
    function GetSavedQueryPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetSavedQueryPk500ApplicationJson.prototype, "message", void 0);
    return GetSavedQueryPk500ApplicationJson;
}(SpeakeasyBase));
export { GetSavedQueryPk500ApplicationJson };
var GetSavedQueryPkRequest = /** @class */ (function (_super) {
    __extends(GetSavedQueryPkRequest, _super);
    function GetSavedQueryPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPkPathParams)
    ], GetSavedQueryPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPkQueryParams)
    ], GetSavedQueryPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPkSecurity)
    ], GetSavedQueryPkRequest.prototype, "security", void 0);
    return GetSavedQueryPkRequest;
}(SpeakeasyBase));
export { GetSavedQueryPkRequest };
var GetSavedQueryPkResponse = /** @class */ (function (_super) {
    __extends(GetSavedQueryPkResponse, _super);
    function GetSavedQueryPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSavedQueryPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk200ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk400ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk401ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk404ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk422ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSavedQueryPk500ApplicationJson)
    ], GetSavedQueryPkResponse.prototype, "getSavedQueryPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSavedQueryPkResponse.prototype, "statusCode", void 0);
    return GetSavedQueryPkResponse;
}(SpeakeasyBase));
export { GetSavedQueryPkResponse };
