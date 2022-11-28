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
var DeleteAlbumLogoPathParams = /** @class */ (function (_super) {
    __extends(DeleteAlbumLogoPathParams, _super);
    function DeleteAlbumLogoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], DeleteAlbumLogoPathParams.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logo_id" }),
        __metadata("design:type", Number)
    ], DeleteAlbumLogoPathParams.prototype, "logoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], DeleteAlbumLogoPathParams.prototype, "userId", void 0);
    return DeleteAlbumLogoPathParams;
}(SpeakeasyBase));
export { DeleteAlbumLogoPathParams };
var DeleteAlbumLogoSecurity = /** @class */ (function (_super) {
    __extends(DeleteAlbumLogoSecurity, _super);
    function DeleteAlbumLogoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteAlbumLogoSecurity.prototype, "oauth2", void 0);
    return DeleteAlbumLogoSecurity;
}(SpeakeasyBase));
export { DeleteAlbumLogoSecurity };
var DeleteAlbumLogoRequest = /** @class */ (function (_super) {
    __extends(DeleteAlbumLogoRequest, _super);
    function DeleteAlbumLogoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAlbumLogoPathParams)
    ], DeleteAlbumLogoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAlbumLogoSecurity)
    ], DeleteAlbumLogoRequest.prototype, "security", void 0);
    return DeleteAlbumLogoRequest;
}(SpeakeasyBase));
export { DeleteAlbumLogoRequest };
var DeleteAlbumLogoResponse = /** @class */ (function (_super) {
    __extends(DeleteAlbumLogoResponse, _super);
    function DeleteAlbumLogoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAlbumLogoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAlbumLogoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], DeleteAlbumLogoResponse.prototype, "legacyError", void 0);
    return DeleteAlbumLogoResponse;
}(SpeakeasyBase));
export { DeleteAlbumLogoResponse };
