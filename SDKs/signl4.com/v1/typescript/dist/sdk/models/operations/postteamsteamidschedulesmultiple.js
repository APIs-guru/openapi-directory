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
var PostTeamsTeamIdSchedulesMultiplePathParams = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesMultiplePathParams, _super);
    function PostTeamsTeamIdSchedulesMultiplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PostTeamsTeamIdSchedulesMultiplePathParams.prototype, "teamId", void 0);
    return PostTeamsTeamIdSchedulesMultiplePathParams;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesMultiplePathParams };
var PostTeamsTeamIdSchedulesMultipleQueryParams = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesMultipleQueryParams, _super);
    function PostTeamsTeamIdSchedulesMultipleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overrideExisting" }),
        __metadata("design:type", Boolean)
    ], PostTeamsTeamIdSchedulesMultipleQueryParams.prototype, "overrideExisting", void 0);
    return PostTeamsTeamIdSchedulesMultipleQueryParams;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesMultipleQueryParams };
var PostTeamsTeamIdSchedulesMultipleRequests = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesMultipleRequests, _super);
    function PostTeamsTeamIdSchedulesMultipleRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], PostTeamsTeamIdSchedulesMultipleRequests.prototype, "scheduleInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], PostTeamsTeamIdSchedulesMultipleRequests.prototype, "scheduleInfos1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], PostTeamsTeamIdSchedulesMultipleRequests.prototype, "scheduleInfos2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], PostTeamsTeamIdSchedulesMultipleRequests.prototype, "scheduleInfos3", void 0);
    return PostTeamsTeamIdSchedulesMultipleRequests;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesMultipleRequests };
var PostTeamsTeamIdSchedulesMultipleRequest = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesMultipleRequest, _super);
    function PostTeamsTeamIdSchedulesMultipleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdSchedulesMultiplePathParams)
    ], PostTeamsTeamIdSchedulesMultipleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdSchedulesMultipleQueryParams)
    ], PostTeamsTeamIdSchedulesMultipleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdSchedulesMultipleRequests)
    ], PostTeamsTeamIdSchedulesMultipleRequest.prototype, "request", void 0);
    return PostTeamsTeamIdSchedulesMultipleRequest;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesMultipleRequest };
var PostTeamsTeamIdSchedulesMultipleResponse = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdSchedulesMultipleResponse, _super);
    function PostTeamsTeamIdSchedulesMultipleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTeamsTeamIdSchedulesMultipleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdSchedulesMultipleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostTeamsTeamIdSchedulesMultipleResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ScheduleInfo }),
        __metadata("design:type", Array)
    ], PostTeamsTeamIdSchedulesMultipleResponse.prototype, "scheduleInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTeamsTeamIdSchedulesMultipleResponse.prototype, "statusCode", void 0);
    return PostTeamsTeamIdSchedulesMultipleResponse;
}(SpeakeasyBase));
export { PostTeamsTeamIdSchedulesMultipleResponse };
