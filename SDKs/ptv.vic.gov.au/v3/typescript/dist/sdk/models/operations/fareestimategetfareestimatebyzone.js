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
var FareEstimateGetFareEstimateByZonePathParams = /** @class */ (function (_super) {
    __extends(FareEstimateGetFareEstimateByZonePathParams, _super);
    function FareEstimateGetFareEstimateByZonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxZone" }),
        __metadata("design:type", Number)
    ], FareEstimateGetFareEstimateByZonePathParams.prototype, "maxZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minZone" }),
        __metadata("design:type", Number)
    ], FareEstimateGetFareEstimateByZonePathParams.prototype, "minZone", void 0);
    return FareEstimateGetFareEstimateByZonePathParams;
}(SpeakeasyBase));
export { FareEstimateGetFareEstimateByZonePathParams };
var FareEstimateGetFareEstimateByZoneQueryParams = /** @class */ (function (_super) {
    __extends(FareEstimateGetFareEstimateByZoneQueryParams, _super);
    function FareEstimateGetFareEstimateByZoneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_journey_in_free_tram_zone" }),
        __metadata("design:type", Boolean)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "isJourneyInFreeTramZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journey_touch_off_utc" }),
        __metadata("design:type", Date)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "journeyTouchOffUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=journey_touch_on_utc" }),
        __metadata("design:type", Date)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "journeyTouchOnUtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelled_route_types" }),
        __metadata("design:type", Array)
    ], FareEstimateGetFareEstimateByZoneQueryParams.prototype, "travelledRouteTypes", void 0);
    return FareEstimateGetFareEstimateByZoneQueryParams;
}(SpeakeasyBase));
export { FareEstimateGetFareEstimateByZoneQueryParams };
var FareEstimateGetFareEstimateByZoneRequest = /** @class */ (function (_super) {
    __extends(FareEstimateGetFareEstimateByZoneRequest, _super);
    function FareEstimateGetFareEstimateByZoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FareEstimateGetFareEstimateByZonePathParams)
    ], FareEstimateGetFareEstimateByZoneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FareEstimateGetFareEstimateByZoneQueryParams)
    ], FareEstimateGetFareEstimateByZoneRequest.prototype, "queryParams", void 0);
    return FareEstimateGetFareEstimateByZoneRequest;
}(SpeakeasyBase));
export { FareEstimateGetFareEstimateByZoneRequest };
var FareEstimateGetFareEstimateByZoneResponse = /** @class */ (function (_super) {
    __extends(FareEstimateGetFareEstimateByZoneResponse, _super);
    function FareEstimateGetFareEstimateByZoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], FareEstimateGetFareEstimateByZoneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FareEstimateGetFareEstimateByZoneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FareEstimateGetFareEstimateByZoneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], FareEstimateGetFareEstimateByZoneResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FareEstimateGetFareEstimateByZoneResponse.prototype, "v3FareEstimateResponse", void 0);
    return FareEstimateGetFareEstimateByZoneResponse;
}(SpeakeasyBase));
export { FareEstimateGetFareEstimateByZoneResponse };
