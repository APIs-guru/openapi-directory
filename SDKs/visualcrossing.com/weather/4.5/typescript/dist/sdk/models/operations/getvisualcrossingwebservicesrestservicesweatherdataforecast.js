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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAFORECAST_SERVERS = [
    "https://weather.visualcrossing.com",
];
var GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "aggregateHours", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "allowAsynch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=contentType" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locations" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "locations", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sendAsDatasource" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "sendAsDatasource", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "shortColumnNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitGroup" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams.prototype, "unitGroup", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams };
var GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest.prototype, "queryParams", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest };
var GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse.prototype, "statusCode", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse };
