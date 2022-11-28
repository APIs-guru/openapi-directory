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
var ReplaceVideosInAlbumAlt1PathParams = /** @class */ (function (_super) {
    __extends(ReplaceVideosInAlbumAlt1PathParams, _super);
    function ReplaceVideosInAlbumAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" }),
        __metadata("design:type", Number)
    ], ReplaceVideosInAlbumAlt1PathParams.prototype, "albumId", void 0);
    return ReplaceVideosInAlbumAlt1PathParams;
}(SpeakeasyBase));
export { ReplaceVideosInAlbumAlt1PathParams };
var ReplaceVideosInAlbumAlt1RequestBody = /** @class */ (function (_super) {
    __extends(ReplaceVideosInAlbumAlt1RequestBody, _super);
    function ReplaceVideosInAlbumAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", String)
    ], ReplaceVideosInAlbumAlt1RequestBody.prototype, "videos", void 0);
    return ReplaceVideosInAlbumAlt1RequestBody;
}(SpeakeasyBase));
export { ReplaceVideosInAlbumAlt1RequestBody };
var ReplaceVideosInAlbumAlt1Security = /** @class */ (function (_super) {
    __extends(ReplaceVideosInAlbumAlt1Security, _super);
    function ReplaceVideosInAlbumAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplaceVideosInAlbumAlt1Security.prototype, "oauth2", void 0);
    return ReplaceVideosInAlbumAlt1Security;
}(SpeakeasyBase));
export { ReplaceVideosInAlbumAlt1Security };
var ReplaceVideosInAlbumAlt1Request = /** @class */ (function (_super) {
    __extends(ReplaceVideosInAlbumAlt1Request, _super);
    function ReplaceVideosInAlbumAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceVideosInAlbumAlt1PathParams)
    ], ReplaceVideosInAlbumAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReplaceVideosInAlbumAlt1RequestBody)
    ], ReplaceVideosInAlbumAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceVideosInAlbumAlt1Security)
    ], ReplaceVideosInAlbumAlt1Request.prototype, "security", void 0);
    return ReplaceVideosInAlbumAlt1Request;
}(SpeakeasyBase));
export { ReplaceVideosInAlbumAlt1Request };
var ReplaceVideosInAlbumAlt1Response = /** @class */ (function (_super) {
    __extends(ReplaceVideosInAlbumAlt1Response, _super);
    function ReplaceVideosInAlbumAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceVideosInAlbumAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceVideosInAlbumAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], ReplaceVideosInAlbumAlt1Response.prototype, "legacyError", void 0);
    return ReplaceVideosInAlbumAlt1Response;
}(SpeakeasyBase));
export { ReplaceVideosInAlbumAlt1Response };
