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
var SetVideoAsAlbumThumbnailAlt1PathParams = /** @class */ (function (_super) {
    __extends(SetVideoAsAlbumThumbnailAlt1PathParams, _super);
    function SetVideoAsAlbumThumbnailAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], SetVideoAsAlbumThumbnailAlt1PathParams.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], SetVideoAsAlbumThumbnailAlt1PathParams.prototype, "videoId", void 0);
    return SetVideoAsAlbumThumbnailAlt1PathParams;
}(SpeakeasyBase));
export { SetVideoAsAlbumThumbnailAlt1PathParams };
var SetVideoAsAlbumThumbnailAlt1RequestBody = /** @class */ (function (_super) {
    __extends(SetVideoAsAlbumThumbnailAlt1RequestBody, _super);
    function SetVideoAsAlbumThumbnailAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], SetVideoAsAlbumThumbnailAlt1RequestBody.prototype, "timeCode", void 0);
    return SetVideoAsAlbumThumbnailAlt1RequestBody;
}(SpeakeasyBase));
export { SetVideoAsAlbumThumbnailAlt1RequestBody };
var SetVideoAsAlbumThumbnailAlt1Security = /** @class */ (function (_super) {
    __extends(SetVideoAsAlbumThumbnailAlt1Security, _super);
    function SetVideoAsAlbumThumbnailAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SetVideoAsAlbumThumbnailAlt1Security.prototype, "oauth2", void 0);
    return SetVideoAsAlbumThumbnailAlt1Security;
}(SpeakeasyBase));
export { SetVideoAsAlbumThumbnailAlt1Security };
var SetVideoAsAlbumThumbnailAlt1Request = /** @class */ (function (_super) {
    __extends(SetVideoAsAlbumThumbnailAlt1Request, _super);
    function SetVideoAsAlbumThumbnailAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVideoAsAlbumThumbnailAlt1PathParams)
    ], SetVideoAsAlbumThumbnailAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetVideoAsAlbumThumbnailAlt1RequestBody)
    ], SetVideoAsAlbumThumbnailAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVideoAsAlbumThumbnailAlt1Security)
    ], SetVideoAsAlbumThumbnailAlt1Request.prototype, "security", void 0);
    return SetVideoAsAlbumThumbnailAlt1Request;
}(SpeakeasyBase));
export { SetVideoAsAlbumThumbnailAlt1Request };
var SetVideoAsAlbumThumbnailAlt1Response = /** @class */ (function (_super) {
    __extends(SetVideoAsAlbumThumbnailAlt1Response, _super);
    function SetVideoAsAlbumThumbnailAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetVideoAsAlbumThumbnailAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetVideoAsAlbumThumbnailAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Album)
    ], SetVideoAsAlbumThumbnailAlt1Response.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], SetVideoAsAlbumThumbnailAlt1Response.prototype, "error", void 0);
    return SetVideoAsAlbumThumbnailAlt1Response;
}(SpeakeasyBase));
export { SetVideoAsAlbumThumbnailAlt1Response };
