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
var GetLogQueryParams = /** @class */ (function (_super) {
    __extends(GetLogQueryParams, _super);
    function GetLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetLogQueryParams.prototype, "q", void 0);
    return GetLogQueryParams;
}(SpeakeasyBase));
export { GetLogQueryParams };
var GetLogSecurity = /** @class */ (function (_super) {
    __extends(GetLogSecurity, _super);
    function GetLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetLogSecurity.prototype, "jwt", void 0);
    return GetLogSecurity;
}(SpeakeasyBase));
export { GetLogSecurity };
var GetLog200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetLog200ApplicationJsonDescriptionColumns, _super);
    function GetLog200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetLog200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetLog200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetLog200ApplicationJsonDescriptionColumns };
var GetLog200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetLog200ApplicationJsonLabelColumns, _super);
    function GetLog200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetLog200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetLog200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetLog200ApplicationJsonLabelColumns };
var GetLog200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLog200ApplicationJson, _super);
    function GetLog200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetLog200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetLog200ApplicationJsonDescriptionColumns)
    ], GetLog200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetLog200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetLog200ApplicationJsonLabelColumns)
    ], GetLog200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetLog200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetLog200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetLog200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.LogRestApiGetList }),
        __metadata("design:type", Array)
    ], GetLog200ApplicationJson.prototype, "result", void 0);
    return GetLog200ApplicationJson;
}(SpeakeasyBase));
export { GetLog200ApplicationJson };
var GetLog400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLog400ApplicationJson, _super);
    function GetLog400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLog400ApplicationJson.prototype, "message", void 0);
    return GetLog400ApplicationJson;
}(SpeakeasyBase));
export { GetLog400ApplicationJson };
var GetLog401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLog401ApplicationJson, _super);
    function GetLog401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLog401ApplicationJson.prototype, "message", void 0);
    return GetLog401ApplicationJson;
}(SpeakeasyBase));
export { GetLog401ApplicationJson };
var GetLog422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLog422ApplicationJson, _super);
    function GetLog422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLog422ApplicationJson.prototype, "message", void 0);
    return GetLog422ApplicationJson;
}(SpeakeasyBase));
export { GetLog422ApplicationJson };
var GetLog500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLog500ApplicationJson, _super);
    function GetLog500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLog500ApplicationJson.prototype, "message", void 0);
    return GetLog500ApplicationJson;
}(SpeakeasyBase));
export { GetLog500ApplicationJson };
var GetLogRequest = /** @class */ (function (_super) {
    __extends(GetLogRequest, _super);
    function GetLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogQueryParams)
    ], GetLogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogSecurity)
    ], GetLogRequest.prototype, "security", void 0);
    return GetLogRequest;
}(SpeakeasyBase));
export { GetLogRequest };
var GetLogResponse = /** @class */ (function (_super) {
    __extends(GetLogResponse, _super);
    function GetLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLog200ApplicationJson)
    ], GetLogResponse.prototype, "getLog200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLog400ApplicationJson)
    ], GetLogResponse.prototype, "getLog400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLog401ApplicationJson)
    ], GetLogResponse.prototype, "getLog401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLog422ApplicationJson)
    ], GetLogResponse.prototype, "getLog422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLog500ApplicationJson)
    ], GetLogResponse.prototype, "getLog500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLogResponse.prototype, "statusCode", void 0);
    return GetLogResponse;
}(SpeakeasyBase));
export { GetLogResponse };
