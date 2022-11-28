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
var GetDatasetPkPathParams = /** @class */ (function (_super) {
    __extends(GetDatasetPkPathParams, _super);
    function GetDatasetPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetDatasetPkPathParams.prototype, "pk", void 0);
    return GetDatasetPkPathParams;
}(SpeakeasyBase));
export { GetDatasetPkPathParams };
var GetDatasetPkQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetPkQueryParams, _super);
    function GetDatasetPkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetItemSchema)
    ], GetDatasetPkQueryParams.prototype, "q", void 0);
    return GetDatasetPkQueryParams;
}(SpeakeasyBase));
export { GetDatasetPkQueryParams };
var GetDatasetPkSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetPkSecurity, _super);
    function GetDatasetPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetPkSecurity.prototype, "jwt", void 0);
    return GetDatasetPkSecurity;
}(SpeakeasyBase));
export { GetDatasetPkSecurity };
var GetDatasetPk200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetDatasetPk200ApplicationJsonDescriptionColumns, _super);
    function GetDatasetPk200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatasetPk200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetDatasetPk200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetDatasetPk200ApplicationJsonDescriptionColumns };
var GetDatasetPk200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetDatasetPk200ApplicationJsonLabelColumns, _super);
    function GetDatasetPk200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDatasetPk200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetDatasetPk200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetDatasetPk200ApplicationJsonLabelColumns };
var GetDatasetPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk200ApplicationJson, _super);
    function GetDatasetPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetDatasetPk200ApplicationJsonDescriptionColumns)
    ], GetDatasetPk200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDatasetPk200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetDatasetPk200ApplicationJsonLabelColumns)
    ], GetDatasetPk200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatasetRestApiGet)
    ], GetDatasetPk200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_columns" }),
        __metadata("design:type", Array)
    ], GetDatasetPk200ApplicationJson.prototype, "showColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_title" }),
        __metadata("design:type", String)
    ], GetDatasetPk200ApplicationJson.prototype, "showTitle", void 0);
    return GetDatasetPk200ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk200ApplicationJson };
var GetDatasetPk400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk400ApplicationJson, _super);
    function GetDatasetPk400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetPk400ApplicationJson.prototype, "message", void 0);
    return GetDatasetPk400ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk400ApplicationJson };
var GetDatasetPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk401ApplicationJson, _super);
    function GetDatasetPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetPk401ApplicationJson.prototype, "message", void 0);
    return GetDatasetPk401ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk401ApplicationJson };
var GetDatasetPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk404ApplicationJson, _super);
    function GetDatasetPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetPk404ApplicationJson.prototype, "message", void 0);
    return GetDatasetPk404ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk404ApplicationJson };
var GetDatasetPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk422ApplicationJson, _super);
    function GetDatasetPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetPk422ApplicationJson.prototype, "message", void 0);
    return GetDatasetPk422ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk422ApplicationJson };
var GetDatasetPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDatasetPk500ApplicationJson, _super);
    function GetDatasetPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDatasetPk500ApplicationJson.prototype, "message", void 0);
    return GetDatasetPk500ApplicationJson;
}(SpeakeasyBase));
export { GetDatasetPk500ApplicationJson };
var GetDatasetPkRequest = /** @class */ (function (_super) {
    __extends(GetDatasetPkRequest, _super);
    function GetDatasetPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPkPathParams)
    ], GetDatasetPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPkQueryParams)
    ], GetDatasetPkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPkSecurity)
    ], GetDatasetPkRequest.prototype, "security", void 0);
    return GetDatasetPkRequest;
}(SpeakeasyBase));
export { GetDatasetPkRequest };
var GetDatasetPkResponse = /** @class */ (function (_super) {
    __extends(GetDatasetPkResponse, _super);
    function GetDatasetPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk200ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk400ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk401ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk404ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk422ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetPk500ApplicationJson)
    ], GetDatasetPkResponse.prototype, "getDatasetPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetPkResponse.prototype, "statusCode", void 0);
    return GetDatasetPkResponse;
}(SpeakeasyBase));
export { GetDatasetPkResponse };
