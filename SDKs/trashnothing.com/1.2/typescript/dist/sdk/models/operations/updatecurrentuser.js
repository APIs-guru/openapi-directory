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
var UpdateCurrentUserRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCurrentUserRequestBody, _super);
    function UpdateCurrentUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=about_me" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "aboutMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=digest" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=digest_photos" }),
        __metadata("design:type", Number)
    ], UpdateCurrentUserRequestBody.prototype, "digestPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=firstname" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=last_listings_view" }),
        __metadata("design:type", Date)
    ], UpdateCurrentUserRequestBody.prototype, "lastListingsView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=lastname" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=old_password" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "oldPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=post_reminders" }),
        __metadata("design:type", Number)
    ], UpdateCurrentUserRequestBody.prototype, "postReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=profile_image_source" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "profileImageSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=public_name" }),
        __metadata("design:type", Number)
    ], UpdateCurrentUserRequestBody.prototype, "publicName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=public_post_sources" }),
        __metadata("design:type", String)
    ], UpdateCurrentUserRequestBody.prototype, "publicPostSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=show_all_group_posts" }),
        __metadata("design:type", Number)
    ], UpdateCurrentUserRequestBody.prototype, "showAllGroupPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=special_notices" }),
        __metadata("design:type", Number)
    ], UpdateCurrentUserRequestBody.prototype, "specialNotices", void 0);
    return UpdateCurrentUserRequestBody;
}(SpeakeasyBase));
export { UpdateCurrentUserRequestBody };
var UpdateCurrentUserRequest = /** @class */ (function (_super) {
    __extends(UpdateCurrentUserRequest, _super);
    function UpdateCurrentUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateCurrentUserRequestBody)
    ], UpdateCurrentUserRequest.prototype, "request", void 0);
    return UpdateCurrentUserRequest;
}(SpeakeasyBase));
export { UpdateCurrentUserRequest };
var UpdateCurrentUserResponse = /** @class */ (function (_super) {
    __extends(UpdateCurrentUserResponse, _super);
    function UpdateCurrentUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateCurrentUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CurrentUser)
    ], UpdateCurrentUserResponse.prototype, "currentUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateCurrentUserResponse.prototype, "statusCode", void 0);
    return UpdateCurrentUserResponse;
}(SpeakeasyBase));
export { UpdateCurrentUserResponse };
