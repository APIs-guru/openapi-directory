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
var EndpointFollowArtistsUsersQueryParams = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersQueryParams, _super);
    function EndpointFollowArtistsUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointFollowArtistsUsersQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointFollowArtistsUsersQueryParams.prototype, "type", void 0);
    return EndpointFollowArtistsUsersQueryParams;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersQueryParams };
var EndpointFollowArtistsUsersHeaders = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersHeaders, _super);
    function EndpointFollowArtistsUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointFollowArtistsUsersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointFollowArtistsUsersHeaders.prototype, "contentType", void 0);
    return EndpointFollowArtistsUsersHeaders;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersHeaders };
var EndpointFollowArtistsUsersRequestBody = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersRequestBody, _super);
    function EndpointFollowArtistsUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointFollowArtistsUsersRequestBody.prototype, "ids", void 0);
    return EndpointFollowArtistsUsersRequestBody;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersRequestBody };
var EndpointFollowArtistsUsersSecurity = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersSecurity, _super);
    function EndpointFollowArtistsUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointFollowArtistsUsersSecurity.prototype, "spotifyAuth", void 0);
    return EndpointFollowArtistsUsersSecurity;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersSecurity };
var EndpointFollowArtistsUsersRequest = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersRequest, _super);
    function EndpointFollowArtistsUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowArtistsUsersQueryParams)
    ], EndpointFollowArtistsUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowArtistsUsersHeaders)
    ], EndpointFollowArtistsUsersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointFollowArtistsUsersRequestBody)
    ], EndpointFollowArtistsUsersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointFollowArtistsUsersSecurity)
    ], EndpointFollowArtistsUsersRequest.prototype, "security", void 0);
    return EndpointFollowArtistsUsersRequest;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersRequest };
var EndpointFollowArtistsUsersResponse = /** @class */ (function (_super) {
    __extends(EndpointFollowArtistsUsersResponse, _super);
    function EndpointFollowArtistsUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointFollowArtistsUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointFollowArtistsUsersResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointFollowArtistsUsersResponse.prototype, "statusCode", void 0);
    return EndpointFollowArtistsUsersResponse;
}(SpeakeasyBase));
export { EndpointFollowArtistsUsersResponse };
