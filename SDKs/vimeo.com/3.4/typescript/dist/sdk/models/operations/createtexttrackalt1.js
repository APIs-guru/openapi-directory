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
var CreateTextTrackAlt1PathParams = /** @class */ (function (_super) {
    __extends(CreateTextTrackAlt1PathParams, _super);
    function CreateTextTrackAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], CreateTextTrackAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateTextTrackAlt1PathParams.prototype, "videoId", void 0);
    return CreateTextTrackAlt1PathParams;
}(SpeakeasyBase));
export { CreateTextTrackAlt1PathParams };
export var CreateTextTrackAlt1RequestBodyTypeEnum;
(function (CreateTextTrackAlt1RequestBodyTypeEnum) {
    CreateTextTrackAlt1RequestBodyTypeEnum["Captions"] = "captions";
    CreateTextTrackAlt1RequestBodyTypeEnum["Chapters"] = "chapters";
    CreateTextTrackAlt1RequestBodyTypeEnum["Descriptions"] = "descriptions";
    CreateTextTrackAlt1RequestBodyTypeEnum["Metadata"] = "metadata";
    CreateTextTrackAlt1RequestBodyTypeEnum["Subtitles"] = "subtitles";
})(CreateTextTrackAlt1RequestBodyTypeEnum || (CreateTextTrackAlt1RequestBodyTypeEnum = {}));
var CreateTextTrackAlt1RequestBody = /** @class */ (function (_super) {
    __extends(CreateTextTrackAlt1RequestBody, _super);
    function CreateTextTrackAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateTextTrackAlt1RequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CreateTextTrackAlt1RequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateTextTrackAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateTextTrackAlt1RequestBody.prototype, "type", void 0);
    return CreateTextTrackAlt1RequestBody;
}(SpeakeasyBase));
export { CreateTextTrackAlt1RequestBody };
var CreateTextTrackAlt1Security = /** @class */ (function (_super) {
    __extends(CreateTextTrackAlt1Security, _super);
    function CreateTextTrackAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateTextTrackAlt1Security.prototype, "oauth2", void 0);
    return CreateTextTrackAlt1Security;
}(SpeakeasyBase));
export { CreateTextTrackAlt1Security };
var CreateTextTrackAlt1Request = /** @class */ (function (_super) {
    __extends(CreateTextTrackAlt1Request, _super);
    function CreateTextTrackAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTextTrackAlt1PathParams)
    ], CreateTextTrackAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" }),
        __metadata("design:type", CreateTextTrackAlt1RequestBody)
    ], CreateTextTrackAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTextTrackAlt1Security)
    ], CreateTextTrackAlt1Request.prototype, "security", void 0);
    return CreateTextTrackAlt1Request;
}(SpeakeasyBase));
export { CreateTextTrackAlt1Request };
var CreateTextTrackAlt1Response = /** @class */ (function (_super) {
    __extends(CreateTextTrackAlt1Response, _super);
    function CreateTextTrackAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTextTrackAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTextTrackAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateTextTrackAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TextTrack)
    ], CreateTextTrackAlt1Response.prototype, "textTrack", void 0);
    return CreateTextTrackAlt1Response;
}(SpeakeasyBase));
export { CreateTextTrackAlt1Response };
