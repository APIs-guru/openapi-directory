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
var UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams = /** @class */ (function (_super) {
    __extends(UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams, _super);
    function UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams.prototype, "startDate", void 0);
    return UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams;
}(SpeakeasyBase));
export { UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams };
var UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult, _super);
    function UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccelerationCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "accelerationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppId" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AverageSpeedKmh" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "averageSpeedKmh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AverageSpeedMileh" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "averageSpeedMileh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BreakingCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "breakingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyId" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorneringCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "corneringCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DayDrivingTime" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "dayDrivingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceToken" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "deviceToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DriverTripsCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "driverTripsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DrivingTime" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "drivingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxSpeedKmh" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "maxSpeedKmh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxSpeedMileh" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "maxSpeedMileh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MileageKm" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "mileageKm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MileageMile" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "mileageMile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NightDrivingTime" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "nightDrivingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherTripsCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "otherTripsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageDistanceKm" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageDistanceKm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageDistanceMile" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageDistanceMile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageDurationMin" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageDurationMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDistanceKm" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageOverSpeedDistanceKm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDistanceMile" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageOverSpeedDistanceMile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDurationMin" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "phoneUsageOverSpeedDurationMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RushHoursDrivingTime" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "rushHoursDrivingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalSpeedingKm" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "totalSpeedingKm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalSpeedingMile" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "totalSpeedingMile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TripsCount" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult.prototype, "tripsCount", void 0);
    return UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult;
}(SpeakeasyBase));
export { UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult };
var UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson, _super);
    function UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", Array)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result" }),
        __metadata("design:type", UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson.prototype, "title", void 0);
    return UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson;
}(SpeakeasyBase));
export { UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson };
var UserStatisticsAccumulatedValueV1StatisticsIndividualRequest = /** @class */ (function (_super) {
    __extends(UserStatisticsAccumulatedValueV1StatisticsIndividualRequest, _super);
    function UserStatisticsAccumulatedValueV1StatisticsIndividualRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualRequest.prototype, "queryParams", void 0);
    return UserStatisticsAccumulatedValueV1StatisticsIndividualRequest;
}(SpeakeasyBase));
export { UserStatisticsAccumulatedValueV1StatisticsIndividualRequest };
var UserStatisticsAccumulatedValueV1StatisticsIndividualResponse = /** @class */ (function (_super) {
    __extends(UserStatisticsAccumulatedValueV1StatisticsIndividualResponse, _super);
    function UserStatisticsAccumulatedValueV1StatisticsIndividualResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson)
    ], UserStatisticsAccumulatedValueV1StatisticsIndividualResponse.prototype, "userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject", void 0);
    return UserStatisticsAccumulatedValueV1StatisticsIndividualResponse;
}(SpeakeasyBase));
export { UserStatisticsAccumulatedValueV1StatisticsIndividualResponse };
