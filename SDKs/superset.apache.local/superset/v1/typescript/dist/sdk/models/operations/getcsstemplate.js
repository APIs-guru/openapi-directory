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
var GetCssTemplateQueryParams = /** @class */ (function (_super) {
    __extends(GetCssTemplateQueryParams, _super);
    function GetCssTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetCssTemplateQueryParams.prototype, "q", void 0);
    return GetCssTemplateQueryParams;
}(SpeakeasyBase));
export { GetCssTemplateQueryParams };
var GetCssTemplateSecurity = /** @class */ (function (_super) {
    __extends(GetCssTemplateSecurity, _super);
    function GetCssTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetCssTemplateSecurity.prototype, "jwt", void 0);
    return GetCssTemplateSecurity;
}(SpeakeasyBase));
export { GetCssTemplateSecurity };
var GetCssTemplate200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetCssTemplate200ApplicationJsonDescriptionColumns, _super);
    function GetCssTemplate200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetCssTemplate200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetCssTemplate200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetCssTemplate200ApplicationJsonDescriptionColumns };
var GetCssTemplate200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetCssTemplate200ApplicationJsonLabelColumns, _super);
    function GetCssTemplate200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetCssTemplate200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetCssTemplate200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetCssTemplate200ApplicationJsonLabelColumns };
var GetCssTemplate200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplate200ApplicationJson, _super);
    function GetCssTemplate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetCssTemplate200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetCssTemplate200ApplicationJsonDescriptionColumns)
    ], GetCssTemplate200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetCssTemplate200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetCssTemplate200ApplicationJsonLabelColumns)
    ], GetCssTemplate200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetCssTemplate200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetCssTemplate200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetCssTemplate200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.CssTemplateRestApiGetList }),
        __metadata("design:type", Array)
    ], GetCssTemplate200ApplicationJson.prototype, "result", void 0);
    return GetCssTemplate200ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplate200ApplicationJson };
var GetCssTemplate400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplate400ApplicationJson, _super);
    function GetCssTemplate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplate400ApplicationJson.prototype, "message", void 0);
    return GetCssTemplate400ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplate400ApplicationJson };
var GetCssTemplate401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplate401ApplicationJson, _super);
    function GetCssTemplate401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplate401ApplicationJson.prototype, "message", void 0);
    return GetCssTemplate401ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplate401ApplicationJson };
var GetCssTemplate422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplate422ApplicationJson, _super);
    function GetCssTemplate422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplate422ApplicationJson.prototype, "message", void 0);
    return GetCssTemplate422ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplate422ApplicationJson };
var GetCssTemplate500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplate500ApplicationJson, _super);
    function GetCssTemplate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplate500ApplicationJson.prototype, "message", void 0);
    return GetCssTemplate500ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplate500ApplicationJson };
var GetCssTemplateRequest = /** @class */ (function (_super) {
    __extends(GetCssTemplateRequest, _super);
    function GetCssTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateQueryParams)
    ], GetCssTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplateSecurity)
    ], GetCssTemplateRequest.prototype, "security", void 0);
    return GetCssTemplateRequest;
}(SpeakeasyBase));
export { GetCssTemplateRequest };
var GetCssTemplateResponse = /** @class */ (function (_super) {
    __extends(GetCssTemplateResponse, _super);
    function GetCssTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCssTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplate200ApplicationJson)
    ], GetCssTemplateResponse.prototype, "getCssTemplate200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplate400ApplicationJson)
    ], GetCssTemplateResponse.prototype, "getCssTemplate400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplate401ApplicationJson)
    ], GetCssTemplateResponse.prototype, "getCssTemplate401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplate422ApplicationJson)
    ], GetCssTemplateResponse.prototype, "getCssTemplate422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplate500ApplicationJson)
    ], GetCssTemplateResponse.prototype, "getCssTemplate500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCssTemplateResponse.prototype, "statusCode", void 0);
    return GetCssTemplateResponse;
}(SpeakeasyBase));
export { GetCssTemplateResponse };
