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
var GetAnnotationLayerInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfoQueryParams, _super);
    function GetAnnotationLayerInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetInfoSchema)
    ], GetAnnotationLayerInfoQueryParams.prototype, "q", void 0);
    return GetAnnotationLayerInfoQueryParams;
}(SpeakeasyBase));
export { GetAnnotationLayerInfoQueryParams };
var GetAnnotationLayerInfoSecurity = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfoSecurity, _super);
    function GetAnnotationLayerInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetAnnotationLayerInfoSecurity.prototype, "jwt", void 0);
    return GetAnnotationLayerInfoSecurity;
}(SpeakeasyBase));
export { GetAnnotationLayerInfoSecurity };
var GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName, _super);
    function GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName.prototype, "operator", void 0);
    return GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName };
var GetAnnotationLayerInfo200ApplicationJsonFilters = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo200ApplicationJsonFilters, _super);
    function GetAnnotationLayerInfo200ApplicationJsonFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName }),
        __metadata("design:type", Array)
    ], GetAnnotationLayerInfo200ApplicationJsonFilters.prototype, "columnName", void 0);
    return GetAnnotationLayerInfo200ApplicationJsonFilters;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo200ApplicationJsonFilters };
var GetAnnotationLayerInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo200ApplicationJson, _super);
    function GetAnnotationLayerInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_columns" }),
        __metadata("design:type", Map)
    ], GetAnnotationLayerInfo200ApplicationJson.prototype, "addColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edit_columns" }),
        __metadata("design:type", Map)
    ], GetAnnotationLayerInfo200ApplicationJson.prototype, "editColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", GetAnnotationLayerInfo200ApplicationJsonFilters)
    ], GetAnnotationLayerInfo200ApplicationJson.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetAnnotationLayerInfo200ApplicationJson.prototype, "permissions", void 0);
    return GetAnnotationLayerInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo200ApplicationJson };
var GetAnnotationLayerInfo400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo400ApplicationJson, _super);
    function GetAnnotationLayerInfo400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo400ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerInfo400ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo400ApplicationJson };
var GetAnnotationLayerInfo401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo401ApplicationJson, _super);
    function GetAnnotationLayerInfo401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo401ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerInfo401ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo401ApplicationJson };
var GetAnnotationLayerInfo422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo422ApplicationJson, _super);
    function GetAnnotationLayerInfo422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo422ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerInfo422ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo422ApplicationJson };
var GetAnnotationLayerInfo500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfo500ApplicationJson, _super);
    function GetAnnotationLayerInfo500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfo500ApplicationJson.prototype, "message", void 0);
    return GetAnnotationLayerInfo500ApplicationJson;
}(SpeakeasyBase));
export { GetAnnotationLayerInfo500ApplicationJson };
var GetAnnotationLayerInfoRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfoRequest, _super);
    function GetAnnotationLayerInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfoQueryParams)
    ], GetAnnotationLayerInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfoSecurity)
    ], GetAnnotationLayerInfoRequest.prototype, "security", void 0);
    return GetAnnotationLayerInfoRequest;
}(SpeakeasyBase));
export { GetAnnotationLayerInfoRequest };
var GetAnnotationLayerInfoResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationLayerInfoResponse, _super);
    function GetAnnotationLayerInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAnnotationLayerInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfo200ApplicationJson)
    ], GetAnnotationLayerInfoResponse.prototype, "getAnnotationLayerInfo200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfo400ApplicationJson)
    ], GetAnnotationLayerInfoResponse.prototype, "getAnnotationLayerInfo400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfo401ApplicationJson)
    ], GetAnnotationLayerInfoResponse.prototype, "getAnnotationLayerInfo401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfo422ApplicationJson)
    ], GetAnnotationLayerInfoResponse.prototype, "getAnnotationLayerInfo422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAnnotationLayerInfo500ApplicationJson)
    ], GetAnnotationLayerInfoResponse.prototype, "getAnnotationLayerInfo500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAnnotationLayerInfoResponse.prototype, "statusCode", void 0);
    return GetAnnotationLayerInfoResponse;
}(SpeakeasyBase));
export { GetAnnotationLayerInfoResponse };
