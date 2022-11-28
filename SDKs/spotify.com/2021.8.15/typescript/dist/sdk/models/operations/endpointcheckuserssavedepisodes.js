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
var EndpointCheckUsersSavedEpisodesQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedEpisodesQueryParams, _super);
    function EndpointCheckUsersSavedEpisodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedEpisodesQueryParams.prototype, "ids", void 0);
    return EndpointCheckUsersSavedEpisodesQueryParams;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedEpisodesQueryParams };
var EndpointCheckUsersSavedEpisodesHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedEpisodesHeaders, _super);
    function EndpointCheckUsersSavedEpisodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedEpisodesHeaders.prototype, "authorization", void 0);
    return EndpointCheckUsersSavedEpisodesHeaders;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedEpisodesHeaders };
var EndpointCheckUsersSavedEpisodesSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedEpisodesSecurity, _super);
    function EndpointCheckUsersSavedEpisodesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckUsersSavedEpisodesSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckUsersSavedEpisodesSecurity;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedEpisodesSecurity };
var EndpointCheckUsersSavedEpisodesRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedEpisodesRequest, _super);
    function EndpointCheckUsersSavedEpisodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedEpisodesQueryParams)
    ], EndpointCheckUsersSavedEpisodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedEpisodesHeaders)
    ], EndpointCheckUsersSavedEpisodesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointCheckUsersSavedEpisodesSecurity)
    ], EndpointCheckUsersSavedEpisodesRequest.prototype, "security", void 0);
    return EndpointCheckUsersSavedEpisodesRequest;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedEpisodesRequest };
var EndpointCheckUsersSavedEpisodesResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedEpisodesResponse, _super);
    function EndpointCheckUsersSavedEpisodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedEpisodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckUsersSavedEpisodesResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointCheckUsersSavedEpisodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], EndpointCheckUsersSavedEpisodesResponse.prototype, "endpointCheckUsersSavedEpisodes200ApplicationJsonBooleans", void 0);
    return EndpointCheckUsersSavedEpisodesResponse;
}(SpeakeasyBase));
export { EndpointCheckUsersSavedEpisodesResponse };
