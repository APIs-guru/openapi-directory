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
var EndpointGetRecentlyPlayedQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedQueryParams, _super);
    function EndpointGetRecentlyPlayedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedQueryParams.prototype, "limit", void 0);
    return EndpointGetRecentlyPlayedQueryParams;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayedQueryParams };
var EndpointGetRecentlyPlayedHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedHeaders, _super);
    function EndpointGetRecentlyPlayedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayedHeaders.prototype, "authorization", void 0);
    return EndpointGetRecentlyPlayedHeaders;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayedHeaders };
var EndpointGetRecentlyPlayedSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedSecurity, _super);
    function EndpointGetRecentlyPlayedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetRecentlyPlayedSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetRecentlyPlayedSecurity;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayedSecurity };
// EndpointGetRecentlyPlayed200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetRecentlyPlayed200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayed200ApplicationJson, _super);
    function EndpointGetRecentlyPlayed200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cursors" }),
        __metadata("design:type", shared.CursorObject)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "cursors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: shared.PlayHistoryObject }),
        __metadata("design:type", Array)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayed200ApplicationJson.prototype, "total", void 0);
    return EndpointGetRecentlyPlayed200ApplicationJson;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayed200ApplicationJson };
var EndpointGetRecentlyPlayedRequest = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedRequest, _super);
    function EndpointGetRecentlyPlayedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecentlyPlayedQueryParams)
    ], EndpointGetRecentlyPlayedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecentlyPlayedHeaders)
    ], EndpointGetRecentlyPlayedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecentlyPlayedSecurity)
    ], EndpointGetRecentlyPlayedRequest.prototype, "security", void 0);
    return EndpointGetRecentlyPlayedRequest;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayedRequest };
var EndpointGetRecentlyPlayedResponse = /** @class */ (function (_super) {
    __extends(EndpointGetRecentlyPlayedResponse, _super);
    function EndpointGetRecentlyPlayedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetRecentlyPlayedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetRecentlyPlayedResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetRecentlyPlayedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetRecentlyPlayed200ApplicationJson)
    ], EndpointGetRecentlyPlayedResponse.prototype, "endpointGetRecentlyPlayed200ApplicationJsonObject", void 0);
    return EndpointGetRecentlyPlayedResponse;
}(SpeakeasyBase));
export { EndpointGetRecentlyPlayedResponse };
