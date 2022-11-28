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
var EditUserPathParams = /** @class */ (function (_super) {
    __extends(EditUserPathParams, _super);
    function EditUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], EditUserPathParams.prototype, "userId", void 0);
    return EditUserPathParams;
}(SpeakeasyBase));
export { EditUserPathParams };
export var EditUserRequestBodyVideosPrivacyCommentsEnum;
(function (EditUserRequestBodyVideosPrivacyCommentsEnum) {
    EditUserRequestBodyVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    EditUserRequestBodyVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    EditUserRequestBodyVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(EditUserRequestBodyVideosPrivacyCommentsEnum || (EditUserRequestBodyVideosPrivacyCommentsEnum = {}));
export var EditUserRequestBodyVideosPrivacyEmbedEnum;
(function (EditUserRequestBodyVideosPrivacyEmbedEnum) {
    EditUserRequestBodyVideosPrivacyEmbedEnum["Private"] = "private";
    EditUserRequestBodyVideosPrivacyEmbedEnum["Public"] = "public";
    EditUserRequestBodyVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(EditUserRequestBodyVideosPrivacyEmbedEnum || (EditUserRequestBodyVideosPrivacyEmbedEnum = {}));
export var EditUserRequestBodyVideosPrivacyViewEnum;
(function (EditUserRequestBodyVideosPrivacyViewEnum) {
    EditUserRequestBodyVideosPrivacyViewEnum["Anybody"] = "anybody";
    EditUserRequestBodyVideosPrivacyViewEnum["Contacts"] = "contacts";
    EditUserRequestBodyVideosPrivacyViewEnum["Disable"] = "disable";
    EditUserRequestBodyVideosPrivacyViewEnum["Nobody"] = "nobody";
    EditUserRequestBodyVideosPrivacyViewEnum["Password"] = "password";
    EditUserRequestBodyVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    EditUserRequestBodyVideosPrivacyViewEnum["Users"] = "users";
})(EditUserRequestBodyVideosPrivacyViewEnum || (EditUserRequestBodyVideosPrivacyViewEnum = {}));
var EditUserRequestBodyVideosPrivacy = /** @class */ (function (_super) {
    __extends(EditUserRequestBodyVideosPrivacy, _super);
    function EditUserRequestBodyVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], EditUserRequestBodyVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], EditUserRequestBodyVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], EditUserRequestBodyVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], EditUserRequestBodyVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], EditUserRequestBodyVideosPrivacy.prototype, "view", void 0);
    return EditUserRequestBodyVideosPrivacy;
}(SpeakeasyBase));
export { EditUserRequestBodyVideosPrivacy };
var EditUserRequestBodyVideos = /** @class */ (function (_super) {
    __extends(EditUserRequestBodyVideos, _super);
    function EditUserRequestBodyVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", EditUserRequestBodyVideosPrivacy)
    ], EditUserRequestBodyVideos.prototype, "privacy", void 0);
    return EditUserRequestBodyVideos;
}(SpeakeasyBase));
export { EditUserRequestBodyVideos };
var EditUserRequestBody = /** @class */ (function (_super) {
    __extends(EditUserRequestBody, _super);
    function EditUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], EditUserRequestBody.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], EditUserRequestBody.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EditUserRequestBody.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], EditUserRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EditUserRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", EditUserRequestBodyVideos)
    ], EditUserRequestBody.prototype, "videos", void 0);
    return EditUserRequestBody;
}(SpeakeasyBase));
export { EditUserRequestBody };
var EditUserRequest = /** @class */ (function (_super) {
    __extends(EditUserRequest, _super);
    function EditUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditUserPathParams)
    ], EditUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.user+json" }),
        __metadata("design:type", EditUserRequestBody)
    ], EditUserRequest.prototype, "request", void 0);
    return EditUserRequest;
}(SpeakeasyBase));
export { EditUserRequest };
var EditUserResponse = /** @class */ (function (_super) {
    __extends(EditUserResponse, _super);
    function EditUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], EditUserResponse.prototype, "user", void 0);
    return EditUserResponse;
}(SpeakeasyBase));
export { EditUserResponse };
