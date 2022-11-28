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
var GetDashboardIdOrSlugChartsPathParams = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugChartsPathParams, _super);
    function GetDashboardIdOrSlugChartsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugChartsPathParams.prototype, "idOrSlug", void 0);
    return GetDashboardIdOrSlugChartsPathParams;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugChartsPathParams };
var GetDashboardIdOrSlugChartsSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugChartsSecurity, _super);
    function GetDashboardIdOrSlugChartsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardIdOrSlugChartsSecurity.prototype, "jwt", void 0);
    return GetDashboardIdOrSlugChartsSecurity;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugChartsSecurity };
var GetDashboardIdOrSlugCharts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugCharts200ApplicationJson, _super);
    function GetDashboardIdOrSlugCharts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ChartEntityResponseSchema }),
        __metadata("design:type", Array)
    ], GetDashboardIdOrSlugCharts200ApplicationJson.prototype, "result", void 0);
    return GetDashboardIdOrSlugCharts200ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugCharts200ApplicationJson };
var GetDashboardIdOrSlugCharts400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugCharts400ApplicationJson, _super);
    function GetDashboardIdOrSlugCharts400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugCharts400ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugCharts400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugCharts400ApplicationJson };
var GetDashboardIdOrSlugCharts401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugCharts401ApplicationJson, _super);
    function GetDashboardIdOrSlugCharts401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugCharts401ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugCharts401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugCharts401ApplicationJson };
var GetDashboardIdOrSlugCharts404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugCharts404ApplicationJson, _super);
    function GetDashboardIdOrSlugCharts404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugCharts404ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugCharts404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugCharts404ApplicationJson };
var GetDashboardIdOrSlugChartsRequest = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugChartsRequest, _super);
    function GetDashboardIdOrSlugChartsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugChartsPathParams)
    ], GetDashboardIdOrSlugChartsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugChartsSecurity)
    ], GetDashboardIdOrSlugChartsRequest.prototype, "security", void 0);
    return GetDashboardIdOrSlugChartsRequest;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugChartsRequest };
var GetDashboardIdOrSlugChartsResponse = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugChartsResponse, _super);
    function GetDashboardIdOrSlugChartsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugCharts200ApplicationJson)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "getDashboardIdOrSlugCharts200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugCharts400ApplicationJson)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "getDashboardIdOrSlugCharts400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugCharts401ApplicationJson)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "getDashboardIdOrSlugCharts401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugCharts404ApplicationJson)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "getDashboardIdOrSlugCharts404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardIdOrSlugChartsResponse.prototype, "statusCode", void 0);
    return GetDashboardIdOrSlugChartsResponse;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugChartsResponse };
