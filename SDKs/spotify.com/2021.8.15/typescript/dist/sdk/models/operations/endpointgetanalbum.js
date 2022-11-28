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
var EndpointGetAnAlbumPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumPathParams, _super);
    function EndpointGetAnAlbumPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumPathParams.prototype, "id", void 0);
    return EndpointGetAnAlbumPathParams;
}(SpeakeasyBase));
export { EndpointGetAnAlbumPathParams };
var EndpointGetAnAlbumQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumQueryParams, _super);
    function EndpointGetAnAlbumQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumQueryParams.prototype, "market", void 0);
    return EndpointGetAnAlbumQueryParams;
}(SpeakeasyBase));
export { EndpointGetAnAlbumQueryParams };
var EndpointGetAnAlbumHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumHeaders, _super);
    function EndpointGetAnAlbumHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumHeaders.prototype, "authorization", void 0);
    return EndpointGetAnAlbumHeaders;
}(SpeakeasyBase));
export { EndpointGetAnAlbumHeaders };
var EndpointGetAnAlbumSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumSecurity, _super);
    function EndpointGetAnAlbumSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnAlbumSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnAlbumSecurity;
}(SpeakeasyBase));
export { EndpointGetAnAlbumSecurity };
var EndpointGetAnAlbumRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumRequest, _super);
    function EndpointGetAnAlbumRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumPathParams)
    ], EndpointGetAnAlbumRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumQueryParams)
    ], EndpointGetAnAlbumRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumHeaders)
    ], EndpointGetAnAlbumRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EndpointGetAnAlbumSecurity)
    ], EndpointGetAnAlbumRequest.prototype, "security", void 0);
    return EndpointGetAnAlbumRequest;
}(SpeakeasyBase));
export { EndpointGetAnAlbumRequest };
var EndpointGetAnAlbumResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnAlbumResponse, _super);
    function EndpointGetAnAlbumResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlbumObject)
    ], EndpointGetAnAlbumResponse.prototype, "albumObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EndpointGetAnAlbumResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnAlbumResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EndpointGetAnAlbumResponse.prototype, "statusCode", void 0);
    return EndpointGetAnAlbumResponse;
}(SpeakeasyBase));
export { EndpointGetAnAlbumResponse };
