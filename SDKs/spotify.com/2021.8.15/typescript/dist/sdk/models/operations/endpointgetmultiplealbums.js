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
var EndpointGetMultipleAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleAlbumsQueryParams, _super);
    function EndpointGetMultipleAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleAlbumsQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleAlbumsQueryParams.prototype, "market", void 0);
    return EndpointGetMultipleAlbumsQueryParams;
}(SpeakeasyBase));
export { EndpointGetMultipleAlbumsQueryParams };
var EndpointGetMultipleAlbumsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleAlbumsHeaders, _super);
    function EndpointGetMultipleAlbumsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleAlbumsHeaders.prototype, "authorization", void 0);
    return EndpointGetMultipleAlbumsHeaders;
}(SpeakeasyBase));
export { EndpointGetMultipleAlbumsHeaders };
var EndpointGetMultipleAlbumsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleAlbumsSecurity, _super);
    function EndpointGetMultipleAlbumsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetMultipleAlbumsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetMultipleAlbumsSecurity;
}(SpeakeasyBase));
export { EndpointGetMultipleAlbumsSecurity };
var EndpointGetMultipleAlbumsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleAlbumsRequest, _super);
    function EndpointGetMultipleAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleAlbumsQueryParams)
    ], EndpointGetMultipleAlbumsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleAlbumsHeaders)
    ], EndpointGetMultipleAlbumsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetMultipleAlbumsSecurity)
    ], EndpointGetMultipleAlbumsRequest.prototype, "security", void 0);
    return EndpointGetMultipleAlbumsRequest;
}(SpeakeasyBase));
export { EndpointGetMultipleAlbumsRequest };
var EndpointGetMultipleAlbumsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleAlbumsResponse, _super);
    function EndpointGetMultipleAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlbumsObject)
    ], EndpointGetMultipleAlbumsResponse.prototype, "albumsObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetMultipleAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetMultipleAlbumsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetMultipleAlbumsResponse.prototype, "statusCode", void 0);
    return EndpointGetMultipleAlbumsResponse;
}(SpeakeasyBase));
export { EndpointGetMultipleAlbumsResponse };
