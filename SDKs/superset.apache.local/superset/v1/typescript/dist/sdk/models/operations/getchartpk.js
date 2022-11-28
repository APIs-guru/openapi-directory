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
var GetChartPkPathParams = /** @class */ (function (_super) {
    __extends(GetChartPkPathParams, _super);
    function GetChartPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetChartPkPathParams.prototype, "pk", void 0);
    return GetChartPkPathParams;
}(SpeakeasyBase));
export { GetChartPkPathParams };
var GetChartPkQueryParams = /** @class */ (function (_super) {
    __extends(GetChartPkQueryParams, _super);
    function GetChartPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetChartPkQueryParams.prototype, "q", void 0);
    return GetChartPkQueryParams;
}(SpeakeasyBase));
export { GetChartPkQueryParams };
var GetChartPkSecurity = /** @class */ (function (_super) {
    __extends(GetChartPkSecurity, _super);
    function GetChartPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartPkSecurity.prototype, "jwt", void 0);
    return GetChartPkSecurity;
}(SpeakeasyBase));
export { GetChartPkSecurity };
var GetChartPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetChartPk200ApplicationJsonDescriptionColumns, _super);
    function GetChartPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetChartPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetChartPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetChartPk200ApplicationJsonDescriptionColumns };
var GetChartPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetChartPk200ApplicationJsonLabelColumns, _super);
    function GetChartPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetChartPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetChartPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetChartPk200ApplicationJsonLabelColumns };
var GetChartPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk200ApplicationJson, _super);
    function GetChartPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetChartPk200ApplicationJsonDescriptionColumns)
    ], GetChartPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetChartPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetChartPk200ApplicationJsonLabelColumns)
    ], GetChartPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ChartRestApiGet)
    ], GetChartPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetChartPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetChartPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetChartPk200ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk200ApplicationJson };
var GetChartPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk400ApplicationJson, _super);
    function GetChartPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPk400ApplicationJson.prototype, "message", void 0);
    return GetChartPk400ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk400ApplicationJson };
var GetChartPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk401ApplicationJson, _super);
    function GetChartPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPk401ApplicationJson.prototype, "message", void 0);
    return GetChartPk401ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk401ApplicationJson };
var GetChartPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk404ApplicationJson, _super);
    function GetChartPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPk404ApplicationJson.prototype, "message", void 0);
    return GetChartPk404ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk404ApplicationJson };
var GetChartPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk422ApplicationJson, _super);
    function GetChartPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPk422ApplicationJson.prototype, "message", void 0);
    return GetChartPk422ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk422ApplicationJson };
var GetChartPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPk500ApplicationJson, _super);
    function GetChartPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPk500ApplicationJson.prototype, "message", void 0);
    return GetChartPk500ApplicationJson;
}(SpeakeasyBase));
export { GetChartPk500ApplicationJson };
var GetChartPkRequest = /** @class */ (function (_super) {
    __extends(GetChartPkRequest, _super);
    function GetChartPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkPathParams)
    ], GetChartPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkQueryParams)
    ], GetChartPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkSecurity)
    ], GetChartPkRequest.prototype, "security", void 0);
    return GetChartPkRequest;
}(SpeakeasyBase));
export { GetChartPkRequest };
var GetChartPkResponse = /** @class */ (function (_super) {
    __extends(GetChartPkResponse, _super);
    function GetChartPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk200ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk400ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk401ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk404ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk422ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPk500ApplicationJson)
    ], GetChartPkResponse.prototype, "getChartPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartPkResponse.prototype, "statusCode", void 0);
    return GetChartPkResponse;
}(SpeakeasyBase));
export { GetChartPkResponse };
