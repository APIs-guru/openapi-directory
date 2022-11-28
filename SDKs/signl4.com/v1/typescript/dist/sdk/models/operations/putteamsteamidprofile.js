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
var PutTeamsTeamIdProfilePathParams = /** @class */ (function (_super) {
    __extends(PutTeamsTeamIdProfilePathParams, _super);
    function PutTeamsTeamIdProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PutTeamsTeamIdProfilePathParams.prototype, "teamId", void 0);
    return PutTeamsTeamIdProfilePathParams;
}(SpeakeasyBase));
export { PutTeamsTeamIdProfilePathParams };
var PutTeamsTeamIdProfileRequests = /** @class */ (function (_super) {
    __extends(PutTeamsTeamIdProfileRequests, _super);
    function PutTeamsTeamIdProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.TeamProfile)
    ], PutTeamsTeamIdProfileRequests.prototype, "teamProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TeamProfile)
    ], PutTeamsTeamIdProfileRequests.prototype, "teamProfile1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.TeamProfile)
    ], PutTeamsTeamIdProfileRequests.prototype, "teamProfile2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TeamProfile)
    ], PutTeamsTeamIdProfileRequests.prototype, "teamProfile3", void 0);
    return PutTeamsTeamIdProfileRequests;
}(SpeakeasyBase));
export { PutTeamsTeamIdProfileRequests };
var PutTeamsTeamIdProfileRequest = /** @class */ (function (_super) {
    __extends(PutTeamsTeamIdProfileRequest, _super);
    function PutTeamsTeamIdProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTeamsTeamIdProfilePathParams)
    ], PutTeamsTeamIdProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTeamsTeamIdProfileRequests)
    ], PutTeamsTeamIdProfileRequest.prototype, "request", void 0);
    return PutTeamsTeamIdProfileRequest;
}(SpeakeasyBase));
export { PutTeamsTeamIdProfileRequest };
var PutTeamsTeamIdProfileResponse = /** @class */ (function (_super) {
    __extends(PutTeamsTeamIdProfileResponse, _super);
    function PutTeamsTeamIdProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutTeamsTeamIdProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTeamsTeamIdProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PutTeamsTeamIdProfileResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTeamsTeamIdProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamInfo)
    ], PutTeamsTeamIdProfileResponse.prototype, "teamInfo", void 0);
    return PutTeamsTeamIdProfileResponse;
}(SpeakeasyBase));
export { PutTeamsTeamIdProfileResponse };
