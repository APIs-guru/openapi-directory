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
var DeleteTeamsTeamIdMembershipsUserIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteTeamsTeamIdMembershipsUserIdPathParams, _super);
    function DeleteTeamsTeamIdMembershipsUserIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdPathParams.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdPathParams.prototype, "userId", void 0);
    return DeleteTeamsTeamIdMembershipsUserIdPathParams;
}(SpeakeasyBase));
export { DeleteTeamsTeamIdMembershipsUserIdPathParams };
var DeleteTeamsTeamIdMembershipsUserIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteTeamsTeamIdMembershipsUserIdQueryParams, _super);
    function DeleteTeamsTeamIdMembershipsUserIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requesterUserId" }),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdQueryParams.prototype, "requesterUserId", void 0);
    return DeleteTeamsTeamIdMembershipsUserIdQueryParams;
}(SpeakeasyBase));
export { DeleteTeamsTeamIdMembershipsUserIdQueryParams };
var DeleteTeamsTeamIdMembershipsUserIdRequest = /** @class */ (function (_super) {
    __extends(DeleteTeamsTeamIdMembershipsUserIdRequest, _super);
    function DeleteTeamsTeamIdMembershipsUserIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTeamsTeamIdMembershipsUserIdPathParams)
    ], DeleteTeamsTeamIdMembershipsUserIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteTeamsTeamIdMembershipsUserIdQueryParams)
    ], DeleteTeamsTeamIdMembershipsUserIdRequest.prototype, "queryParams", void 0);
    return DeleteTeamsTeamIdMembershipsUserIdRequest;
}(SpeakeasyBase));
export { DeleteTeamsTeamIdMembershipsUserIdRequest };
var DeleteTeamsTeamIdMembershipsUserIdResponse = /** @class */ (function (_super) {
    __extends(DeleteTeamsTeamIdMembershipsUserIdResponse, _super);
    function DeleteTeamsTeamIdMembershipsUserIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "deleteTeamsTeamIdMembershipsUserId200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "deleteTeamsTeamIdMembershipsUserId200TextJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "deleteTeamsTeamIdMembershipsUserId200TextPlainString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteTeamsTeamIdMembershipsUserIdResponse.prototype, "statusCode", void 0);
    return DeleteTeamsTeamIdMembershipsUserIdResponse;
}(SpeakeasyBase));
export { DeleteTeamsTeamIdMembershipsUserIdResponse };
