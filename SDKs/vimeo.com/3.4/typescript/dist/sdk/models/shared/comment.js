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
// CommentMetadataConnectionsReplies
/**
 * Information about this comment's replies.
**/
var CommentMetadataConnectionsReplies = /** @class */ (function (_super) {
    __extends(CommentMetadataConnectionsReplies, _super);
    function CommentMetadataConnectionsReplies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentMetadataConnectionsReplies.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentMetadataConnectionsReplies.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentMetadataConnectionsReplies.prototype, "uri", void 0);
    return CommentMetadataConnectionsReplies;
}(SpeakeasyBase));
export { CommentMetadataConnectionsReplies };
var CommentMetadataConnections = /** @class */ (function (_super) {
    __extends(CommentMetadataConnections, _super);
    function CommentMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies" }),
        __metadata("design:type", CommentMetadataConnectionsReplies)
    ], CommentMetadataConnections.prototype, "replies", void 0);
    return CommentMetadataConnections;
}(SpeakeasyBase));
export { CommentMetadataConnections };
var CommentMetadata = /** @class */ (function (_super) {
    __extends(CommentMetadata, _super);
    function CommentMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", CommentMetadataConnections)
    ], CommentMetadata.prototype, "connections", void 0);
    return CommentMetadata;
}(SpeakeasyBase));
export { CommentMetadata };
export var CommentTypeEnum;
(function (CommentTypeEnum) {
    CommentTypeEnum["Video"] = "video";
})(CommentTypeEnum || (CommentTypeEnum = {}));
export var CommentUserAccountEnum;
(function (CommentUserAccountEnum) {
    CommentUserAccountEnum["Basic"] = "basic";
    CommentUserAccountEnum["Business"] = "business";
    CommentUserAccountEnum["LiveBusiness"] = "live_business";
    CommentUserAccountEnum["LivePremium"] = "live_premium";
    CommentUserAccountEnum["LivePro"] = "live_pro";
    CommentUserAccountEnum["Plus"] = "plus";
    CommentUserAccountEnum["Pro"] = "pro";
    CommentUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    CommentUserAccountEnum["Producer"] = "producer";
})(CommentUserAccountEnum || (CommentUserAccountEnum = {}));
// CommentUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var CommentUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsAlbums, _super);
    function CommentUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsAlbums };
// CommentUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var CommentUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsAppearances, _super);
    function CommentUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsAppearances };
// CommentUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var CommentUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsBlock, _super);
    function CommentUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsBlock };
// CommentUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var CommentUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsCategories, _super);
    function CommentUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsCategories };
// CommentUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var CommentUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsChannels, _super);
    function CommentUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsChannels };
// CommentUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var CommentUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsFeed, _super);
    function CommentUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsFeed };
// CommentUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var CommentUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsFolders, _super);
    function CommentUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsFolders };
// CommentUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var CommentUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsFollowers, _super);
    function CommentUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsFollowers };
// CommentUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var CommentUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsFollowing, _super);
    function CommentUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsFollowing };
// CommentUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var CommentUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsGroups, _super);
    function CommentUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsGroups };
// CommentUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var CommentUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsLikes, _super);
    function CommentUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsLikes };
// CommentUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var CommentUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsModeratedChannels, _super);
    function CommentUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsModeratedChannels };
// CommentUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var CommentUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsPictures, _super);
    function CommentUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsPictures };
// CommentUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var CommentUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsPortfolios, _super);
    function CommentUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsPortfolios };
// CommentUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var CommentUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsRecommendedChannels, _super);
    function CommentUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsRecommendedChannels };
// CommentUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var CommentUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsRecommendedUsers, _super);
    function CommentUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsRecommendedUsers };
// CommentUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var CommentUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsShared, _super);
    function CommentUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsShared.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsShared;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsShared };
// CommentUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var CommentUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsVideos, _super);
    function CommentUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsVideos };
// CommentUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var CommentUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsWatchedVideos, _super);
    function CommentUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsWatchedVideos };
// CommentUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var CommentUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnectionsWatchlater, _super);
    function CommentUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CommentUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return CommentUserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { CommentUserMetadataConnectionsWatchlater };
// CommentUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var CommentUserMetadataConnections = /** @class */ (function (_super) {
    __extends(CommentUserMetadataConnections, _super);
    function CommentUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", CommentUserMetadataConnectionsAlbums)
    ], CommentUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", CommentUserMetadataConnectionsAppearances)
    ], CommentUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", CommentUserMetadataConnectionsBlock)
    ], CommentUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", CommentUserMetadataConnectionsCategories)
    ], CommentUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", CommentUserMetadataConnectionsChannels)
    ], CommentUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", CommentUserMetadataConnectionsFeed)
    ], CommentUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", CommentUserMetadataConnectionsFolders)
    ], CommentUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", CommentUserMetadataConnectionsFollowers)
    ], CommentUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", CommentUserMetadataConnectionsFollowing)
    ], CommentUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", CommentUserMetadataConnectionsGroups)
    ], CommentUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", CommentUserMetadataConnectionsLikes)
    ], CommentUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", CommentUserMetadataConnectionsModeratedChannels)
    ], CommentUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", CommentUserMetadataConnectionsPictures)
    ], CommentUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", CommentUserMetadataConnectionsPortfolios)
    ], CommentUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", CommentUserMetadataConnectionsRecommendedChannels)
    ], CommentUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", CommentUserMetadataConnectionsRecommendedUsers)
    ], CommentUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", CommentUserMetadataConnectionsShared)
    ], CommentUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", CommentUserMetadataConnectionsVideos)
    ], CommentUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", CommentUserMetadataConnectionsWatchedVideos)
    ], CommentUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", CommentUserMetadataConnectionsWatchlater)
    ], CommentUserMetadataConnections.prototype, "watchlater", void 0);
    return CommentUserMetadataConnections;
}(SpeakeasyBase));
export { CommentUserMetadataConnections };
var CommentUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(CommentUserMetadataInteractionsAddPrivacyUser, _super);
    function CommentUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return CommentUserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { CommentUserMetadataInteractionsAddPrivacyUser };
// CommentUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var CommentUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(CommentUserMetadataInteractionsBlock, _super);
    function CommentUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], CommentUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], CommentUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return CommentUserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { CommentUserMetadataInteractionsBlock };
// CommentUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var CommentUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(CommentUserMetadataInteractionsFollow, _super);
    function CommentUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], CommentUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return CommentUserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { CommentUserMetadataInteractionsFollow };
// CommentUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var CommentUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(CommentUserMetadataInteractionsReport, _super);
    function CommentUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], CommentUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUserMetadataInteractionsReport.prototype, "uri", void 0);
    return CommentUserMetadataInteractionsReport;
}(SpeakeasyBase));
export { CommentUserMetadataInteractionsReport };
var CommentUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(CommentUserMetadataInteractions, _super);
    function CommentUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", CommentUserMetadataInteractionsAddPrivacyUser)
    ], CommentUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", CommentUserMetadataInteractionsBlock)
    ], CommentUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", CommentUserMetadataInteractionsFollow)
    ], CommentUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", CommentUserMetadataInteractionsReport)
    ], CommentUserMetadataInteractions.prototype, "report", void 0);
    return CommentUserMetadataInteractions;
}(SpeakeasyBase));
export { CommentUserMetadataInteractions };
// CommentUserMetadata
/**
 * The user's metadata.
**/
var CommentUserMetadata = /** @class */ (function (_super) {
    __extends(CommentUserMetadata, _super);
    function CommentUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", CommentUserMetadataConnections)
    ], CommentUserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", CommentUserMetadataInteractions)
    ], CommentUserMetadata.prototype, "interactions", void 0);
    return CommentUserMetadata;
}(SpeakeasyBase));
export { CommentUserMetadata };
export var CommentUserPreferencesVideosPrivacyCommentsEnum;
(function (CommentUserPreferencesVideosPrivacyCommentsEnum) {
    CommentUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    CommentUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    CommentUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(CommentUserPreferencesVideosPrivacyCommentsEnum || (CommentUserPreferencesVideosPrivacyCommentsEnum = {}));
export var CommentUserPreferencesVideosPrivacyEmbedEnum;
(function (CommentUserPreferencesVideosPrivacyEmbedEnum) {
    CommentUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    CommentUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    CommentUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(CommentUserPreferencesVideosPrivacyEmbedEnum || (CommentUserPreferencesVideosPrivacyEmbedEnum = {}));
export var CommentUserPreferencesVideosPrivacyViewEnum;
(function (CommentUserPreferencesVideosPrivacyViewEnum) {
    CommentUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    CommentUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    CommentUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    CommentUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    CommentUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    CommentUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    CommentUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(CommentUserPreferencesVideosPrivacyViewEnum || (CommentUserPreferencesVideosPrivacyViewEnum = {}));
var CommentUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(CommentUserPreferencesVideosPrivacy, _super);
    function CommentUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], CommentUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], CommentUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], CommentUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], CommentUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], CommentUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return CommentUserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { CommentUserPreferencesVideosPrivacy };
var CommentUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(CommentUserPreferencesVideos, _super);
    function CommentUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", CommentUserPreferencesVideosPrivacy)
    ], CommentUserPreferencesVideos.prototype, "privacy", void 0);
    return CommentUserPreferencesVideos;
}(SpeakeasyBase));
export { CommentUserPreferencesVideos };
var CommentUserPreferences = /** @class */ (function (_super) {
    __extends(CommentUserPreferences, _super);
    function CommentUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", CommentUserPreferencesVideos)
    ], CommentUserPreferences.prototype, "videos", void 0);
    return CommentUserPreferences;
}(SpeakeasyBase));
export { CommentUserPreferences };
// CommentUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var CommentUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(CommentUserUploadQuotaLifetime, _super);
    function CommentUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaLifetime.prototype, "used", void 0);
    return CommentUserUploadQuotaLifetime;
}(SpeakeasyBase));
export { CommentUserUploadQuotaLifetime };
// CommentUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var CommentUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(CommentUserUploadQuotaPeriodic, _super);
    function CommentUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], CommentUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaPeriodic.prototype, "used", void 0);
    return CommentUserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { CommentUserUploadQuotaPeriodic };
