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
var EndpointUnfollowArtistsUsersQueryParams = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersQueryParams, _super);
    function EndpointUnfollowArtistsUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersQueryParams.prototype, "type", void 0);
    return EndpointUnfollowArtistsUsersQueryParams;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersQueryParams };
var EndpointUnfollowArtistsUsersHeaders = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersHeaders, _super);
    function EndpointUnfollowArtistsUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersHeaders.prototype, "contentType", void 0);
    return EndpointUnfollowArtistsUsersHeaders;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersHeaders };
var EndpointUnfollowArtistsUsersRequestBody = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersRequestBody, _super);
    function EndpointUnfollowArtistsUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], EndpointUnfollowArtistsUsersRequestBody.prototype, "ids", void 0);
    return EndpointUnfollowArtistsUsersRequestBody;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersRequestBody };
var EndpointUnfollowArtistsUsersSecurity = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersSecurity, _super);
    function EndpointUnfollowArtistsUsersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointUnfollowArtistsUsersSecurity.prototype, "spotifyAuth", void 0);
    return EndpointUnfollowArtistsUsersSecurity;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersSecurity };
var EndpointUnfollowArtistsUsersRequest = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersRequest, _super);
    function EndpointUnfollowArtistsUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowArtistsUsersQueryParams)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowArtistsUsersHeaders)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointUnfollowArtistsUsersRequestBody)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointUnfollowArtistsUsersSecurity)
    ], EndpointUnfollowArtistsUsersRequest.prototype, "security", void 0);
    return EndpointUnfollowArtistsUsersRequest;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersRequest };
var EndpointUnfollowArtistsUsersResponse = /** @class */ (function (_super) {
    __extends(EndpointUnfollowArtistsUsersResponse, _super);
    function EndpointUnfollowArtistsUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointUnfollowArtistsUsersResponse.prototype, "statusCode", void 0);
    return EndpointUnfollowArtistsUsersResponse;
}(SpeakeasyBase));
export { EndpointUnfollowArtistsUsersResponse };
