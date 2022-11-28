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
var EndpointGetMultipleEpisodesQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleEpisodesQueryParams, _super);
    function EndpointGetMultipleEpisodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleEpisodesQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleEpisodesQueryParams.prototype, "market", void 0);
    return EndpointGetMultipleEpisodesQueryParams;
}(SpeakeasyBase));
export { EndpointGetMultipleEpisodesQueryParams };
var EndpointGetMultipleEpisodesHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleEpisodesHeaders, _super);
    function EndpointGetMultipleEpisodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleEpisodesHeaders.prototype, "authorization", void 0);
    return EndpointGetMultipleEpisodesHeaders;
}(SpeakeasyBase));
export { EndpointGetMultipleEpisodesHeaders };
var EndpointGetMultipleEpisodesSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleEpisodesSecurity, _super);
    function EndpointGetMultipleEpisodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetMultipleEpisodesSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetMultipleEpisodesSecurity;
}(SpeakeasyBase));
export { EndpointGetMultipleEpisodesSecurity };
var EndpointGetMultipleEpisodesRequest = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleEpisodesRequest, _super);
    function EndpointGetMultipleEpisodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleEpisodesQueryParams)
    ], EndpointGetMultipleEpisodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleEpisodesHeaders)
    ], EndpointGetMultipleEpisodesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleEpisodesSecurity)
    ], EndpointGetMultipleEpisodesRequest.prototype, "security", void 0);
    return EndpointGetMultipleEpisodesRequest;
}(SpeakeasyBase));
export { EndpointGetMultipleEpisodesRequest };
var EndpointGetMultipleEpisodesResponse = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleEpisodesResponse, _super);
    function EndpointGetMultipleEpisodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetMultipleEpisodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EpisodesObject)
    ], EndpointGetMultipleEpisodesResponse.prototype, "episodesObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetMultipleEpisodesResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetMultipleEpisodesResponse.prototype, "statusCode", void 0);
    return EndpointGetMultipleEpisodesResponse;
}(SpeakeasyBase));
export { EndpointGetMultipleEpisodesResponse };
