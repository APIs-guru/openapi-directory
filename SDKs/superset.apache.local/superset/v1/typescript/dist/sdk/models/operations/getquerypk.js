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
var GetQueryPkPathParams = /** @class */ (function (_super) {
    __extends(GetQueryPkPathParams, _super);
    function GetQueryPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetQueryPkPathParams.prototype, "pk", void 0);
    return GetQueryPkPathParams;
}(SpeakeasyBase));
export { GetQueryPkPathParams };
var GetQueryPkQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryPkQueryParams, _super);
    function GetQueryPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetQueryPkQueryParams.prototype, "q", void 0);
    return GetQueryPkQueryParams;
}(SpeakeasyBase));
export { GetQueryPkQueryParams };
var GetQueryPkSecurity = /** @class */ (function (_super) {
    __extends(GetQueryPkSecurity, _super);
    function GetQueryPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetQueryPkSecurity.prototype, "jwt", void 0);
    return GetQueryPkSecurity;
}(SpeakeasyBase));
export { GetQueryPkSecurity };
var GetQueryPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetQueryPk200ApplicationJsonDescriptionColumns, _super);
    function GetQueryPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetQueryPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetQueryPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetQueryPk200ApplicationJsonDescriptionColumns };
var GetQueryPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetQueryPk200ApplicationJsonLabelColumns, _super);
    function GetQueryPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetQueryPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetQueryPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetQueryPk200ApplicationJsonLabelColumns };
var GetQueryPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk200ApplicationJson, _super);
    function GetQueryPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetQueryPk200ApplicationJsonDescriptionColumns)
    ], GetQueryPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetQueryPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetQueryPk200ApplicationJsonLabelColumns)
    ], GetQueryPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.QueryRestApiGet)
    ], GetQueryPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetQueryPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetQueryPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetQueryPk200ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk200ApplicationJson };
var GetQueryPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk400ApplicationJson, _super);
    function GetQueryPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryPk400ApplicationJson.prototype, "message", void 0);
    return GetQueryPk400ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk400ApplicationJson };
var GetQueryPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk401ApplicationJson, _super);
    function GetQueryPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryPk401ApplicationJson.prototype, "message", void 0);
    return GetQueryPk401ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk401ApplicationJson };
var GetQueryPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk404ApplicationJson, _super);
    function GetQueryPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryPk404ApplicationJson.prototype, "message", void 0);
    return GetQueryPk404ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk404ApplicationJson };
var GetQueryPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk422ApplicationJson, _super);
    function GetQueryPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryPk422ApplicationJson.prototype, "message", void 0);
    return GetQueryPk422ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk422ApplicationJson };
var GetQueryPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetQueryPk500ApplicationJson, _super);
    function GetQueryPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetQueryPk500ApplicationJson.prototype, "message", void 0);
    return GetQueryPk500ApplicationJson;
}(SpeakeasyBase));
export { GetQueryPk500ApplicationJson };
var GetQueryPkRequest = /** @class */ (function (_super) {
    __extends(GetQueryPkRequest, _super);
    function GetQueryPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPkPathParams)
    ], GetQueryPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPkQueryParams)
    ], GetQueryPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPkSecurity)
    ], GetQueryPkRequest.prototype, "security", void 0);
    return GetQueryPkRequest;
}(SpeakeasyBase));
export { GetQueryPkRequest };
var GetQueryPkResponse = /** @class */ (function (_super) {
    __extends(GetQueryPkResponse, _super);
    function GetQueryPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk200ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk400ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk401ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk404ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk422ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryPk500ApplicationJson)
    ], GetQueryPkResponse.prototype, "getQueryPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryPkResponse.prototype, "statusCode", void 0);
    return GetQueryPkResponse;
}(SpeakeasyBase));
export { GetQueryPkResponse };
