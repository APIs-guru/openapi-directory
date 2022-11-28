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
var CreateVideoThumbnailAlt1PathParams = /** @class */ (function (_super) {
    __extends(CreateVideoThumbnailAlt1PathParams, _super);
    function CreateVideoThumbnailAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], CreateVideoThumbnailAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateVideoThumbnailAlt1PathParams.prototype, "videoId", void 0);
    return CreateVideoThumbnailAlt1PathParams;
}(SpeakeasyBase));
export { CreateVideoThumbnailAlt1PathParams };
var CreateVideoThumbnailAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateVideoThumbnailAlt1RequestBody, _super);
    function CreateVideoThumbnailAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateVideoThumbnailAlt1RequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], CreateVideoThumbnailAlt1RequestBody.prototype, "time", void 0);
    return CreateVideoThumbnailAlt1RequestBody;
}(SpeakeasyBase));
export { CreateVideoThumbnailAlt1RequestBody };
var CreateVideoThumbnailAlt1Security = /** @class */ (function (_super) {
    __extends(CreateVideoThumbnailAlt1Security, _super);
    function CreateVideoThumbnailAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateVideoThumbnailAlt1Security.prototype, "oauth2", void 0);
    return CreateVideoThumbnailAlt1Security;
}(SpeakeasyBase));
export { CreateVideoThumbnailAlt1Security };
var CreateVideoThumbnailAlt1Request = /** @class */ (function (_super) {
    __extends(CreateVideoThumbnailAlt1Request, _super);
    function CreateVideoThumbnailAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVideoThumbnailAlt1PathParams)
    ], CreateVideoThumbnailAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" }),
        __metadata("design:type", CreateVideoThumbnailAlt1RequestBody)
    ], CreateVideoThumbnailAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVideoThumbnailAlt1Security)
    ], CreateVideoThumbnailAlt1Request.prototype, "security", void 0);
    return CreateVideoThumbnailAlt1Request;
}(SpeakeasyBase));
export { CreateVideoThumbnailAlt1Request };
var CreateVideoThumbnailAlt1Response = /** @class */ (function (_super) {
    __extends(CreateVideoThumbnailAlt1Response, _super);
    function CreateVideoThumbnailAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVideoThumbnailAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVideoThumbnailAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], CreateVideoThumbnailAlt1Response.prototype, "picture", void 0);
    return CreateVideoThumbnailAlt1Response;
}(SpeakeasyBase));
export { CreateVideoThumbnailAlt1Response };
