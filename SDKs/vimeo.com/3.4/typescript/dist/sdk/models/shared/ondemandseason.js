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
// OnDemandSeasonMetadataConnectionsVideos
/**
 * The Videos connection.
**/
var OnDemandSeasonMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandSeasonMetadataConnectionsVideos, _super);
    function OnDemandSeasonMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonMetadataConnectionsVideos.prototype, "uri", void 0);
    return OnDemandSeasonMetadataConnectionsVideos;
}(SpeakeasyBase));
export { OnDemandSeasonMetadataConnectionsVideos };
var OnDemandSeasonMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandSeasonMetadataConnections, _super);
    function OnDemandSeasonMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandSeasonMetadataConnectionsVideos)
    ], OnDemandSeasonMetadataConnections.prototype, "videos", void 0);
    return OnDemandSeasonMetadataConnections;
}(SpeakeasyBase));
export { OnDemandSeasonMetadataConnections };
var OnDemandSeasonMetadata = /** @class */ (function (_super) {
    __extends(OnDemandSeasonMetadata, _super);
    function OnDemandSeasonMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandSeasonMetadataConnections)
    ], OnDemandSeasonMetadata.prototype, "connections", void 0);
    return OnDemandSeasonMetadata;
}(SpeakeasyBase));
export { OnDemandSeasonMetadata };
export var OnDemandSeasonUserAccountEnum;
(function (OnDemandSeasonUserAccountEnum) {
    OnDemandSeasonUserAccountEnum["Basic"] = "basic";
    OnDemandSeasonUserAccountEnum["Business"] = "business";
    OnDemandSeasonUserAccountEnum["LiveBusiness"] = "live_business";
    OnDemandSeasonUserAccountEnum["LivePremium"] = "live_premium";
    OnDemandSeasonUserAccountEnum["LivePro"] = "live_pro";
    OnDemandSeasonUserAccountEnum["Plus"] = "plus";
    OnDemandSeasonUserAccountEnum["Pro"] = "pro";
    OnDemandSeasonUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    OnDemandSeasonUserAccountEnum["Producer"] = "producer";
})(OnDemandSeasonUserAccountEnum || (OnDemandSeasonUserAccountEnum = {}));
// OnDemandSeasonUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var OnDemandSeasonUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsAlbums, _super);
    function OnDemandSeasonUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsAlbums };
// OnDemandSeasonUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var OnDemandSeasonUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsAppearances, _super);
    function OnDemandSeasonUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsAppearances };
// OnDemandSeasonUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var OnDemandSeasonUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsBlock, _super);
    function OnDemandSeasonUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsBlock };
// OnDemandSeasonUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var OnDemandSeasonUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsCategories, _super);
    function OnDemandSeasonUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsCategories };
// OnDemandSeasonUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var OnDemandSeasonUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsChannels, _super);
    function OnDemandSeasonUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsChannels };
// OnDemandSeasonUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var OnDemandSeasonUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsFeed, _super);
    function OnDemandSeasonUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsFeed };
// OnDemandSeasonUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var OnDemandSeasonUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsFolders, _super);
    function OnDemandSeasonUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsFolders };
// OnDemandSeasonUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var OnDemandSeasonUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsFollowers, _super);
    function OnDemandSeasonUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsFollowers };
// OnDemandSeasonUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var OnDemandSeasonUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsFollowing, _super);
    function OnDemandSeasonUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsFollowing };
// OnDemandSeasonUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var OnDemandSeasonUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsGroups, _super);
    function OnDemandSeasonUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsGroups };
// OnDemandSeasonUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var OnDemandSeasonUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsLikes, _super);
    function OnDemandSeasonUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsLikes };
// OnDemandSeasonUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var OnDemandSeasonUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsModeratedChannels, _super);
    function OnDemandSeasonUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsModeratedChannels };
// OnDemandSeasonUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var OnDemandSeasonUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsPictures, _super);
    function OnDemandSeasonUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsPictures };
// OnDemandSeasonUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var OnDemandSeasonUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsPortfolios, _super);
    function OnDemandSeasonUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsPortfolios };
// OnDemandSeasonUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandSeasonUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsRecommendedChannels, _super);
    function OnDemandSeasonUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsRecommendedChannels };
// OnDemandSeasonUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var OnDemandSeasonUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsRecommendedUsers, _super);
    function OnDemandSeasonUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsRecommendedUsers };
// OnDemandSeasonUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var OnDemandSeasonUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsShared, _super);
    function OnDemandSeasonUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsShared.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsShared;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsShared };
// OnDemandSeasonUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var OnDemandSeasonUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsVideos, _super);
    function OnDemandSeasonUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsVideos };
// OnDemandSeasonUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var OnDemandSeasonUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsWatchedVideos, _super);
    function OnDemandSeasonUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsWatchedVideos };
// OnDemandSeasonUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var OnDemandSeasonUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnectionsWatchlater, _super);
    function OnDemandSeasonUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnectionsWatchlater };
// OnDemandSeasonUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var OnDemandSeasonUserMetadataConnections = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataConnections, _super);
    function OnDemandSeasonUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsAlbums)
    ], OnDemandSeasonUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsAppearances)
    ], OnDemandSeasonUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsBlock)
    ], OnDemandSeasonUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsCategories)
    ], OnDemandSeasonUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsChannels)
    ], OnDemandSeasonUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsFeed)
    ], OnDemandSeasonUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsFolders)
    ], OnDemandSeasonUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsFollowers)
    ], OnDemandSeasonUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsFollowing)
    ], OnDemandSeasonUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsGroups)
    ], OnDemandSeasonUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsLikes)
    ], OnDemandSeasonUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsModeratedChannels)
    ], OnDemandSeasonUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsPictures)
    ], OnDemandSeasonUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsPortfolios)
    ], OnDemandSeasonUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsRecommendedChannels)
    ], OnDemandSeasonUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsRecommendedUsers)
    ], OnDemandSeasonUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsShared)
    ], OnDemandSeasonUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsVideos)
    ], OnDemandSeasonUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsWatchedVideos)
    ], OnDemandSeasonUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnectionsWatchlater)
    ], OnDemandSeasonUserMetadataConnections.prototype, "watchlater", void 0);
    return OnDemandSeasonUserMetadataConnections;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataConnections };
var OnDemandSeasonUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataInteractionsAddPrivacyUser, _super);
    function OnDemandSeasonUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataInteractionsAddPrivacyUser };
// OnDemandSeasonUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var OnDemandSeasonUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataInteractionsBlock, _super);
    function OnDemandSeasonUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandSeasonUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataInteractionsBlock };
// OnDemandSeasonUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var OnDemandSeasonUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataInteractionsFollow, _super);
    function OnDemandSeasonUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], OnDemandSeasonUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataInteractionsFollow };
// OnDemandSeasonUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var OnDemandSeasonUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataInteractionsReport, _super);
    function OnDemandSeasonUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserMetadataInteractionsReport.prototype, "uri", void 0);
    return OnDemandSeasonUserMetadataInteractionsReport;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataInteractionsReport };
var OnDemandSeasonUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadataInteractions, _super);
    function OnDemandSeasonUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", OnDemandSeasonUserMetadataInteractionsAddPrivacyUser)
    ], OnDemandSeasonUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", OnDemandSeasonUserMetadataInteractionsBlock)
    ], OnDemandSeasonUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", OnDemandSeasonUserMetadataInteractionsFollow)
    ], OnDemandSeasonUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", OnDemandSeasonUserMetadataInteractionsReport)
    ], OnDemandSeasonUserMetadataInteractions.prototype, "report", void 0);
    return OnDemandSeasonUserMetadataInteractions;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadataInteractions };
