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
var PostTeamsTeamIdAlertSettingsPathParams = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdAlertSettingsPathParams, _super);
    function PostTeamsTeamIdAlertSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PostTeamsTeamIdAlertSettingsPathParams.prototype, "teamId", void 0);
    return PostTeamsTeamIdAlertSettingsPathParams;
}(SpeakeasyBase));
export { PostTeamsTeamIdAlertSettingsPathParams };
var PostTeamsTeamIdAlertSettingsRequests = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdAlertSettingsRequests, _super);
    function PostTeamsTeamIdAlertSettingsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AlertSettings)
    ], PostTeamsTeamIdAlertSettingsRequests.prototype, "alertSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AlertSettings)
    ], PostTeamsTeamIdAlertSettingsRequests.prototype, "alertSettings1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AlertSettings)
    ], PostTeamsTeamIdAlertSettingsRequests.prototype, "alertSettings2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AlertSettings)
    ], PostTeamsTeamIdAlertSettingsRequests.prototype, "alertSettings3", void 0);
    return PostTeamsTeamIdAlertSettingsRequests;
}(SpeakeasyBase));
export { PostTeamsTeamIdAlertSettingsRequests };
var PostTeamsTeamIdAlertSettingsRequest = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdAlertSettingsRequest, _super);
    function PostTeamsTeamIdAlertSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdAlertSettingsPathParams)
    ], PostTeamsTeamIdAlertSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdAlertSettingsRequests)
    ], PostTeamsTeamIdAlertSettingsRequest.prototype, "request", void 0);
    return PostTeamsTeamIdAlertSettingsRequest;
}(SpeakeasyBase));
export { PostTeamsTeamIdAlertSettingsRequest };
var PostTeamsTeamIdAlertSettingsResponse = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdAlertSettingsResponse, _super);
    function PostTeamsTeamIdAlertSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlertSettings)
    ], PostTeamsTeamIdAlertSettingsResponse.prototype, "alertSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTeamsTeamIdAlertSettingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdAlertSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostTeamsTeamIdAlertSettingsResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTeamsTeamIdAlertSettingsResponse.prototype, "statusCode", void 0);
    return PostTeamsTeamIdAlertSettingsResponse;
}(SpeakeasyBase));
export { PostTeamsTeamIdAlertSettingsResponse };
