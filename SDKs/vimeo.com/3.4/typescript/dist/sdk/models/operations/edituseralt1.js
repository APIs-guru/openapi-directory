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
export var EditUserAlt1RequestBodyVideosPrivacyCommentsEnum;
(function (EditUserAlt1RequestBodyVideosPrivacyCommentsEnum) {
    EditUserAlt1RequestBodyVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    EditUserAlt1RequestBodyVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    EditUserAlt1RequestBodyVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(EditUserAlt1RequestBodyVideosPrivacyCommentsEnum || (EditUserAlt1RequestBodyVideosPrivacyCommentsEnum = {}));
export var EditUserAlt1RequestBodyVideosPrivacyEmbedEnum;
(function (EditUserAlt1RequestBodyVideosPrivacyEmbedEnum) {
    EditUserAlt1RequestBodyVideosPrivacyEmbedEnum["Private"] = "private";
    EditUserAlt1RequestBodyVideosPrivacyEmbedEnum["Public"] = "public";
    EditUserAlt1RequestBodyVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(EditUserAlt1RequestBodyVideosPrivacyEmbedEnum || (EditUserAlt1RequestBodyVideosPrivacyEmbedEnum = {}));
export var EditUserAlt1RequestBodyVideosPrivacyViewEnum;
(function (EditUserAlt1RequestBodyVideosPrivacyViewEnum) {
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Anybody"] = "anybody";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Contacts"] = "contacts";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Disable"] = "disable";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Nobody"] = "nobody";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Password"] = "password";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    EditUserAlt1RequestBodyVideosPrivacyViewEnum["Users"] = "users";
})(EditUserAlt1RequestBodyVideosPrivacyViewEnum || (EditUserAlt1RequestBodyVideosPrivacyViewEnum = {}));
var EditUserAlt1RequestBodyVideosPrivacy = /** @class */ (function (_super) {
    __extends(EditUserAlt1RequestBodyVideosPrivacy, _super);
    function EditUserAlt1RequestBodyVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], EditUserAlt1RequestBodyVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBodyVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], EditUserAlt1RequestBodyVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBodyVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBodyVideosPrivacy.prototype, "view", void 0);
    return EditUserAlt1RequestBodyVideosPrivacy;
}(SpeakeasyBase));
export { EditUserAlt1RequestBodyVideosPrivacy };
var EditUserAlt1RequestBodyVideos = /** @class */ (function (_super) {
    __extends(EditUserAlt1RequestBodyVideos, _super);
    function EditUserAlt1RequestBodyVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", EditUserAlt1RequestBodyVideosPrivacy)
    ], EditUserAlt1RequestBodyVideos.prototype, "privacy", void 0);
    return EditUserAlt1RequestBodyVideos;
}(SpeakeasyBase));
export { EditUserAlt1RequestBodyVideos };
var EditUserAlt1RequestBody = /** @class */ (function (_super) {
    __extends(EditUserAlt1RequestBody, _super);
    function EditUserAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBody.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], EditUserAlt1RequestBody.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBody.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EditUserAlt1RequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", EditUserAlt1RequestBodyVideos)
    ], EditUserAlt1RequestBody.prototype, "videos", void 0);
    return EditUserAlt1RequestBody;
}(SpeakeasyBase));
export { EditUserAlt1RequestBody };
var EditUserAlt1Request = /** @class */ (function (_super) {
    __extends(EditUserAlt1Request, _super);
    function EditUserAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.user+json" }),
        __metadata("design:type", EditUserAlt1RequestBody)
    ], EditUserAlt1Request.prototype, "request", void 0);
    return EditUserAlt1Request;
}(SpeakeasyBase));
export { EditUserAlt1Request };
var EditUserAlt1Response = /** @class */ (function (_super) {
    __extends(EditUserAlt1Response, _super);
    function EditUserAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditUserAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditUserAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.User)
    ], EditUserAlt1Response.prototype, "user", void 0);
    return EditUserAlt1Response;
}(SpeakeasyBase));
export { EditUserAlt1Response };
