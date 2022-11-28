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
var GetAnnotationLayerPkPathParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkPathParams, _super);
    function GetAnnotationLayerPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkPathParams.prototype, "pk", void 0);
    return GetAnnotationLayerPkPathParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkPathParams };
var GetAnnotationLayerPkQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkQueryParams, _super);
    function GetAnnotationLayerPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetAnnotationLayerPkQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerPkQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerPkQueryParams };
var GetAnnotationLayerPkSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkSecurity, _super);
    function GetAnnotationLayerPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerPkSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerPkSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerPkSecurity };
var GetAnnotationLayerPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk200ApplicationJsonDescriptionColumns, _super);
    function GetAnnotationLayerPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetAnnotationLayerPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetAnnotationLayerPk200ApplicationJsonDescriptionColumns };
var GetAnnotationLayerPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk200ApplicationJsonLabelColumns, _super);
    function GetAnnotationLayerPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetAnnotationLayerPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetAnnotationLayerPk200ApplicationJsonLabelColumns };
var GetAnnotationLayerPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk200ApplicationJson, _super);
    function GetAnnotationLayerPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetAnnotationLayerPk200ApplicationJsonDescriptionColumns)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetAnnotationLayerPk200ApplicationJsonLabelColumns)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.AnnotationLayerRestApiGet)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetAnnotationLayerPk200ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk200ApplicationJson };
var GetAnnotationLayerPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk400ApplicationJson, _super);
    function GetAnnotationLayerPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPk400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk400ApplicationJson };
var GetAnnotationLayerPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk401ApplicationJson, _super);
    function GetAnnotationLayerPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPk401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk401ApplicationJson };
var GetAnnotationLayerPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk404ApplicationJson, _super);
    function GetAnnotationLayerPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk404ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPk404ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk404ApplicationJson };
var GetAnnotationLayerPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk422ApplicationJson, _super);
    function GetAnnotationLayerPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk422ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPk422ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk422ApplicationJson };
var GetAnnotationLayerPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPk500ApplicationJson, _super);
    function GetAnnotationLayerPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerPk500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerPk500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerPk500ApplicationJson };
var GetAnnotationLayerPkRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkRequest, _super);
    function GetAnnotationLayerPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkPathParams)
    ], GetAnnotationLayerPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkQueryParams)
    ], GetAnnotationLayerPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPkSecurity)
    ], GetAnnotationLayerPkRequest.prototype, "security", void 0);
    return GetAnnotationLayerPkRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerPkRequest };
var GetAnnotationLayerPkResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerPkResponse, _super);
    function GetAnnotationLayerPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk200ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk400ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk401ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk404ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk422ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerPk500ApplicationJson)
    ], GetAnnotationLayerPkResponse.prototype, "getAnnotationLayerPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerPkResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerPkResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerPkResponse };
