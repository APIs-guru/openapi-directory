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
var PlaceGetByGeoQueryParams = /** @class */ (function (_super) {
    __extends(PlaceGetByGeoQueryParams, _super);
    function PlaceGetByGeoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeOnly" }),
        __metadata("design:type", Boolean)
    ], PlaceGetByGeoQueryParams.prototype, "activeOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" }),
        __metadata("design:type", Array)
    ], PlaceGetByGeoQueryParams.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeChildren" }),
        __metadata("design:type", Boolean)
    ], PlaceGetByGeoQueryParams.prototype, "includeChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPlacesToReturn" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "numberOfPlacesToReturn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lat" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.lon" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLat" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoNeLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.neLon" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoNeLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLat" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoSwLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placeGeo.swLon" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "placeGeoSwLon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], PlaceGetByGeoQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], PlaceGetByGeoQueryParams.prototype, "type", void 0);
    return PlaceGetByGeoQueryParams;
}(SpeakeasyBase));
export { PlaceGetByGeoQueryParams };
var PlaceGetByGeoRequest = /** @class */ (function (_super) {
    __extends(PlaceGetByGeoRequest, _super);
    function PlaceGetByGeoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaceGetByGeoQueryParams)
    ], PlaceGetByGeoRequest.prototype, "queryParams", void 0);
    return PlaceGetByGeoRequest;
}(SpeakeasyBase));
export { PlaceGetByGeoRequest };
var PlaceGetByGeoResponse = /** @class */ (function (_super) {
    __extends(PlaceGetByGeoResponse, _super);
    function PlaceGetByGeoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PlaceGetByGeoResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaceGetByGeoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaceGetByGeoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint }),
        __metadata("design:type", Array)
    ], PlaceGetByGeoResponse.prototype, "tflApiPresentationEntitiesStopPoints", void 0);
    return PlaceGetByGeoResponse;
}(SpeakeasyBase));
export { PlaceGetByGeoResponse };
