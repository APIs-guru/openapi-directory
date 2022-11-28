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
var EndpointGetFollowedQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetFollowedQueryParams, _super);
    function EndpointGetFollowedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], EndpointGetFollowedQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetFollowedQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], EndpointGetFollowedQueryParams.prototype, "type", void 0);
    return EndpointGetFollowedQueryParams;
}(SpeakeasyBase));
export { EndpointGetFollowedQueryParams };
var EndpointGetFollowedHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetFollowedHeaders, _super);
    function EndpointGetFollowedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetFollowedHeaders.prototype, "authorization", void 0);
    return EndpointGetFollowedHeaders;
}(SpeakeasyBase));
export { EndpointGetFollowedHeaders };
var EndpointGetFollowedSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetFollowedSecurity, _super);
    function EndpointGetFollowedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetFollowedSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetFollowedSecurity;
}(SpeakeasyBase));
export { EndpointGetFollowedSecurity };
var EndpointGetFollowedRequest = /** @class */ (function (_super) {
    __extends(EndpointGetFollowedRequest, _super);
    function EndpointGetFollowedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFollowedQueryParams)
    ], EndpointGetFollowedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFollowedHeaders)
    ], EndpointGetFollowedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetFollowedSecurity)
    ], EndpointGetFollowedRequest.prototype, "security", void 0);
    return EndpointGetFollowedRequest;
}(SpeakeasyBase));
export { EndpointGetFollowedRequest };
var EndpointGetFollowedResponse = /** @class */ (function (_super) {
    __extends(EndpointGetFollowedResponse, _super);
    function EndpointGetFollowedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetFollowedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetFollowedResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FollowingArtistsObject)
    ], EndpointGetFollowedResponse.prototype, "followingArtistsObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetFollowedResponse.prototype, "statusCode", void 0);
    return EndpointGetFollowedResponse;
}(SpeakeasyBase));
export { EndpointGetFollowedResponse };
