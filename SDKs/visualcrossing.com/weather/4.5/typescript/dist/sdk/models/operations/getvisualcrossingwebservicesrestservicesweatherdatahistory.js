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
export var GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAHISTORY_SERVERS = [
    "https://weather.visualcrossing.com",
];
var GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "aggregateHours", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "allowAsynch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=collectStationContributions" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "collectStationContributions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=contentType" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDateTime" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "endDateTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeNormals" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "includeNormals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locations" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "locations", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxStations" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "maxStations", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" }),
        __metadata("design:type", Boolean)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "shortColumnNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDateTime" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "startDateTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitGroup" }),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams.prototype, "unitGroup", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams };
var GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest.prototype, "queryParams", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest };
var GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse = /** @class */ (function (_super) {
    __extends(GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse, _super);
    function GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse.prototype, "statusCode", void 0);
    return GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse;
}(SpeakeasyBase));
export { GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse };
