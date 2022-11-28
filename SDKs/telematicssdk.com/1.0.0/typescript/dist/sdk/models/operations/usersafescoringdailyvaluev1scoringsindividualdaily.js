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
var UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams = /** @class */ (function (_super) {
    __extends(UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams, _super);
    function UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams.prototype, "tag", void 0);
    return UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams;
}(SpeakeasyBase));
export { UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams };
var UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult, _super);
    function UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccelerationScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "accelerationScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppId" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BrakingScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "brakingScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalcDate" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "calcDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyId" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorneringScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "corneringScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceToken" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "deviceToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DistractedScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "distractedScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverallScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "overallScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeedingScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult.prototype, "speedingScore", void 0);
    return UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult;
}(SpeakeasyBase));
export { UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult };
var UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson, _super);
    function UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", Array)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result", elemType: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult }),
        __metadata("design:type", Array)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson.prototype, "title", void 0);
    return UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson;
}(SpeakeasyBase));
export { UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson };
var UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest = /** @class */ (function (_super) {
    __extends(UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest, _super);
    function UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest.prototype, "queryParams", void 0);
    return UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest;
}(SpeakeasyBase));
export { UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest };
var UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse = /** @class */ (function (_super) {
    __extends(UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse, _super);
    function UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson)
    ], UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse.prototype, "userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonObject", void 0);
    return UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse;
}(SpeakeasyBase));
export { UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse };
