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
var GetCssTemplatePkPathParams = /** @class */ (function (_super) {
    __extends(GetCssTemplatePkPathParams, _super);
    function GetCssTemplatePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetCssTemplatePkPathParams.prototype, "pk", void 0);
    return GetCssTemplatePkPathParams;
}(SpeakeasyBase));
export { GetCssTemplatePkPathParams };
var GetCssTemplatePkQueryParams = /** @class */ (function (_super) {
    __extends(GetCssTemplatePkQueryParams, _super);
    function GetCssTemplatePkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetCssTemplatePkQueryParams.prototype, "q", void 0);
    return GetCssTemplatePkQueryParams;
}(SpeakeasyBase));
export { GetCssTemplatePkQueryParams };
var GetCssTemplatePkSecurity = /** @class */ (function (_super) {
    __extends(GetCssTemplatePkSecurity, _super);
    function GetCssTemplatePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetCssTemplatePkSecurity.prototype, "jwt", void 0);
    return GetCssTemplatePkSecurity;
}(SpeakeasyBase));
export { GetCssTemplatePkSecurity };
var GetCssTemplatePk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk200ApplicationJsonDescriptionColumns, _super);
    function GetCssTemplatePk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetCssTemplatePk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetCssTemplatePk200ApplicationJsonDescriptionColumns };
var GetCssTemplatePk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk200ApplicationJsonLabelColumns, _super);
    function GetCssTemplatePk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetCssTemplatePk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetCssTemplatePk200ApplicationJsonLabelColumns };
var GetCssTemplatePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk200ApplicationJson, _super);
    function GetCssTemplatePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetCssTemplatePk200ApplicationJsonDescriptionColumns)
    ], GetCssTemplatePk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetCssTemplatePk200ApplicationJsonLabelColumns)
    ], GetCssTemplatePk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.CssTemplateRestApiGet)
    ], GetCssTemplatePk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetCssTemplatePk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk200ApplicationJson.prototype, "showTitle", void 0);
    return GetCssTemplatePk200ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk200ApplicationJson };
var GetCssTemplatePk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk400ApplicationJson, _super);
    function GetCssTemplatePk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk400ApplicationJson.prototype, "message", void 0);
    return GetCssTemplatePk400ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk400ApplicationJson };
var GetCssTemplatePk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk401ApplicationJson, _super);
    function GetCssTemplatePk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk401ApplicationJson.prototype, "message", void 0);
    return GetCssTemplatePk401ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk401ApplicationJson };
var GetCssTemplatePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk404ApplicationJson, _super);
    function GetCssTemplatePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk404ApplicationJson.prototype, "message", void 0);
    return GetCssTemplatePk404ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk404ApplicationJson };
var GetCssTemplatePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk422ApplicationJson, _super);
    function GetCssTemplatePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk422ApplicationJson.prototype, "message", void 0);
    return GetCssTemplatePk422ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk422ApplicationJson };
var GetCssTemplatePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCssTemplatePk500ApplicationJson, _super);
    function GetCssTemplatePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCssTemplatePk500ApplicationJson.prototype, "message", void 0);
    return GetCssTemplatePk500ApplicationJson;
}(SpeakeasyBase));
export { GetCssTemplatePk500ApplicationJson };
var GetCssTemplatePkRequest = /** @class */ (function (_super) {
    __extends(GetCssTemplatePkRequest, _super);
    function GetCssTemplatePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePkPathParams)
    ], GetCssTemplatePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePkQueryParams)
    ], GetCssTemplatePkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePkSecurity)
    ], GetCssTemplatePkRequest.prototype, "security", void 0);
    return GetCssTemplatePkRequest;
}(SpeakeasyBase));
export { GetCssTemplatePkRequest };
var GetCssTemplatePkResponse = /** @class */ (function (_super) {
    __extends(GetCssTemplatePkResponse, _super);
    function GetCssTemplatePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCssTemplatePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk200ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk400ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk401ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk404ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk422ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCssTemplatePk500ApplicationJson)
    ], GetCssTemplatePkResponse.prototype, "getCssTemplatePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCssTemplatePkResponse.prototype, "statusCode", void 0);
    return GetCssTemplatePkResponse;
}(SpeakeasyBase));
export { GetCssTemplatePkResponse };
