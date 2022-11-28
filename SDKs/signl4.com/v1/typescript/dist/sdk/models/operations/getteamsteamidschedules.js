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
var GetTeamsTeamIdSchedulesPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsTeamIdSchedulesPathParams, _super);
    function GetTeamsTeamIdSchedulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], GetTeamsTeamIdSchedulesPathParams.prototype, "teamId", void 0);
    return GetTeamsTeamIdSchedulesPathParams;
}(SpeakeasyBase));
export { GetTeamsTeamIdSchedulesPathParams };
var GetTeamsTeamIdSchedulesQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsTeamIdSchedulesQueryParams, _super);
    function GetTeamsTeamIdSchedulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", Number)
    ], GetTeamsTeamIdSchedulesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinDate" }),
        __metadata("design:type", Date)
    ], GetTeamsTeamIdSchedulesQueryParams.prototype, "minDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserId" }),
        __metadata("design:type", String)
    ], GetTeamsTeamIdSchedulesQueryParams.prototype, "userId", void 0);
    return GetTeamsTeamIdSchedulesQueryParams;
}(SpeakeasyBase));
export { GetTeamsTeamIdSchedulesQueryParams };
var GetTeamsTeamIdSchedulesRequest = /** @class */ (function (_super) {
    __extends(GetTeamsTeamIdSchedulesRequest, _super);
    function GetTeamsTeamIdSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsTeamIdSchedulesPathParams)
    ], GetTeamsTeamIdSchedulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsTeamIdSchedulesQueryParams)
    ], GetTeamsTeamIdSchedulesRequest.prototype, "queryParams", void 0);
    return GetTeamsTeamIdSchedulesRequest;
}(SpeakeasyBase));
export { GetTeamsTeamIdSchedulesRequest };
var GetTeamsTeamIdSchedulesResponse = /** @class */ (function (_super) {
    __extends(GetTeamsTeamIdSchedulesResponse, _super);
    function GetTeamsTeamIdSchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTeamsTeamIdSchedulesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsTeamIdSchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], GetTeamsTeamIdSchedulesResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], GetTeamsTeamIdSchedulesResponse.prototype, "scheduleInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsTeamIdSchedulesResponse.prototype, "statusCode", void 0);
    return GetTeamsTeamIdSchedulesResponse;
}(SpeakeasyBase));
export { GetTeamsTeamIdSchedulesResponse };
