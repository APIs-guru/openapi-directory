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
var StopPointGetByGeoPointQueryParams = /** @class */ (function (_super) {
    __extends(StopPointGetByGeoPointQueryParams, _super);
    function StopPointGetByGeoPointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" }),
        __metadata("design:type", Array)
    ], StopPointGetByGeoPointQueryParams.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lat" }),
        __metadata("design:type", Number)
    ], StopPointGetByGeoPointQueryParams.prototype, "locationLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location.lon" }),
        __metadata("design:type", Number)
    ], StopPointGetByGeoPointQueryParams.prototype, "locationLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modes" }),
        __metadata("design:type", Array)
    ], StopPointGetByGeoPointQueryParams.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], StopPointGetByGeoPointQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnLines" }),
        __metadata("design:type", Boolean)
    ], StopPointGetByGeoPointQueryParams.prototype, "returnLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stopTypes" }),
        __metadata("design:type", Array)
    ], StopPointGetByGeoPointQueryParams.prototype, "stopTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useStopPointHierarchy" }),
        __metadata("design:type", Boolean)
    ], StopPointGetByGeoPointQueryParams.prototype, "useStopPointHierarchy", void 0);
    return StopPointGetByGeoPointQueryParams;
}(SpeakeasyBase));
export { StopPointGetByGeoPointQueryParams };
var StopPointGetByGeoPointRequest = /** @class */ (function (_super) {
    __extends(StopPointGetByGeoPointRequest, _super);
    function StopPointGetByGeoPointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopPointGetByGeoPointQueryParams)
    ], StopPointGetByGeoPointRequest.prototype, "queryParams", void 0);
    return StopPointGetByGeoPointRequest;
}(SpeakeasyBase));
export { StopPointGetByGeoPointRequest };
var StopPointGetByGeoPointResponse = /** @class */ (function (_super) {
    __extends(StopPointGetByGeoPointResponse, _super);
    function StopPointGetByGeoPointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopPointGetByGeoPointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopPointGetByGeoPointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopPointGetByGeoPointResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TflApiPresentationEntitiesStopPointsResponse)
    ], StopPointGetByGeoPointResponse.prototype, "tflApiPresentationEntitiesStopPointsResponse", void 0);
    return StopPointGetByGeoPointResponse;
}(SpeakeasyBase));
export { StopPointGetByGeoPointResponse };
