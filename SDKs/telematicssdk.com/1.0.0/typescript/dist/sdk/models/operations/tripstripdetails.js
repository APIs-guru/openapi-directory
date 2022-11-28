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
var TripsTripDetailsQueryParams = /** @class */ (function (_super) {
    __extends(TripsTripDetailsQueryParams, _super);
    function TripsTripDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackToken" }),
        __metadata("design:type", String)
    ], TripsTripDetailsQueryParams.prototype, "trackToken", void 0);
    return TripsTripDetailsQueryParams;
}(SpeakeasyBase));
export { TripsTripDetailsQueryParams };
var TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts, _super);
    function TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountryCode" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=District" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=House" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Street" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts.prototype, "street", void 0);
    return TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts };
var TripsTripDetails200ApplicationJsonResultTrackAddressStartParts = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJsonResultTrackAddressStartParts, _super);
    function TripsTripDetails200ApplicationJsonResultTrackAddressStartParts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountryCode" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=District" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=House" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "house", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalCode" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Street" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackAddressStartParts.prototype, "street", void 0);
    return TripsTripDetails200ApplicationJsonResultTrackAddressStartParts;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJsonResultTrackAddressStartParts };
var TripsTripDetails200ApplicationJsonResultTrackPoints = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJsonResultTrackPoints, _super);
    function TripsTripDetails200ApplicationJsonResultTrackPoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlertType" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "alertType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlertValue" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "alertValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cornering" }),
        __metadata("design:type", Boolean)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "cornering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Course" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "course", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lateral" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "lateral", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MidSpeed" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "midSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsage" }),
        __metadata("design:type", Boolean)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "phoneUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PointDate" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "pointDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Speed" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeedLimit" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "speedLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeedType" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "speedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMeters" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "totalMeters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Yaw" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrackPoints.prototype, "yaw", void 0);
    return TripsTripDetails200ApplicationJsonResultTrackPoints;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJsonResultTrackPoints };
var TripsTripDetails200ApplicationJsonResultTrack = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJsonResultTrack, _super);
    function TripsTripDetails200ApplicationJsonResultTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccelerationCount" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "accelerationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressEnd" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "addressEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressFinishParts" }),
        __metadata("design:type", TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "addressFinishParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressStart" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "addressStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressStartParts" }),
        __metadata("design:type", TripsTripDetails200ApplicationJsonResultTrackAddressStartParts)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "addressStartParts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeaconId" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "beaconId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CityFinish" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "cityFinish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CityStart" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "cityStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DecelerationCount" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "decelerationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Distance" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DrivingTips" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "drivingTips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcoScore" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ecoScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcoScoreBrakes" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ecoScoreBrakes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcoScoreDepreciation" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ecoScoreDepreciation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcoScoreFuel" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ecoScoreFuel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EcoScoreTyres" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ecoScoreTyres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HighOverSpeedMileage" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "highOverSpeedMileage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MidOverSpeedMileage" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "midOverSpeedMileage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginChanged" }),
        __metadata("design:type", Boolean)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "originChanged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsage" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "phoneUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Points", elemType: TripsTripDetails200ApplicationJsonResultTrackPoints }),
        __metadata("design:type", Array)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rating" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rating100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "rating100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingAcceleration" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingAcceleration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingAcceleration100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingAcceleration100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingBraking" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingBraking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingBraking100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingBraking100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingCornering" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingCornering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingCornering100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingCornering100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingPhoneDistraction100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingPhoneDistraction100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingPhoneUsage" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingPhoneUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingSpeeding" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingSpeeding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingSpeeding100" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingSpeeding100", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingTimeOfDay" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "ratingTimeOfDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShareType" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "shareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackOriginCode" }),
        __metadata("design:type", String)
    ], TripsTripDetails200ApplicationJsonResultTrack.prototype, "trackOriginCode", void 0);
    return TripsTripDetails200ApplicationJsonResultTrack;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJsonResultTrack };
var TripsTripDetails200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJsonResult, _super);
    function TripsTripDetails200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", Number)
    ], TripsTripDetails200ApplicationJsonResult.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Track" }),
        __metadata("design:type", TripsTripDetails200ApplicationJsonResultTrack)
    ], TripsTripDetails200ApplicationJsonResult.prototype, "track", void 0);
    return TripsTripDetails200ApplicationJsonResult;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJsonResult };
var TripsTripDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(TripsTripDetails200ApplicationJson, _super);
    function TripsTripDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result" }),
        __metadata("design:type", TripsTripDetails200ApplicationJsonResult)
    ], TripsTripDetails200ApplicationJson.prototype, "result", void 0);
    return TripsTripDetails200ApplicationJson;
}(SpeakeasyBase));
export { TripsTripDetails200ApplicationJson };
var TripsTripDetailsRequest = /** @class */ (function (_super) {
    __extends(TripsTripDetailsRequest, _super);
    function TripsTripDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TripsTripDetailsQueryParams)
    ], TripsTripDetailsRequest.prototype, "queryParams", void 0);
    return TripsTripDetailsRequest;
}(SpeakeasyBase));
export { TripsTripDetailsRequest };
var TripsTripDetailsResponse = /** @class */ (function (_super) {
    __extends(TripsTripDetailsResponse, _super);
    function TripsTripDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TripsTripDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TripsTripDetailsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TripsTripDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TripsTripDetails200ApplicationJson)
    ], TripsTripDetailsResponse.prototype, "tripsTripDetails200ApplicationJsonObject", void 0);
    return TripsTripDetailsResponse;
}(SpeakeasyBase));
export { TripsTripDetailsResponse };
