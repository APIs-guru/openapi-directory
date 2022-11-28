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
import { Picture } from "./picture";
export var UserAccountEnum;
(function (UserAccountEnum) {
    UserAccountEnum["Basic"] = "basic";
    UserAccountEnum["Business"] = "business";
    UserAccountEnum["LiveBusiness"] = "live_business";
    UserAccountEnum["LivePremium"] = "live_premium";
    UserAccountEnum["LivePro"] = "live_pro";
    UserAccountEnum["Plus"] = "plus";
    UserAccountEnum["Pro"] = "pro";
    UserAccountEnum["ProUnlimited"] = "pro_unlimited";
    UserAccountEnum["Producer"] = "producer";
})(UserAccountEnum || (UserAccountEnum = {}));
// UserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var UserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsAlbums, _super);
    function UserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return UserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { UserMetadataConnectionsAlbums };
// UserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var UserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsAppearances, _super);
    function UserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return UserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { UserMetadataConnectionsAppearances };
// UserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var UserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsBlock, _super);
    function UserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsBlock.prototype, "uri", void 0);
    return UserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { UserMetadataConnectionsBlock };
// UserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var UserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsCategories, _super);
    function UserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsCategories.prototype, "uri", void 0);
    return UserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { UserMetadataConnectionsCategories };
// UserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var UserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsChannels, _super);
    function UserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsChannels.prototype, "uri", void 0);
    return UserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { UserMetadataConnectionsChannels };
// UserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var UserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsFeed, _super);
    function UserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsFeed.prototype, "uri", void 0);
    return UserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { UserMetadataConnectionsFeed };
// UserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var UserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsFolders, _super);
    function UserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsFolders.prototype, "uri", void 0);
    return UserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { UserMetadataConnectionsFolders };
// UserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var UserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsFollowers, _super);
    function UserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return UserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { UserMetadataConnectionsFollowers };
// UserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var UserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsFollowing, _super);
    function UserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return UserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { UserMetadataConnectionsFollowing };
// UserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var UserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsGroups, _super);
    function UserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsGroups.prototype, "uri", void 0);
    return UserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { UserMetadataConnectionsGroups };
// UserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var UserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsLikes, _super);
    function UserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsLikes.prototype, "uri", void 0);
    return UserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { UserMetadataConnectionsLikes };
// UserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var UserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsModeratedChannels, _super);
    function UserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return UserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { UserMetadataConnectionsModeratedChannels };
// UserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var UserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsPictures, _super);
    function UserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsPictures.prototype, "uri", void 0);
    return UserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { UserMetadataConnectionsPictures };
// UserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var UserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsPortfolios, _super);
    function UserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return UserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { UserMetadataConnectionsPortfolios };
// UserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var UserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsRecommendedChannels, _super);
    function UserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return UserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { UserMetadataConnectionsRecommendedChannels };
// UserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var UserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsRecommendedUsers, _super);
    function UserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return UserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { UserMetadataConnectionsRecommendedUsers };
// UserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var UserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsShared, _super);
    function UserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsShared.prototype, "uri", void 0);
    return UserMetadataConnectionsShared;
}(SpeakeasyBase));
export { UserMetadataConnectionsShared };
// UserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var UserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsVideos, _super);
    function UserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsVideos.prototype, "uri", void 0);
    return UserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { UserMetadataConnectionsVideos };
// UserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var UserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsWatchedVideos, _super);
    function UserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return UserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { UserMetadataConnectionsWatchedVideos };
// UserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var UserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(UserMetadataConnectionsWatchlater, _super);
    function UserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], UserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return UserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { UserMetadataConnectionsWatchlater };
// UserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var UserMetadataConnections = /** @class */ (function (_super) {
    __extends(UserMetadataConnections, _super);
    function UserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", UserMetadataConnectionsAlbums)
    ], UserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", UserMetadataConnectionsAppearances)
    ], UserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", UserMetadataConnectionsBlock)
    ], UserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", UserMetadataConnectionsCategories)
    ], UserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", UserMetadataConnectionsChannels)
    ], UserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", UserMetadataConnectionsFeed)
    ], UserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", UserMetadataConnectionsFolders)
    ], UserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", UserMetadataConnectionsFollowers)
    ], UserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", UserMetadataConnectionsFollowing)
    ], UserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", UserMetadataConnectionsGroups)
    ], UserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", UserMetadataConnectionsLikes)
    ], UserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", UserMetadataConnectionsModeratedChannels)
    ], UserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", UserMetadataConnectionsPictures)
    ], UserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", UserMetadataConnectionsPortfolios)
    ], UserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", UserMetadataConnectionsRecommendedChannels)
    ], UserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", UserMetadataConnectionsRecommendedUsers)
    ], UserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", UserMetadataConnectionsShared)
    ], UserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", UserMetadataConnectionsVideos)
    ], UserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", UserMetadataConnectionsWatchedVideos)
    ], UserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", UserMetadataConnectionsWatchlater)
    ], UserMetadataConnections.prototype, "watchlater", void 0);
    return UserMetadataConnections;
}(SpeakeasyBase));
export { UserMetadataConnections };
var UserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(UserMetadataInteractionsAddPrivacyUser, _super);
    function UserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return UserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { UserMetadataInteractionsAddPrivacyUser };
// UserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var UserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(UserMetadataInteractionsBlock, _super);
    function UserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], UserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], UserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataInteractionsBlock.prototype, "uri", void 0);
    return UserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { UserMetadataInteractionsBlock };
// UserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var UserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(UserMetadataInteractionsFollow, _super);
    function UserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], UserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataInteractionsFollow.prototype, "uri", void 0);
    return UserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { UserMetadataInteractionsFollow };
// UserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var UserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(UserMetadataInteractionsReport, _super);
    function UserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], UserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], UserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], UserMetadataInteractionsReport.prototype, "uri", void 0);
    return UserMetadataInteractionsReport;
}(SpeakeasyBase));
export { UserMetadataInteractionsReport };
var UserMetadataInteractions = /** @class */ (function (_super) {
    __extends(UserMetadataInteractions, _super);
    function UserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", UserMetadataInteractionsAddPrivacyUser)
    ], UserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", UserMetadataInteractionsBlock)
    ], UserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", UserMetadataInteractionsFollow)
    ], UserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", UserMetadataInteractionsReport)
    ], UserMetadataInteractions.prototype, "report", void 0);
    return UserMetadataInteractions;
}(SpeakeasyBase));
export { UserMetadataInteractions };
// UserMetadata
/**
 * The user's metadata.
**/
var UserMetadata = /** @class */ (function (_super) {
    __extends(UserMetadata, _super);
    function UserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", UserMetadataConnections)
    ], UserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", UserMetadataInteractions)
    ], UserMetadata.prototype, "interactions", void 0);
    return UserMetadata;
}(SpeakeasyBase));
export { UserMetadata };
export var UserPreferencesVideosPrivacyCommentsEnum;
(function (UserPreferencesVideosPrivacyCommentsEnum) {
    UserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    UserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    UserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(UserPreferencesVideosPrivacyCommentsEnum || (UserPreferencesVideosPrivacyCommentsEnum = {}));
export var UserPreferencesVideosPrivacyEmbedEnum;
(function (UserPreferencesVideosPrivacyEmbedEnum) {
    UserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    UserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    UserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(UserPreferencesVideosPrivacyEmbedEnum || (UserPreferencesVideosPrivacyEmbedEnum = {}));
export var UserPreferencesVideosPrivacyViewEnum;
(function (UserPreferencesVideosPrivacyViewEnum) {
    UserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    UserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    UserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    UserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    UserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    UserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    UserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(UserPreferencesVideosPrivacyViewEnum || (UserPreferencesVideosPrivacyViewEnum = {}));
var UserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(UserPreferencesVideosPrivacy, _super);
    function UserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], UserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], UserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], UserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], UserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], UserPreferencesVideosPrivacy.prototype, "view", void 0);
    return UserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { UserPreferencesVideosPrivacy };
var UserPreferencesVideos = /** @class */ (function (_super) {
    __extends(UserPreferencesVideos, _super);
    function UserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", UserPreferencesVideosPrivacy)
    ], UserPreferencesVideos.prototype, "privacy", void 0);
    return UserPreferencesVideos;
}(SpeakeasyBase));
export { UserPreferencesVideos };
var UserPreferences = /** @class */ (function (_super) {
    __extends(UserPreferences, _super);
    function UserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", UserPreferencesVideos)
    ], UserPreferences.prototype, "videos", void 0);
    return UserPreferences;
}(SpeakeasyBase));
export { UserPreferences };
// UserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var UserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(UserUploadQuotaLifetime, _super);
    function UserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaLifetime.prototype, "used", void 0);
    return UserUploadQuotaLifetime;
}(SpeakeasyBase));
export { UserUploadQuotaLifetime };
// UserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var UserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(UserUploadQuotaPeriodic, _super);
    function UserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], UserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaPeriodic.prototype, "used", void 0);
    return UserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { UserUploadQuotaPeriodic };
export var UserUploadQuotaSpaceShowingEnum;
(function (UserUploadQuotaSpaceShowingEnum) {
    UserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    UserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(UserUploadQuotaSpaceShowingEnum || (UserUploadQuotaSpaceShowingEnum = {}));
// UserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var UserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(UserUploadQuotaSpace, _super);
    function UserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], UserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], UserUploadQuotaSpace.prototype, "used", void 0);
    return UserUploadQuotaSpace;
}(SpeakeasyBase));
export { UserUploadQuotaSpace };
// UserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var UserUploadQuota = /** @class */ (function (_super) {
    __extends(UserUploadQuota, _super);
    function UserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", UserUploadQuotaLifetime)
    ], UserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", UserUploadQuotaPeriodic)
    ], UserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", UserUploadQuotaSpace)
    ], UserUploadQuota.prototype, "space", void 0);
    return UserUploadQuota;
}(SpeakeasyBase));
export { UserUploadQuota };
var UserWebsites = /** @class */ (function (_super) {
    __extends(UserWebsites, _super);
    function UserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], UserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserWebsites.prototype, "name", void 0);
    return UserWebsites;
}(SpeakeasyBase));
export { UserWebsites };
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], User.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], User.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], User.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], User.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], User.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], User.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", UserMetadata)
    ], User.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], User.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", UserPreferences)
    ], User.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], User.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", UserUploadQuota)
    ], User.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], User.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: UserWebsites }),
        __metadata("design:type", Array)
    ], User.prototype, "websites", void 0);
    return User;
}(SpeakeasyBase));
export { User };
