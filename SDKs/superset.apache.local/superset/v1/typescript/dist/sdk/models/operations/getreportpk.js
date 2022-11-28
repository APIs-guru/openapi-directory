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
var GetReportPkPathParams = /** @class */ (function (_super) {
    __extends(GetReportPkPathParams, _super);
    function GetReportPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetReportPkPathParams.prototype, "pk", void 0);
    return GetReportPkPathParams;
}(SpeakeasyBase));
export { GetReportPkPathParams };
var GetReportPkQueryParams = /** @class */ (function (_super) {
    __extends(GetReportPkQueryParams, _super);
    function GetReportPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetReportPkQueryParams.prototype, "q", void 0);
    return GetReportPkQueryParams;
}(SpeakeasyBase));
export { GetReportPkQueryParams };
var GetReportPkSecurity = /** @class */ (function (_super) {
    __extends(GetReportPkSecurity, _super);
    function GetReportPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetReportPkSecurity.prototype, "jwt", void 0);
    return GetReportPkSecurity;
}(SpeakeasyBase));
export { GetReportPkSecurity };
var GetReportPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetReportPk200ApplicationJsonDescriptionColumns, _super);
    function GetReportPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetReportPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetReportPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetReportPk200ApplicationJsonDescriptionColumns };
var GetReportPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetReportPk200ApplicationJsonLabelColumns, _super);
    function GetReportPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetReportPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetReportPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetReportPk200ApplicationJsonLabelColumns };
var GetReportPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk200ApplicationJson, _super);
    function GetReportPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetReportPk200ApplicationJsonDescriptionColumns)
    ], GetReportPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetReportPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetReportPk200ApplicationJsonLabelColumns)
    ], GetReportPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.ReportScheduleRestApiGet)
    ], GetReportPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetReportPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetReportPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetReportPk200ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk200ApplicationJson };
var GetReportPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk400ApplicationJson, _super);
    function GetReportPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPk400ApplicationJson.prototype, "message", void 0);
    return GetReportPk400ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk400ApplicationJson };
var GetReportPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk401ApplicationJson, _super);
    function GetReportPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPk401ApplicationJson.prototype, "message", void 0);
    return GetReportPk401ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk401ApplicationJson };
var GetReportPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk404ApplicationJson, _super);
    function GetReportPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPk404ApplicationJson.prototype, "message", void 0);
    return GetReportPk404ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk404ApplicationJson };
var GetReportPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk422ApplicationJson, _super);
    function GetReportPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPk422ApplicationJson.prototype, "message", void 0);
    return GetReportPk422ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk422ApplicationJson };
var GetReportPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportPk500ApplicationJson, _super);
    function GetReportPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetReportPk500ApplicationJson.prototype, "message", void 0);
    return GetReportPk500ApplicationJson;
}(SpeakeasyBase));
export { GetReportPk500ApplicationJson };
var GetReportPkRequest = /** @class */ (function (_super) {
    __extends(GetReportPkRequest, _super);
    function GetReportPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkPathParams)
    ], GetReportPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkQueryParams)
    ], GetReportPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPkSecurity)
    ], GetReportPkRequest.prototype, "security", void 0);
    return GetReportPkRequest;
}(SpeakeasyBase));
export { GetReportPkRequest };
var GetReportPkResponse = /** @class */ (function (_super) {
    __extends(GetReportPkResponse, _super);
    function GetReportPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk200ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk400ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk401ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk404ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk422ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportPk500ApplicationJson)
    ], GetReportPkResponse.prototype, "getReportPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportPkResponse.prototype, "statusCode", void 0);
    return GetReportPkResponse;
}(SpeakeasyBase));
export { GetReportPkResponse };
