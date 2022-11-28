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
var GetChartQueryParams = /** @class */ (function (_super) {
    __extends(GetChartQueryParams, _super);
    function GetChartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetChartQueryParams.prototype, "q", void 0);
    return GetChartQueryParams;
}(SpeakeasyBase));
export { GetChartQueryParams };
var GetChartSecurity = /** @class */ (function (_super) {
    __extends(GetChartSecurity, _super);
    function GetChartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartSecurity.prototype, "jwt", void 0);
    return GetChartSecurity;
}(SpeakeasyBase));
export { GetChartSecurity };
var GetChart200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetChart200ApplicationJsonDescriptionColumns, _super);
    function GetChart200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetChart200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetChart200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetChart200ApplicationJsonDescriptionColumns };
var GetChart200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetChart200ApplicationJsonLabelColumns, _super);
    function GetChart200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetChart200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetChart200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetChart200ApplicationJsonLabelColumns };
var GetChart200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChart200ApplicationJson, _super);
    function GetChart200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetChart200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetChart200ApplicationJsonDescriptionColumns)
    ], GetChart200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetChart200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetChart200ApplicationJsonLabelColumns)
    ], GetChart200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetChart200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetChart200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetChart200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ChartRestApiGetList }),
        __metadata("design:type", Array)
    ], GetChart200ApplicationJson.prototype, "result", void 0);
    return GetChart200ApplicationJson;
}(SpeakeasyBase));
export { GetChart200ApplicationJson };
var GetChart400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChart400ApplicationJson, _super);
    function GetChart400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChart400ApplicationJson.prototype, "message", void 0);
    return GetChart400ApplicationJson;
}(SpeakeasyBase));
export { GetChart400ApplicationJson };
var GetChart401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChart401ApplicationJson, _super);
    function GetChart401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChart401ApplicationJson.prototype, "message", void 0);
    return GetChart401ApplicationJson;
}(SpeakeasyBase));
export { GetChart401ApplicationJson };
var GetChart422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChart422ApplicationJson, _super);
    function GetChart422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChart422ApplicationJson.prototype, "message", void 0);
    return GetChart422ApplicationJson;
}(SpeakeasyBase));
export { GetChart422ApplicationJson };
var GetChart500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChart500ApplicationJson, _super);
    function GetChart500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChart500ApplicationJson.prototype, "message", void 0);
    return GetChart500ApplicationJson;
}(SpeakeasyBase));
export { GetChart500ApplicationJson };
var GetChartRequest = /** @class */ (function (_super) {
    __extends(GetChartRequest, _super);
    function GetChartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartQueryParams)
    ], GetChartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartSecurity)
    ], GetChartRequest.prototype, "security", void 0);
    return GetChartRequest;
}(SpeakeasyBase));
export { GetChartRequest };
var GetChartResponse = /** @class */ (function (_super) {
    __extends(GetChartResponse, _super);
    function GetChartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChart200ApplicationJson)
    ], GetChartResponse.prototype, "getChart200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChart400ApplicationJson)
    ], GetChartResponse.prototype, "getChart400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChart401ApplicationJson)
    ], GetChartResponse.prototype, "getChart401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChart422ApplicationJson)
    ], GetChartResponse.prototype, "getChart422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChart500ApplicationJson)
    ], GetChartResponse.prototype, "getChart500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartResponse.prototype, "statusCode", void 0);
    return GetChartResponse;
}(SpeakeasyBase));
export { GetChartResponse };
