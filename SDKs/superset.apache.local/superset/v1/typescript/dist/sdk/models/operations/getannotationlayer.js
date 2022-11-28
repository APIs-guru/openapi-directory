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
var GetAnnotationLayerQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerQueryParams, _super);
    function GetAnnotationLayerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetAnnotationLayerQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerQueryParams };
var GetAnnotationLayerSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerSecurity, _super);
    function GetAnnotationLayerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerSecurity };
var GetAnnotationLayer200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer200ApplicationJsonDescriptionColumns, _super);
    function GetAnnotationLayer200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetAnnotationLayer200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetAnnotationLayer200ApplicationJsonDescriptionColumns };
var GetAnnotationLayer200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer200ApplicationJsonLabelColumns, _super);
    function GetAnnotationLayer200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetAnnotationLayer200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetAnnotationLayer200ApplicationJsonLabelColumns };
var GetAnnotationLayer200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer200ApplicationJson, _super);
    function GetAnnotationLayer200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetAnnotationLayer200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetAnnotationLayer200ApplicationJsonDescriptionColumns)
    ], GetAnnotationLayer200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayer200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetAnnotationLayer200ApplicationJsonLabelColumns)
    ], GetAnnotationLayer200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayer200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayer200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.AnnotationLayerRestApiGetList }),
        __metadata("design:type", Array)
    ], GetAnnotationLayer200ApplicationJson.prototype, "result", void 0);
    return GetAnnotationLayer200ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayer200ApplicationJson };
var GetAnnotationLayer400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer400ApplicationJson, _super);
    function GetAnnotationLayer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayer400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayer400ApplicationJson };
var GetAnnotationLayer401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer401ApplicationJson, _super);
    function GetAnnotationLayer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayer401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayer401ApplicationJson };
var GetAnnotationLayer422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer422ApplicationJson, _super);
    function GetAnnotationLayer422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer422ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayer422ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayer422ApplicationJson };
var GetAnnotationLayer500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayer500ApplicationJson, _super);
    function GetAnnotationLayer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayer500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayer500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayer500ApplicationJson };
var GetAnnotationLayerRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerRequest, _super);
    function GetAnnotationLayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerQueryParams)
    ], GetAnnotationLayerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerSecurity)
    ], GetAnnotationLayerRequest.prototype, "security", void 0);
    return GetAnnotationLayerRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerRequest };
var GetAnnotationLayerResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerResponse, _super);
    function GetAnnotationLayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayer200ApplicationJson)
    ], GetAnnotationLayerResponse.prototype, "getAnnotationLayer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayer400ApplicationJson)
    ], GetAnnotationLayerResponse.prototype, "getAnnotationLayer400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayer401ApplicationJson)
    ], GetAnnotationLayerResponse.prototype, "getAnnotationLayer401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayer422ApplicationJson)
    ], GetAnnotationLayerResponse.prototype, "getAnnotationLayer422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayer500ApplicationJson)
    ], GetAnnotationLayerResponse.prototype, "getAnnotationLayer500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerResponse };
