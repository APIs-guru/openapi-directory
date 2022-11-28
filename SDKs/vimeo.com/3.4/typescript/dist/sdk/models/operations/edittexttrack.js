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
var EditTextTrackPathParams = /** @class */ (function (_super) {
    __extends(EditTextTrackPathParams, _super);
    function EditTextTrackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=texttrack_id" }),
        __metadata("design:type", Number)
    ], EditTextTrackPathParams.prototype, "texttrackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], EditTextTrackPathParams.prototype, "videoId", void 0);
    return EditTextTrackPathParams;
}(SpeakeasyBase));
export { EditTextTrackPathParams };
export var EditTextTrackRequestBodyTypeEnum;
(function (EditTextTrackRequestBodyTypeEnum) {
    EditTextTrackRequestBodyTypeEnum["Captions"] = "captions";
    EditTextTrackRequestBodyTypeEnum["Chapters"] = "chapters";
    EditTextTrackRequestBodyTypeEnum["Descriptions"] = "descriptions";
    EditTextTrackRequestBodyTypeEnum["Metadata"] = "metadata";
    EditTextTrackRequestBodyTypeEnum["Subtitles"] = "subtitles";
})(EditTextTrackRequestBodyTypeEnum || (EditTextTrackRequestBodyTypeEnum = {}));
var EditTextTrackRequestBody = /** @class */ (function (_super) {
    __extends(EditTextTrackRequestBody, _super);
    function EditTextTrackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EditTextTrackRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], EditTextTrackRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditTextTrackRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EditTextTrackRequestBody.prototype, "type", void 0);
    return EditTextTrackRequestBody;
}(SpeakeasyBase));
export { EditTextTrackRequestBody };
var EditTextTrackSecurity = /** @class */ (function (_super) {
    __extends(EditTextTrackSecurity, _super);
    function EditTextTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditTextTrackSecurity.prototype, "oauth2", void 0);
    return EditTextTrackSecurity;
}(SpeakeasyBase));
export { EditTextTrackSecurity };
var EditTextTrackRequest = /** @class */ (function (_super) {
    __extends(EditTextTrackRequest, _super);
    function EditTextTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditTextTrackPathParams)
    ], EditTextTrackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" }),
        __metadata("design:type", EditTextTrackRequestBody)
    ], EditTextTrackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditTextTrackSecurity)
    ], EditTextTrackRequest.prototype, "security", void 0);
    return EditTextTrackRequest;
}(SpeakeasyBase));
export { EditTextTrackRequest };
var EditTextTrackResponse = /** @class */ (function (_super) {
    __extends(EditTextTrackResponse, _super);
    function EditTextTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditTextTrackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditTextTrackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], EditTextTrackResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TextTrack)
    ], EditTextTrackResponse.prototype, "textTrack", void 0);
    return EditTextTrackResponse;
}(SpeakeasyBase));
export { EditTextTrackResponse };
