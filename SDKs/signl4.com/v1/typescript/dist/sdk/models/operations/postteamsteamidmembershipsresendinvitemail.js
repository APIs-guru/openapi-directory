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
var PostTeamsTeamIdMembershipsResendInviteMailPathParams = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdMembershipsResendInviteMailPathParams, _super);
    function PostTeamsTeamIdMembershipsResendInviteMailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], PostTeamsTeamIdMembershipsResendInviteMailPathParams.prototype, "teamId", void 0);
    return PostTeamsTeamIdMembershipsResendInviteMailPathParams;
}(SpeakeasyBase));
export { PostTeamsTeamIdMembershipsResendInviteMailPathParams };
var PostTeamsTeamIdMembershipsResendInviteMailRequests = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdMembershipsResendInviteMailRequests, _super);
    function PostTeamsTeamIdMembershipsResendInviteMailRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UserInvitationInfo)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequests.prototype, "userInvitationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserInvitationInfo)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequests.prototype, "userInvitationInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.UserInvitationInfo)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequests.prototype, "userInvitationInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UserInvitationInfo)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequests.prototype, "userInvitationInfo3", void 0);
    return PostTeamsTeamIdMembershipsResendInviteMailRequests;
}(SpeakeasyBase));
export { PostTeamsTeamIdMembershipsResendInviteMailRequests };
var PostTeamsTeamIdMembershipsResendInviteMailRequest = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdMembershipsResendInviteMailRequest, _super);
    function PostTeamsTeamIdMembershipsResendInviteMailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdMembershipsResendInviteMailPathParams)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTeamsTeamIdMembershipsResendInviteMailRequests)
    ], PostTeamsTeamIdMembershipsResendInviteMailRequest.prototype, "request", void 0);
    return PostTeamsTeamIdMembershipsResendInviteMailRequest;
}(SpeakeasyBase));
export { PostTeamsTeamIdMembershipsResendInviteMailRequest };
var PostTeamsTeamIdMembershipsResendInviteMailResponse = /** @class */ (function (_super) {
    __extends(PostTeamsTeamIdMembershipsResendInviteMailResponse, _super);
    function PostTeamsTeamIdMembershipsResendInviteMailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "postTeamsTeamIdMembershipsResendInviteMail200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "postTeamsTeamIdMembershipsResendInviteMail200TextJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "postTeamsTeamIdMembershipsResendInviteMail200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTeamsTeamIdMembershipsResendInviteMailResponse.prototype, "statusCode", void 0);
    return PostTeamsTeamIdMembershipsResendInviteMailResponse;
}(SpeakeasyBase));
export { PostTeamsTeamIdMembershipsResendInviteMailResponse };
