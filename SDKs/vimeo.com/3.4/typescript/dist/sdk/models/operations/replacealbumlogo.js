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
var ReplaceAlbumLogoPathParams = /** @class */ (function (_super) {
    __extends(ReplaceAlbumLogoPathParams, _super);
    function ReplaceAlbumLogoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], ReplaceAlbumLogoPathParams.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logo_id" }),
        __metadata("design:type", Number)
    ], ReplaceAlbumLogoPathParams.prototype, "logoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], ReplaceAlbumLogoPathParams.prototype, "userId", void 0);
    return ReplaceAlbumLogoPathParams;
}(SpeakeasyBase));
export { ReplaceAlbumLogoPathParams };
var ReplaceAlbumLogoRequestBody = /** @class */ (function (_super) {
    __extends(ReplaceAlbumLogoRequestBody, _super);
    function ReplaceAlbumLogoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReplaceAlbumLogoRequestBody.prototype, "active", void 0);
    return ReplaceAlbumLogoRequestBody;
}(SpeakeasyBase));
export { ReplaceAlbumLogoRequestBody };
var ReplaceAlbumLogoSecurity = /** @class */ (function (_super) {
    __extends(ReplaceAlbumLogoSecurity, _super);
    function ReplaceAlbumLogoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplaceAlbumLogoSecurity.prototype, "oauth2", void 0);
    return ReplaceAlbumLogoSecurity;
}(SpeakeasyBase));
export { ReplaceAlbumLogoSecurity };
var ReplaceAlbumLogoRequest = /** @class */ (function (_super) {
    __extends(ReplaceAlbumLogoRequest, _super);
    function ReplaceAlbumLogoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceAlbumLogoPathParams)
    ], ReplaceAlbumLogoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" }),
        __metadata("design:type", ReplaceAlbumLogoRequestBody)
    ], ReplaceAlbumLogoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceAlbumLogoSecurity)
    ], ReplaceAlbumLogoRequest.prototype, "security", void 0);
    return ReplaceAlbumLogoRequest;
}(SpeakeasyBase));
export { ReplaceAlbumLogoRequest };
var ReplaceAlbumLogoResponse = /** @class */ (function (_super) {
    __extends(ReplaceAlbumLogoResponse, _super);
    function ReplaceAlbumLogoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceAlbumLogoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceAlbumLogoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], ReplaceAlbumLogoResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], ReplaceAlbumLogoResponse.prototype, "picture", void 0);
    return ReplaceAlbumLogoResponse;
}(SpeakeasyBase));
export { ReplaceAlbumLogoResponse };
