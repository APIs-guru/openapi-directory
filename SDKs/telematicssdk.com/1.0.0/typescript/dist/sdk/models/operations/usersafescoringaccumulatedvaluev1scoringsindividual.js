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
var UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams = /** @class */ (function (_super) {
    __extends(UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams, _super);
    function UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams.prototype, "startDate", void 0);
    return UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams;
}(SpeakeasyBase));
export { UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams };
var UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult, _super);
    function UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccelerationScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "accelerationScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppId" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BrakingScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "brakingScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyId" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorneringScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "corneringScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceToken" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "deviceToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DistractedScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "distractedScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverallScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "overallScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeedingScore" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult.prototype, "speedingScore", void 0);
    return UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult;
}(SpeakeasyBase));
export { UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult };
var UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson = /** @class */ (function (_super) {
    __extends(UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson, _super);
    function UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Errors" }),
        __metadata("design:type", Array)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result" }),
        __metadata("design:type", UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson.prototype, "title", void 0);
    return UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson;
}(SpeakeasyBase));
export { UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson };
var UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest = /** @class */ (function (_super) {
    __extends(UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest, _super);
    function UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest.prototype, "queryParams", void 0);
    return UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest;
}(SpeakeasyBase));
export { UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest };
var UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse = /** @class */ (function (_super) {
    __extends(UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse, _super);
    function UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson)
    ], UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse.prototype, "userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject", void 0);
    return UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse;
}(SpeakeasyBase));
export { UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse };
