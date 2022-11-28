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
var CreateTextTrackPathParams = /** @class */ (function (_super) {
    __extends(CreateTextTrackPathParams, _super);
    function CreateTextTrackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], CreateTextTrackPathParams.prototype, "videoId", void 0);
    return CreateTextTrackPathParams;
}(SpeakeasyBase));
export { CreateTextTrackPathParams };
export var CreateTextTrackRequestBodyTypeEnum;
(function (CreateTextTrackRequestBodyTypeEnum) {
    CreateTextTrackRequestBodyTypeEnum["Captions"] = "captions";
    CreateTextTrackRequestBodyTypeEnum["Chapters"] = "chapters";
    CreateTextTrackRequestBodyTypeEnum["Descriptions"] = "descriptions";
    CreateTextTrackRequestBodyTypeEnum["Metadata"] = "metadata";
    CreateTextTrackRequestBodyTypeEnum["Subtitles"] = "subtitles";
})(CreateTextTrackRequestBodyTypeEnum || (CreateTextTrackRequestBodyTypeEnum = {}));
var CreateTextTrackRequestBody = /** @class */ (function (_super) {
    __extends(CreateTextTrackRequestBody, _super);
    function CreateTextTrackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateTextTrackRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CreateTextTrackRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateTextTrackRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateTextTrackRequestBody.prototype, "type", void 0);
    return CreateTextTrackRequestBody;
}(SpeakeasyBase));
export { CreateTextTrackRequestBody };
var CreateTextTrackSecurity = /** @class */ (function (_super) {
    __extends(CreateTextTrackSecurity, _super);
    function CreateTextTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateTextTrackSecurity.prototype, "oauth2", void 0);
    return CreateTextTrackSecurity;
}(SpeakeasyBase));
export { CreateTextTrackSecurity };
var CreateTextTrackRequest = /** @class */ (function (_super) {
    __extends(CreateTextTrackRequest, _super);
    function CreateTextTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTextTrackPathParams)
    ], CreateTextTrackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" }),
        __metadata("design:type", CreateTextTrackRequestBody)
    ], CreateTextTrackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTextTrackSecurity)
    ], CreateTextTrackRequest.prototype, "security", void 0);
    return CreateTextTrackRequest;
}(SpeakeasyBase));
export { CreateTextTrackRequest };
var CreateTextTrackResponse = /** @class */ (function (_super) {
    __extends(CreateTextTrackResponse, _super);
    function CreateTextTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTextTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTextTrackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateTextTrackResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TextTrack)
    ], CreateTextTrackResponse.prototype, "textTrack", void 0);
    return CreateTextTrackResponse;
}(SpeakeasyBase));
export { CreateTextTrackResponse };