// OnDemandSeasonUserMetadata
/**
 * The user's metadata.
**/
var OnDemandSeasonUserMetadata = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserMetadata, _super);
    function OnDemandSeasonUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", OnDemandSeasonUserMetadataConnections)
    ], OnDemandSeasonUserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", OnDemandSeasonUserMetadataInteractions)
    ], OnDemandSeasonUserMetadata.prototype, "interactions", void 0);
    return OnDemandSeasonUserMetadata;
}(SpeakeasyBase));
export { OnDemandSeasonUserMetadata };
export var OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum;
(function (OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum) {
    OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum || (OnDemandSeasonUserPreferencesVideosPrivacyCommentsEnum = {}));
export var OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum;
(function (OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum) {
    OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum || (OnDemandSeasonUserPreferencesVideosPrivacyEmbedEnum = {}));
export var OnDemandSeasonUserPreferencesVideosPrivacyViewEnum;
(function (OnDemandSeasonUserPreferencesVideosPrivacyViewEnum) {
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    OnDemandSeasonUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(OnDemandSeasonUserPreferencesVideosPrivacyViewEnum || (OnDemandSeasonUserPreferencesVideosPrivacyViewEnum = {}));
var OnDemandSeasonUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserPreferencesVideosPrivacy, _super);
    function OnDemandSeasonUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], OnDemandSeasonUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], OnDemandSeasonUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return OnDemandSeasonUserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { OnDemandSeasonUserPreferencesVideosPrivacy };
var OnDemandSeasonUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserPreferencesVideos, _super);
    function OnDemandSeasonUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", OnDemandSeasonUserPreferencesVideosPrivacy)
    ], OnDemandSeasonUserPreferencesVideos.prototype, "privacy", void 0);
    return OnDemandSeasonUserPreferencesVideos;
}(SpeakeasyBase));
export { OnDemandSeasonUserPreferencesVideos };
var OnDemandSeasonUserPreferences = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserPreferences, _super);
    function OnDemandSeasonUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", OnDemandSeasonUserPreferencesVideos)
    ], OnDemandSeasonUserPreferences.prototype, "videos", void 0);
    return OnDemandSeasonUserPreferences;
}(SpeakeasyBase));
export { OnDemandSeasonUserPreferences };
// OnDemandSeasonUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var OnDemandSeasonUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserUploadQuotaLifetime, _super);
    function OnDemandSeasonUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaLifetime.prototype, "used", void 0);
    return OnDemandSeasonUserUploadQuotaLifetime;
}(SpeakeasyBase));
export { OnDemandSeasonUserUploadQuotaLifetime };
// OnDemandSeasonUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var OnDemandSeasonUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserUploadQuotaPeriodic, _super);
    function OnDemandSeasonUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaPeriodic.prototype, "used", void 0);
    return OnDemandSeasonUserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { OnDemandSeasonUserUploadQuotaPeriodic };
export var OnDemandSeasonUserUploadQuotaSpaceShowingEnum;
(function (OnDemandSeasonUserUploadQuotaSpaceShowingEnum) {
    OnDemandSeasonUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    OnDemandSeasonUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(OnDemandSeasonUserUploadQuotaSpaceShowingEnum || (OnDemandSeasonUserUploadQuotaSpaceShowingEnum = {}));
// OnDemandSeasonUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var OnDemandSeasonUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserUploadQuotaSpace, _super);
    function OnDemandSeasonUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], OnDemandSeasonUserUploadQuotaSpace.prototype, "used", void 0);
    return OnDemandSeasonUserUploadQuotaSpace;
}(SpeakeasyBase));
export { OnDemandSeasonUserUploadQuotaSpace };
// OnDemandSeasonUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var OnDemandSeasonUserUploadQuota = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserUploadQuota, _super);
    function OnDemandSeasonUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", OnDemandSeasonUserUploadQuotaLifetime)
    ], OnDemandSeasonUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", OnDemandSeasonUserUploadQuotaPeriodic)
    ], OnDemandSeasonUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", OnDemandSeasonUserUploadQuotaSpace)
    ], OnDemandSeasonUserUploadQuota.prototype, "space", void 0);
    return OnDemandSeasonUserUploadQuota;
}(SpeakeasyBase));
export { OnDemandSeasonUserUploadQuota };
var OnDemandSeasonUserWebsites = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUserWebsites, _super);
    function OnDemandSeasonUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUserWebsites.prototype, "name", void 0);
    return OnDemandSeasonUserWebsites;
}(SpeakeasyBase));
export { OnDemandSeasonUserWebsites };
// OnDemandSeasonUser
/**
 * The creator of this On Demand page.
**/
var OnDemandSeasonUser = /** @class */ (function (_super) {
    __extends(OnDemandSeasonUser, _super);
    function OnDemandSeasonUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUser.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandSeasonUserMetadata)
    ], OnDemandSeasonUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], OnDemandSeasonUser.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", OnDemandSeasonUserPreferences)
    ], OnDemandSeasonUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", OnDemandSeasonUserUploadQuota)
    ], OnDemandSeasonUser.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeasonUser.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: OnDemandSeasonUserWebsites }),
        __metadata("design:type", Array)
    ], OnDemandSeasonUser.prototype, "websites", void 0);
    return OnDemandSeasonUser;
}(SpeakeasyBase));
export { OnDemandSeasonUser };
var OnDemandSeason = /** @class */ (function (_super) {
    __extends(OnDemandSeason, _super);
    function OnDemandSeason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OnDemandSeason.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OnDemandSeasonMetadata)
    ], OnDemandSeason.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnDemandSeason.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], OnDemandSeason.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], OnDemandSeason.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnDemandSeason.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], OnDemandSeason.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", OnDemandSeasonUser)
    ], OnDemandSeason.prototype, "user", void 0);
    return OnDemandSeason;
}(SpeakeasyBase));
export { OnDemandSeason };
