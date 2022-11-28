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
var GetChartPkDataPathParams = /** @class */ (function (_super) {
    __extends(GetChartPkDataPathParams, _super);
    function GetChartPkDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], GetChartPkDataPathParams.prototype, "pk", void 0);
    return GetChartPkDataPathParams;
}(SpeakeasyBase));
export { GetChartPkDataPathParams };
var GetChartPkDataQueryParams = /** @class */ (function (_super) {
    __extends(GetChartPkDataQueryParams, _super);
    function GetChartPkDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetChartPkDataQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetChartPkDataQueryParams.prototype, "type", void 0);
    return GetChartPkDataQueryParams;
}(SpeakeasyBase));
export { GetChartPkDataQueryParams };
var GetChartPkDataSecurity = /** @class */ (function (_super) {
    __extends(GetChartPkDataSecurity, _super);
    function GetChartPkDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetChartPkDataSecurity.prototype, "jwt", void 0);
    return GetChartPkDataSecurity;
}(SpeakeasyBase));
export { GetChartPkDataSecurity };
var GetChartPkData400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkData400ApplicationJson, _super);
    function GetChartPkData400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkData400ApplicationJson.prototype, "message", void 0);
    return GetChartPkData400ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkData400ApplicationJson };
var GetChartPkData401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkData401ApplicationJson, _super);
    function GetChartPkData401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkData401ApplicationJson.prototype, "message", void 0);
    return GetChartPkData401ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkData401ApplicationJson };
var GetChartPkData500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChartPkData500ApplicationJson, _super);
    function GetChartPkData500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChartPkData500ApplicationJson.prototype, "message", void 0);
    return GetChartPkData500ApplicationJson;
}(SpeakeasyBase));
export { GetChartPkData500ApplicationJson };
var GetChartPkDataRequest = /** @class */ (function (_super) {
    __extends(GetChartPkDataRequest, _super);
    function GetChartPkDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkDataPathParams)
    ], GetChartPkDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkDataQueryParams)
    ], GetChartPkDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkDataSecurity)
    ], GetChartPkDataRequest.prototype, "security", void 0);
    return GetChartPkDataRequest;
}(SpeakeasyBase));
export { GetChartPkDataRequest };
var GetChartPkDataResponse = /** @class */ (function (_super) {
    __extends(GetChartPkDataResponse, _super);
    function GetChartPkDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartDataAsyncResponseSchema)
    ], GetChartPkDataResponse.prototype, "chartDataAsyncResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChartDataResponseSchema)
    ], GetChartPkDataResponse.prototype, "chartDataResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetChartPkDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkData400ApplicationJson)
    ], GetChartPkDataResponse.prototype, "getChartPkData400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkData401ApplicationJson)
    ], GetChartPkDataResponse.prototype, "getChartPkData401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetChartPkData500ApplicationJson)
    ], GetChartPkDataResponse.prototype, "getChartPkData500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetChartPkDataResponse.prototype, "statusCode", void 0);
    return GetChartPkDataResponse;
}(SpeakeasyBase));
export { GetChartPkDataResponse };
