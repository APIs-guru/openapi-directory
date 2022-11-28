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
var GetReportQueryParams = /** @class */ (function (_super) {
    __extends(GetReportQueryParams, _super);
    function GetReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetReportQueryParams.prototype, "q", void 0);
    return GetReportQueryParams;
}(SpeakeasyBase));
export { GetReportQueryParams };
var GetReportSecurity = /** @class */ (function (_super) {
    __extends(GetReportSecurity, _super);
    function GetReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportSecurity.prototype, "jwt", void 0);
    return GetReportSecurity;
}(SpeakeasyBase));
export { GetReportSecurity };
var GetReport200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetReport200ApplicationJsonDescriptionColumns, _super);
    function GetReport200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetReport200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetReport200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetReport200ApplicationJsonDescriptionColumns };
var GetReport200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetReport200ApplicationJsonLabelColumns, _super);
    function GetReport200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetReport200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetReport200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetReport200ApplicationJsonLabelColumns };
var GetReport200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReport200ApplicationJson, _super);
    function GetReport200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetReport200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetReport200ApplicationJsonDescriptionColumns)
    ], GetReport200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetReport200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetReport200ApplicationJsonLabelColumns)
    ], GetReport200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetReport200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetReport200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetReport200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ReportScheduleRestApiGetList }),
        __metadata("design:type", Array)
    ], GetReport200ApplicationJson.prototype, "result", void 0);
    return GetReport200ApplicationJson;
}(SpeakeasyBase));
export { GetReport200ApplicationJson };
var GetReport400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReport400ApplicationJson, _super);
    function GetReport400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReport400ApplicationJson.prototype, "message", void 0);
    return GetReport400ApplicationJson;
}(SpeakeasyBase));
export { GetReport400ApplicationJson };
var GetReport401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReport401ApplicationJson, _super);
    function GetReport401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReport401ApplicationJson.prototype, "message", void 0);
    return GetReport401ApplicationJson;
}(SpeakeasyBase));
export { GetReport401ApplicationJson };
var GetReport422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReport422ApplicationJson, _super);
    function GetReport422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReport422ApplicationJson.prototype, "message", void 0);
    return GetReport422ApplicationJson;
}(SpeakeasyBase));
export { GetReport422ApplicationJson };
var GetReport500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReport500ApplicationJson, _super);
    function GetReport500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReport500ApplicationJson.prototype, "message", void 0);
    return GetReport500ApplicationJson;
}(SpeakeasyBase));
export { GetReport500ApplicationJson };
var GetReportRequest = /** @class */ (function (_super) {
    __extends(GetReportRequest, _super);
    function GetReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportQueryParams)
    ], GetReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportSecurity)
    ], GetReportRequest.prototype, "security", void 0);
    return GetReportRequest;
}(SpeakeasyBase));
export { GetReportRequest };
var GetReportResponse = /** @class */ (function (_super) {
    __extends(GetReportResponse, _super);
    function GetReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReport200ApplicationJson)
    ], GetReportResponse.prototype, "getReport200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReport400ApplicationJson)
    ], GetReportResponse.prototype, "getReport400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReport401ApplicationJson)
    ], GetReportResponse.prototype, "getReport401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReport422ApplicationJson)
    ], GetReportResponse.prototype, "getReport422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReport500ApplicationJson)
    ], GetReportResponse.prototype, "getReport500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportResponse.prototype, "statusCode", void 0);
    return GetReportResponse;
}(SpeakeasyBase));
export { GetReportResponse };
