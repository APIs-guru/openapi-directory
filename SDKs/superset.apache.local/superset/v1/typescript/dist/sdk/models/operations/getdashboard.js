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
var GetDashboardQueryParams = /** @class */ (function (_super) {
    __extends(GetDashboardQueryParams, _super);
    function GetDashboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", shared.GetListSchema)
    ], GetDashboardQueryParams.prototype, "q", void 0);
    return GetDashboardQueryParams;
}(SpeakeasyBase));
export { GetDashboardQueryParams };
var GetDashboardSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardSecurity, _super);
    function GetDashboardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardSecurity.prototype, "jwt", void 0);
    return GetDashboardSecurity;
}(SpeakeasyBase));
export { GetDashboardSecurity };
var GetDashboard200ApplicationJsonDescriptionColumns = /** @class */ (function (_super) {
    __extends(GetDashboard200ApplicationJsonDescriptionColumns, _super);
    function GetDashboard200ApplicationJsonDescriptionColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDashboard200ApplicationJsonDescriptionColumns.prototype, "columnName", void 0);
    return GetDashboard200ApplicationJsonDescriptionColumns;
}(SpeakeasyBase));
export { GetDashboard200ApplicationJsonDescriptionColumns };
var GetDashboard200ApplicationJsonLabelColumns = /** @class */ (function (_super) {
    __extends(GetDashboard200ApplicationJsonLabelColumns, _super);
    function GetDashboard200ApplicationJsonLabelColumns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_name" }),
        __metadata("design:type", String)
    ], GetDashboard200ApplicationJsonLabelColumns.prototype, "columnName", void 0);
    return GetDashboard200ApplicationJsonLabelColumns;
}(SpeakeasyBase));
export { GetDashboard200ApplicationJsonLabelColumns };
var GetDashboard200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboard200ApplicationJson, _super);
    function GetDashboard200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetDashboard200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_columns" }),
        __metadata("design:type", GetDashboard200ApplicationJsonDescriptionColumns)
    ], GetDashboard200ApplicationJson.prototype, "descriptionColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], GetDashboard200ApplicationJson.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_columns" }),
        __metadata("design:type", GetDashboard200ApplicationJsonLabelColumns)
    ], GetDashboard200ApplicationJson.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_columns" }),
        __metadata("design:type", Array)
    ], GetDashboard200ApplicationJson.prototype, "listColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_title" }),
        __metadata("design:type", String)
    ], GetDashboard200ApplicationJson.prototype, "listTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_columns" }),
        __metadata("design:type", Array)
    ], GetDashboard200ApplicationJson.prototype, "orderColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DashboardRestApiGetList }),
        __metadata("design:type", Array)
    ], GetDashboard200ApplicationJson.prototype, "result", void 0);
    return GetDashboard200ApplicationJson;
}(SpeakeasyBase));
export { GetDashboard200ApplicationJson };
var GetDashboard400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboard400ApplicationJson, _super);
    function GetDashboard400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboard400ApplicationJson.prototype, "message", void 0);
    return GetDashboard400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboard400ApplicationJson };
var GetDashboard401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboard401ApplicationJson, _super);
    function GetDashboard401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboard401ApplicationJson.prototype, "message", void 0);
    return GetDashboard401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboard401ApplicationJson };
var GetDashboard422ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboard422ApplicationJson, _super);
    function GetDashboard422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboard422ApplicationJson.prototype, "message", void 0);
    return GetDashboard422ApplicationJson;
}(SpeakeasyBase));
export { GetDashboard422ApplicationJson };
var GetDashboard500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboard500ApplicationJson, _super);
    function GetDashboard500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboard500ApplicationJson.prototype, "message", void 0);
    return GetDashboard500ApplicationJson;
}(SpeakeasyBase));
export { GetDashboard500ApplicationJson };
var GetDashboardRequest = /** @class */ (function (_super) {
    __extends(GetDashboardRequest, _super);
    function GetDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardQueryParams)
    ], GetDashboardRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardSecurity)
    ], GetDashboardRequest.prototype, "security", void 0);
    return GetDashboardRequest;
}(SpeakeasyBase));
export { GetDashboardRequest };
var GetDashboardResponse = /** @class */ (function (_super) {
    __extends(GetDashboardResponse, _super);
    function GetDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboard200ApplicationJson)
    ], GetDashboardResponse.prototype, "getDashboard200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboard400ApplicationJson)
    ], GetDashboardResponse.prototype, "getDashboard400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboard401ApplicationJson)
    ], GetDashboardResponse.prototype, "getDashboard401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboard422ApplicationJson)
    ], GetDashboardResponse.prototype, "getDashboard422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboard500ApplicationJson)
    ], GetDashboardResponse.prototype, "getDashboard500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardResponse.prototype, "statusCode", void 0);
    return GetDashboardResponse;
}(SpeakeasyBase));
export { GetDashboardResponse };
