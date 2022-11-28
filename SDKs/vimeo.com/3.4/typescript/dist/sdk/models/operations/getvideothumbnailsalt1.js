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
var GetVideoThumbnailsAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetVideoThumbnailsAlt1PathParams, _super);
    function GetVideoThumbnailsAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetVideoThumbnailsAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetVideoThumbnailsAlt1PathParams.prototype, "videoId", void 0);
    return GetVideoThumbnailsAlt1PathParams;
}(SpeakeasyBase));
export { GetVideoThumbnailsAlt1PathParams };
var GetVideoThumbnailsAlt1QueryParams = /** @class */ (function (_super) {
    __extends(GetVideoThumbnailsAlt1QueryParams, _super);
    function GetVideoThumbnailsAlt1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetVideoThumbnailsAlt1QueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetVideoThumbnailsAlt1QueryParams.prototype, "perPage", void 0);
    return GetVideoThumbnailsAlt1QueryParams;
}(SpeakeasyBase));
export { GetVideoThumbnailsAlt1QueryParams };
var GetVideoThumbnailsAlt1Request = /** @class */ (function (_super) {
    __extends(GetVideoThumbnailsAlt1Request, _super);
    function GetVideoThumbnailsAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoThumbnailsAlt1PathParams)
    ], GetVideoThumbnailsAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideoThumbnailsAlt1QueryParams)
    ], GetVideoThumbnailsAlt1Request.prototype, "queryParams", void 0);
    return GetVideoThumbnailsAlt1Request;
}(SpeakeasyBase));
export { GetVideoThumbnailsAlt1Request };
var GetVideoThumbnailsAlt1Response = /** @class */ (function (_super) {
    __extends(GetVideoThumbnailsAlt1Response, _super);
    function GetVideoThumbnailsAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideoThumbnailsAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideoThumbnailsAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Picture }),
        __metadata("design:type", Array)
    ], GetVideoThumbnailsAlt1Response.prototype, "pictures", void 0);
    return GetVideoThumbnailsAlt1Response;
}(SpeakeasyBase));
export { GetVideoThumbnailsAlt1Response };