export var CommentUserUploadQuotaSpaceShowingEnum;
(function (CommentUserUploadQuotaSpaceShowingEnum) {
    CommentUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    CommentUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(CommentUserUploadQuotaSpaceShowingEnum || (CommentUserUploadQuotaSpaceShowingEnum = {}));
// CommentUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var CommentUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(CommentUserUploadQuotaSpace, _super);
    function CommentUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], CommentUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], CommentUserUploadQuotaSpace.prototype, "used", void 0);
    return CommentUserUploadQuotaSpace;
}(SpeakeasyBase));
export { CommentUserUploadQuotaSpace };
// CommentUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var CommentUserUploadQuota = /** @class */ (function (_super) {
    __extends(CommentUserUploadQuota, _super);
    function CommentUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", CommentUserUploadQuotaLifetime)
    ], CommentUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", CommentUserUploadQuotaPeriodic)
    ], CommentUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", CommentUserUploadQuotaSpace)
    ], CommentUserUploadQuota.prototype, "space", void 0);
    return CommentUserUploadQuota;
}(SpeakeasyBase));
export { CommentUserUploadQuota };
var CommentUserWebsites = /** @class */ (function (_super) {
    __extends(CommentUserWebsites, _super);
    function CommentUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CommentUserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CommentUserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommentUserWebsites.prototype, "name", void 0);
    return CommentUserWebsites;
}(SpeakeasyBase));
export { CommentUserWebsites };
// CommentUser
/**
 * The user who posted the comment.
**/
var CommentUser = /** @class */ (function (_super) {
    __extends(CommentUser, _super);
    function CommentUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], CommentUser.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", CommentUserMetadata)
    ], CommentUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], CommentUser.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", CommentUserPreferences)
    ], CommentUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", CommentUserUploadQuota)
    ], CommentUser.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CommentUser.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: CommentUserWebsites }),
        __metadata("design:type", Array)
    ], CommentUser.prototype, "websites", void 0);
    return CommentUser;
}(SpeakeasyBase));
export { CommentUser };
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_on" }),
        __metadata("design:type", String)
    ], Comment.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", CommentMetadata)
    ], Comment.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Comment.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], Comment.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Comment.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Comment.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", CommentUser)
    ], Comment.prototype, "user", void 0);
    return Comment;
}(SpeakeasyBase));
export { Comment };
