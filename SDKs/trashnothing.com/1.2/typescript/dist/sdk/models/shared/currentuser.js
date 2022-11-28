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
// CurrentUserEmail
/**
 * Data related to the users' email address.
**/
var CurrentUserEmail = /** @class */ (function (_super) {
    __extends(CurrentUserEmail, _super);
    function CurrentUserEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CurrentUserEmail.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bouncing" }),
        __metadata("design:type", Boolean)
    ], CurrentUserEmail.prototype, "bouncing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spam_stop" }),
        __metadata("design:type", Boolean)
    ], CurrentUserEmail.prototype, "spamStop", void 0);
    return CurrentUserEmail;
}(SpeakeasyBase));
export { CurrentUserEmail };
var CurrentUserFeedback = /** @class */ (function (_super) {
    __extends(CurrentUserFeedback, _super);
    function CurrentUserFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent_positive" }),
        __metadata("design:type", Number)
    ], CurrentUserFeedback.prototype, "percentPositive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restriction" }),
        __metadata("design:type", String)
    ], CurrentUserFeedback.prototype, "restriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], CurrentUserFeedback.prototype, "score", void 0);
    return CurrentUserFeedback;
}(SpeakeasyBase));
export { CurrentUserFeedback };
// CurrentUserLocation
/**
 * The users' location.  The location is used to determine which posts are shown to the user (may be null).
**/
var CurrentUserLocation = /** @class */ (function (_super) {
    __extends(CurrentUserLocation, _super);
    function CurrentUserLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], CurrentUserLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], CurrentUserLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CurrentUserLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radius" }),
        __metadata("design:type", Number)
    ], CurrentUserLocation.prototype, "radius", void 0);
    return CurrentUserLocation;
}(SpeakeasyBase));
export { CurrentUserLocation };
// CurrentUserPostLocation
/**
 * Location data used by the user the last time they posted.
**/
var CurrentUserPostLocation = /** @class */ (function (_super) {
    __extends(CurrentUserPostLocation, _super);
    function CurrentUserPostLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], CurrentUserPostLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], CurrentUserPostLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CurrentUserPostLocation.prototype, "name", void 0);
    return CurrentUserPostLocation;
}(SpeakeasyBase));
export { CurrentUserPostLocation };
var CurrentUser = /** @class */ (function (_super) {
    __extends(CurrentUser, _super);
    function CurrentUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=about_me" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "aboutMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest_photos" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "digestPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", CurrentUserEmail)
    ], CurrentUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback" }),
        __metadata("design:type", CurrentUserFeedback)
    ], CurrentUser.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_password" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "hasPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_listings_view" }),
        __metadata("design:type", Date)
    ], CurrentUser.prototype, "lastListingsView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", CurrentUserLocation)
    ], CurrentUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member_since" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "memberSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_location" }),
        __metadata("design:type", CurrentUserPostLocation)
    ], CurrentUser.prototype, "postLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_reminders" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "postReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_image" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_image_source" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "profileImageSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_name" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "publicName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_post_sources" }),
        __metadata("design:type", Array)
    ], CurrentUser.prototype, "publicPostSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_time" }),
        __metadata("design:type", Number)
    ], CurrentUser.prototype, "replyTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_all_group_posts" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "showAllGroupPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signup" }),
        __metadata("design:type", Date)
    ], CurrentUser.prototype, "signup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=special_notices" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "specialNotices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], CurrentUser.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uses_fair_offer_policy" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "usesFairOfferPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], CurrentUser.prototype, "verified", void 0);
    return CurrentUser;
}(SpeakeasyBase));
export { CurrentUser };
