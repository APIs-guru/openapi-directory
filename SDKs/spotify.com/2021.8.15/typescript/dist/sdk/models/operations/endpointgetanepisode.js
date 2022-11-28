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
var EndpointGetAnEpisodePathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodePathParams, _super);
    function EndpointGetAnEpisodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnEpisodePathParams.prototype, "id", void 0);
    return EndpointGetAnEpisodePathParams;
}(SpeakeasyBase));
export { EndpointGetAnEpisodePathParams };
var EndpointGetAnEpisodeQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodeQueryParams, _super);
    function EndpointGetAnEpisodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnEpisodeQueryParams.prototype, "market", void 0);
    return EndpointGetAnEpisodeQueryParams;
}(SpeakeasyBase));
export { EndpointGetAnEpisodeQueryParams };
var EndpointGetAnEpisodeHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodeHeaders, _super);
    function EndpointGetAnEpisodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnEpisodeHeaders.prototype, "authorization", void 0);
    return EndpointGetAnEpisodeHeaders;
}(SpeakeasyBase));
export { EndpointGetAnEpisodeHeaders };
var EndpointGetAnEpisodeSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodeSecurity, _super);
    function EndpointGetAnEpisodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnEpisodeSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnEpisodeSecurity;
}(SpeakeasyBase));
export { EndpointGetAnEpisodeSecurity };
var EndpointGetAnEpisodeRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodeRequest, _super);
    function EndpointGetAnEpisodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnEpisodePathParams)
    ], EndpointGetAnEpisodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnEpisodeQueryParams)
    ], EndpointGetAnEpisodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnEpisodeHeaders)
    ], EndpointGetAnEpisodeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnEpisodeSecurity)
    ], EndpointGetAnEpisodeRequest.prototype, "security", void 0);
    return EndpointGetAnEpisodeRequest;
}(SpeakeasyBase));
export { EndpointGetAnEpisodeRequest };
var EndpointGetAnEpisodeResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnEpisodeResponse, _super);
    function EndpointGetAnEpisodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAnEpisodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EpisodeObject)
    ], EndpointGetAnEpisodeResponse.prototype, "episodeObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnEpisodeResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAnEpisodeResponse.prototype, "statusCode", void 0);
    return EndpointGetAnEpisodeResponse;
}(SpeakeasyBase));
export { EndpointGetAnEpisodeResponse };
