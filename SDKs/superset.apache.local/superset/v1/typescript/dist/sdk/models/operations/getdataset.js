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
var GetDatasetQueryParams = /** @class */ (function (_super) {
    __extends(GetDatasetQueryParams, _super);
    function GetDatasetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetDatasetQueryParams.prototype, "q", void 0);
    return GetDatasetQueryParams;
}(SpeakeasyBase));
export { GetDatasetQueryParams };
var GetDatasetSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetSecurity, _super);
    function GetDatasetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDatasetSecurity.prototype, "jwt", void 0);
    return GetDatasetSecurity;
}(SpeakeasyBase));
export { GetDatasetSecurity };
var GetDataset200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetDataset200ApplicationJsonDescriptionColumns, _super);
    function GetDataset200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDataset200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetDataset200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetDataset200ApplicationJsonDescriptionColumns };
var GetDataset200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetDataset200ApplicationJsonLabelColumns, _super);
    function GetDataset200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDataset200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetDataset200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetDataset200ApplicationJsonLabelColumns };
var GetDataset200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataset200ApplicationJson, _super);
    function GetDataset200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetDataset200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetDataset200ApplicationJsonDescriptionColumns)
    ], GetDataset200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetDataset200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetDataset200ApplicationJsonLabelColumns)
    ], GetDataset200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetDataset200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetDataset200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetDataset200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DatasetRestApiGetList }),
        __metadata("design:type", Array)
    ], GetDataset200ApplicationJson.prototype, "result", void 0);
    return GetDataset200ApplicationJson;
}(SpeakeasyBase));
export { GetDataset200ApplicationJson };
var GetDataset400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataset400ApplicationJson, _super);
    function GetDataset400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDataset400ApplicationJson.prototype, "message", void 0);
    return GetDataset400ApplicationJson;
}(SpeakeasyBase));
export { GetDataset400ApplicationJson };
var GetDataset401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataset401ApplicationJson, _super);
    function GetDataset401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDataset401ApplicationJson.prototype, "message", void 0);
    return GetDataset401ApplicationJson;
}(SpeakeasyBase));
export { GetDataset401ApplicationJson };
var GetDataset422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataset422ApplicationJson, _super);
    function GetDataset422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDataset422ApplicationJson.prototype, "message", void 0);
    return GetDataset422ApplicationJson;
}(SpeakeasyBase));
export { GetDataset422ApplicationJson };
var GetDataset500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDataset500ApplicationJson, _super);
    function GetDataset500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDataset500ApplicationJson.prototype, "message", void 0);
    return GetDataset500ApplicationJson;
}(SpeakeasyBase));
export { GetDataset500ApplicationJson };
var GetDatasetRequest = /** @class */ (function (_super) {
    __extends(GetDatasetRequest, _super);
    function GetDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetQueryParams)
    ], GetDatasetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDatasetSecurity)
    ], GetDatasetRequest.prototype, "security", void 0);
    return GetDatasetRequest;
}(SpeakeasyBase));
export { GetDatasetRequest };
var GetDatasetResponse = /** @class */ (function (_super) {
    __extends(GetDatasetResponse, _super);
    function GetDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataset200ApplicationJson)
    ], GetDatasetResponse.prototype, "getDataset200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataset400ApplicationJson)
    ], GetDatasetResponse.prototype, "getDataset400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataset401ApplicationJson)
    ], GetDatasetResponse.prototype, "getDataset401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataset422ApplicationJson)
    ], GetDatasetResponse.prototype, "getDataset422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataset500ApplicationJson)
    ], GetDatasetResponse.prototype, "getDataset500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDatasetResponse.prototype, "statusCode", void 0);
    return GetDatasetResponse;
}(SpeakeasyBase));
export { GetDatasetResponse };
