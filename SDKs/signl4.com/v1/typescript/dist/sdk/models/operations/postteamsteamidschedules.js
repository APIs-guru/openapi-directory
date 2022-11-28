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
var PostTeamsTeamIdSchedulesPathParams = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesPathParams, _super);
    function PostTeamsTeamIdSchedulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PostTeamsTeamIdSchedulesPathParams.prototype, "teamId", void 0);
    return PostTeamsTeamIdSchedulesPathParams;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesPathParams };
var PostTeamsTeamIdSchedulesRequests = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesRequests, _super);
    function PostTeamsTeamIdSchedulesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ScheduleInfo)
    ], PostTeamsTeamIdSchedulesRequests.prototype, "scheduleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScheduleInfo)
    ], PostTeamsTeamIdSchedulesRequests.prototype, "scheduleInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ScheduleInfo)
    ], PostTeamsTeamIdSchedulesRequests.prototype, "scheduleInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ScheduleInfo)
    ], PostTeamsTeamIdSchedulesRequests.prototype, "scheduleInfo3", void 0);
    return PostTeamsTeamIdSchedulesRequests;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesRequests };
var PostTeamsTeamIdSchedulesRequest = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesRequest, _super);
    function PostTeamsTeamIdSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdSchedulesPathParams)
    ], PostTeamsTeamIdSchedulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdSchedulesRequests)
    ], PostTeamsTeamIdSchedulesRequest.prototype, "request", void 0);
    return PostTeamsTeamIdSchedulesRequest;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesRequest };
var PostTeamsTeamIdSchedulesResponse = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesResponse, _super);
    function PostTeamsTeamIdSchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTeamsTeamIdSchedulesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdSchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostTeamsTeamIdSchedulesResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduleInfo)
    ], PostTeamsTeamIdSchedulesResponse.prototype, "scheduleInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTeamsTeamIdSchedulesResponse.prototype, "statusCode", void 0);
    return PostTeamsTeamIdSchedulesResponse;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesResponse };
