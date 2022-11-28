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
var GetAlbumVideoAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideoAlt1PathParams, _super);
    function GetAlbumVideoAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], GetAlbumVideoAlt1PathParams.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetAlbumVideoAlt1PathParams.prototype, "videoId", void 0);
    return GetAlbumVideoAlt1PathParams;
}(SpeakeasyBase));
export { GetAlbumVideoAlt1PathParams };
var GetAlbumVideoAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetAlbumVideoAlt1QueryParams, _super);
    function GetAlbumVideoAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], GetAlbumVideoAlt1QueryParams.prototype, "password", void 0);
    return GetAlbumVideoAlt1QueryParams;
}(SpeakeasyBase));
export { GetAlbumVideoAlt1QueryParams };
var GetAlbumVideoAlt1Request = /** @class */ (function (_super) {
    __extends(GetAlbumVideoAlt1Request, _super);
    function GetAlbumVideoAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumVideoAlt1PathParams)
    ], GetAlbumVideoAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAlbumVideoAlt1QueryParams)
    ], GetAlbumVideoAlt1Request.prototype, "queryParams", void 0);
    return GetAlbumVideoAlt1Request;
}(SpeakeasyBase));
export { GetAlbumVideoAlt1Request };
var GetAlbumVideoAlt1Response = /** @class */ (function (_super) {
    __extends(GetAlbumVideoAlt1Response, _super);
    function GetAlbumVideoAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAlbumVideoAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAlbumVideoAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetAlbumVideoAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Video)
    ], GetAlbumVideoAlt1Response.prototype, "video", void 0);
    return GetAlbumVideoAlt1Response;
}(SpeakeasyBase));
export { GetAlbumVideoAlt1Response };
