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
var GetLogPkPathParams = /** @class */ (function (_super) {
    __extends(GetLogPkPathParams, _super);
    function GetLogPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetLogPkPathParams.prototype, "pk", void 0);
    return GetLogPkPathParams;
}(SpeakeasyBase));
export { GetLogPkPathParams };
var GetLogPkQueryParams = /** @class */ (function (_super) {
    __extends(GetLogPkQueryParams, _super);
    function GetLogPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetLogPkQueryParams.prototype, "q", void 0);
    return GetLogPkQueryParams;
}(SpeakeasyBase));
export { GetLogPkQueryParams };
var GetLogPkSecurity = /** @class */ (function (_super) {
    __extends(GetLogPkSecurity, _super);
    function GetLogPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetLogPkSecurity.prototype, "jwt", void 0);
    return GetLogPkSecurity;
}(SpeakeasyBase));
export { GetLogPkSecurity };
var GetLogPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetLogPk200ApplicationJsonDescriptionColumns, _super);
    function GetLogPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetLogPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetLogPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetLogPk200ApplicationJsonDescriptionColumns };
var GetLogPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetLogPk200ApplicationJsonLabelColumns, _super);
    function GetLogPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetLogPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetLogPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetLogPk200ApplicationJsonLabelColumns };
var GetLogPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk200ApplicationJson, _super);
    function GetLogPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetLogPk200ApplicationJsonDescriptionColumns)
    ], GetLogPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetLogPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetLogPk200ApplicationJsonLabelColumns)
    ], GetLogPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.LogRestApiGet)
    ], GetLogPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetLogPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetLogPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetLogPk200ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk200ApplicationJson };
var GetLogPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk400ApplicationJson, _super);
    function GetLogPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogPk400ApplicationJson.prototype, "message", void 0);
    return GetLogPk400ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk400ApplicationJson };
var GetLogPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk401ApplicationJson, _super);
    function GetLogPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogPk401ApplicationJson.prototype, "message", void 0);
    return GetLogPk401ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk401ApplicationJson };
var GetLogPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk404ApplicationJson, _super);
    function GetLogPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogPk404ApplicationJson.prototype, "message", void 0);
    return GetLogPk404ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk404ApplicationJson };
var GetLogPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk422ApplicationJson, _super);
    function GetLogPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogPk422ApplicationJson.prototype, "message", void 0);
    return GetLogPk422ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk422ApplicationJson };
var GetLogPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLogPk500ApplicationJson, _super);
    function GetLogPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLogPk500ApplicationJson.prototype, "message", void 0);
    return GetLogPk500ApplicationJson;
}(SpeakeasyBase));
export { GetLogPk500ApplicationJson };
var GetLogPkRequest = /** @class */ (function (_super) {
    __extends(GetLogPkRequest, _super);
    function GetLogPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPkPathParams)
    ], GetLogPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPkQueryParams)
    ], GetLogPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPkSecurity)
    ], GetLogPkRequest.prototype, "security", void 0);
    return GetLogPkRequest;
}(SpeakeasyBase));
export { GetLogPkRequest };
var GetLogPkResponse = /** @class */ (function (_super) {
    __extends(GetLogPkResponse, _super);
    function GetLogPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLogPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk200ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk400ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk401ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk404ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk422ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLogPk500ApplicationJson)
    ], GetLogPkResponse.prototype, "getLogPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLogPkResponse.prototype, "statusCode", void 0);
    return GetLogPkResponse;
}(SpeakeasyBase));
export { GetLogPkResponse };
