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
var GetDatabasePkPathParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkPathParams, _super);
    function GetDatabasePkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatabasePkPathParams.prototype, "pk", void 0);
    return GetDatabasePkPathParams;
}(SpeakeasyBase));
export { GetDatabasePkPathParams };
var GetDatabasePkQueryParams = /** @class */ (function (_super) {
    __extends(GetDatabasePkQueryParams, _super);
    function GetDatabasePkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetDatabasePkQueryParams.prototype, "q", void 0);
    return GetDatabasePkQueryParams;
}(SpeakeasyBase));
export { GetDatabasePkQueryParams };
var GetDatabasePkSecurity = /** @class */ (function (_super) {
    __extends(GetDatabasePkSecurity, _super);
    function GetDatabasePkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatabasePkSecurity.prototype, "jwt", void 0);
    return GetDatabasePkSecurity;
}(SpeakeasyBase));
export { GetDatabasePkSecurity };
var GetDatabasePk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetDatabasePk200ApplicationJsonDescriptionColumns, _super);
    function GetDatabasePk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatabasePk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetDatabasePk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetDatabasePk200ApplicationJsonDescriptionColumns };
var GetDatabasePk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetDatabasePk200ApplicationJsonLabelColumns, _super);
    function GetDatabasePk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatabasePk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetDatabasePk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetDatabasePk200ApplicationJsonLabelColumns };
var GetDatabasePk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk200ApplicationJson, _super);
    function GetDatabasePk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetDatabasePk200ApplicationJsonDescriptionColumns)
    ], GetDatabasePk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDatabasePk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetDatabasePk200ApplicationJsonLabelColumns)
    ], GetDatabasePk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatabaseRestApiGet)
    ], GetDatabasePk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetDatabasePk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetDatabasePk200ApplicationJson.prototype, "showTitle", void 0);
    return GetDatabasePk200ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk200ApplicationJson };
var GetDatabasePk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk400ApplicationJson, _super);
    function GetDatabasePk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePk400ApplicationJson.prototype, "message", void 0);
    return GetDatabasePk400ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk400ApplicationJson };
var GetDatabasePk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk401ApplicationJson, _super);
    function GetDatabasePk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePk401ApplicationJson.prototype, "message", void 0);
    return GetDatabasePk401ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk401ApplicationJson };
var GetDatabasePk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk404ApplicationJson, _super);
    function GetDatabasePk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePk404ApplicationJson.prototype, "message", void 0);
    return GetDatabasePk404ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk404ApplicationJson };
var GetDatabasePk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk422ApplicationJson, _super);
    function GetDatabasePk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePk422ApplicationJson.prototype, "message", void 0);
    return GetDatabasePk422ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk422ApplicationJson };
var GetDatabasePk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatabasePk500ApplicationJson, _super);
    function GetDatabasePk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatabasePk500ApplicationJson.prototype, "message", void 0);
    return GetDatabasePk500ApplicationJson;
}(SpeakeasyBase));
export { GetDatabasePk500ApplicationJson };
var GetDatabasePkRequest = /** @class */ (function (_super) {
    __extends(GetDatabasePkRequest, _super);
    function GetDatabasePkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkPathParams)
    ], GetDatabasePkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkQueryParams)
    ], GetDatabasePkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePkSecurity)
    ], GetDatabasePkRequest.prototype, "security", void 0);
    return GetDatabasePkRequest;
}(SpeakeasyBase));
export { GetDatabasePkRequest };
var GetDatabasePkResponse = /** @class */ (function (_super) {
    __extends(GetDatabasePkResponse, _super);
    function GetDatabasePkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatabasePkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk200ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk400ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk401ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk404ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk422ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatabasePk500ApplicationJson)
    ], GetDatabasePkResponse.prototype, "getDatabasePk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatabasePkResponse.prototype, "statusCode", void 0);
    return GetDatabasePkResponse;
}(SpeakeasyBase));
export { GetDatabasePkResponse };
