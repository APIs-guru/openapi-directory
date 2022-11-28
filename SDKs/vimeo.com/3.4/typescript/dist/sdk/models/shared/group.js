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
// GroupMetadataConnectionsUsers
/**
 * Information about the members or moderators of this group.
**/
var GroupMetadataConnectionsUsers = /** @class */ (function (_super) {
    __extends(GroupMetadataConnectionsUsers, _super);
    function GroupMetadataConnectionsUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupMetadataConnectionsUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupMetadataConnectionsUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupMetadataConnectionsUsers.prototype, "uri", void 0);
    return GroupMetadataConnectionsUsers;
}(SpeakeasyBase));
export { GroupMetadataConnectionsUsers };
// GroupMetadataConnectionsVideos
/**
 * Information about the videos contained within this group.
**/
var GroupMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(GroupMetadataConnectionsVideos, _super);
    function GroupMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupMetadataConnectionsVideos.prototype, "uri", void 0);
    return GroupMetadataConnectionsVideos;
}(SpeakeasyBase));
export { GroupMetadataConnectionsVideos };
// GroupMetadataConnections
/**
 * A collection of information that is connected to this resource.
**/
var GroupMetadataConnections = /** @class */ (function (_super) {
    __extends(GroupMetadataConnections, _super);
    function GroupMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", GroupMetadataConnectionsUsers)
    ], GroupMetadataConnections.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", GroupMetadataConnectionsVideos)
    ], GroupMetadataConnections.prototype, "videos", void 0);
    return GroupMetadataConnections;
}(SpeakeasyBase));
export { GroupMetadataConnections };
export var GroupMetadataInteractionsJoinTypeEnum;
(function (GroupMetadataInteractionsJoinTypeEnum) {
    GroupMetadataInteractionsJoinTypeEnum["Member"] = "member";
    GroupMetadataInteractionsJoinTypeEnum["Moderator"] = "moderator";
})(GroupMetadataInteractionsJoinTypeEnum || (GroupMetadataInteractionsJoinTypeEnum = {}));
// GroupMetadataInteractionsJoin
/**
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
**/
var GroupMetadataInteractionsJoin = /** @class */ (function (_super) {
    __extends(GroupMetadataInteractionsJoin, _super);
    function GroupMetadataInteractionsJoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], GroupMetadataInteractionsJoin.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], GroupMetadataInteractionsJoin.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GroupMetadataInteractionsJoin.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GroupMetadataInteractionsJoin.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupMetadataInteractionsJoin.prototype, "uri", void 0);
    return GroupMetadataInteractionsJoin;
}(SpeakeasyBase));
export { GroupMetadataInteractionsJoin };
// GroupMetadataInteractions
/**
 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
**/
var GroupMetadataInteractions = /** @class */ (function (_super) {
    __extends(GroupMetadataInteractions, _super);
    function GroupMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=join" }),
        __metadata("design:type", GroupMetadataInteractionsJoin)
    ], GroupMetadataInteractions.prototype, "join", void 0);
    return GroupMetadataInteractions;
}(SpeakeasyBase));
export { GroupMetadataInteractions };
// GroupMetadata
/**
 * Metadata about the group.
**/
var GroupMetadata = /** @class */ (function (_super) {
    __extends(GroupMetadata, _super);
    function GroupMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", GroupMetadataConnections)
    ], GroupMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", GroupMetadataInteractions)
    ], GroupMetadata.prototype, "interactions", void 0);
    return GroupMetadata;
}(SpeakeasyBase));
export { GroupMetadata };
export var GroupPrivacyCommentEnum;
(function (GroupPrivacyCommentEnum) {
    GroupPrivacyCommentEnum["All"] = "all";
    GroupPrivacyCommentEnum["Members"] = "members";
})(GroupPrivacyCommentEnum || (GroupPrivacyCommentEnum = {}));
export var GroupPrivacyInviteEnum;
(function (GroupPrivacyInviteEnum) {
    GroupPrivacyInviteEnum["All"] = "all";
    GroupPrivacyInviteEnum["Members"] = "members";
})(GroupPrivacyInviteEnum || (GroupPrivacyInviteEnum = {}));
export var GroupPrivacyJoinEnum;
(function (GroupPrivacyJoinEnum) {
    GroupPrivacyJoinEnum["Anybody"] = "anybody";
    GroupPrivacyJoinEnum["Members"] = "members";
})(GroupPrivacyJoinEnum || (GroupPrivacyJoinEnum = {}));
export var GroupPrivacyVideosEnum;
(function (GroupPrivacyVideosEnum) {
    GroupPrivacyVideosEnum["All"] = "all";
    GroupPrivacyVideosEnum["Members"] = "members";
})(GroupPrivacyVideosEnum || (GroupPrivacyVideosEnum = {}));
export var GroupPrivacyViewEnum;
(function (GroupPrivacyViewEnum) {
    GroupPrivacyViewEnum["Anybody"] = "anybody";
    GroupPrivacyViewEnum["Members"] = "members";
})(GroupPrivacyViewEnum || (GroupPrivacyViewEnum = {}));
// GroupPrivacy
/**
 * The group's privacy settings.
**/
var GroupPrivacy = /** @class */ (function (_super) {
    __extends(GroupPrivacy, _super);
    function GroupPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invite" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "invite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=join" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "join", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "view", void 0);
    return GroupPrivacy;
}(SpeakeasyBase));
export { GroupPrivacy };
export var GroupUserAccountEnum;
(function (GroupUserAccountEnum) {
    GroupUserAccountEnum["Basic"] = "basic";
    GroupUserAccountEnum["Business"] = "business";
    GroupUserAccountEnum["LiveBusiness"] = "live_business";
    GroupUserAccountEnum["LivePremium"] = "live_premium";
    GroupUserAccountEnum["LivePro"] = "live_pro";
    GroupUserAccountEnum["Plus"] = "plus";
    GroupUserAccountEnum["Pro"] = "pro";
    GroupUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    GroupUserAccountEnum["Producer"] = "producer";
})(GroupUserAccountEnum || (GroupUserAccountEnum = {}));
// GroupUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var GroupUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsAlbums, _super);
    function GroupUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsAlbums };
// GroupUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var GroupUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsAppearances, _super);
    function GroupUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsAppearances };
// GroupUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var GroupUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsBlock, _super);
    function GroupUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsBlock };
// GroupUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var GroupUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsCategories, _super);
    function GroupUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsCategories };
// GroupUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var GroupUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsChannels, _super);
    function GroupUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsChannels };
// GroupUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var GroupUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsFeed, _super);
    function GroupUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsFeed };
// GroupUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var GroupUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsFolders, _super);
    function GroupUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsFolders };
// GroupUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var GroupUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsFollowers, _super);
    function GroupUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsFollowers };
// GroupUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var GroupUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsFollowing, _super);
    function GroupUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsFollowing };
// GroupUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var GroupUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsGroups, _super);
    function GroupUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsGroups };
// GroupUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var GroupUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsLikes, _super);
    function GroupUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsLikes };
// GroupUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var GroupUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsModeratedChannels, _super);
    function GroupUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsModeratedChannels };
// GroupUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var GroupUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsPictures, _super);
    function GroupUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsPictures };
// GroupUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var GroupUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsPortfolios, _super);
    function GroupUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsPortfolios };
// GroupUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var GroupUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsRecommendedChannels, _super);
    function GroupUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsRecommendedChannels };
// GroupUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var GroupUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsRecommendedUsers, _super);
    function GroupUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsRecommendedUsers };
// GroupUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var GroupUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsShared, _super);
    function GroupUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsShared.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsShared;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsShared };
// GroupUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var GroupUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsVideos, _super);
    function GroupUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsVideos };
// GroupUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var GroupUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsWatchedVideos, _super);
    function GroupUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsWatchedVideos };
// GroupUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var GroupUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnectionsWatchlater, _super);
    function GroupUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GroupUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return GroupUserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { GroupUserMetadataConnectionsWatchlater };
// GroupUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var GroupUserMetadataConnections = /** @class */ (function (_super) {
    __extends(GroupUserMetadataConnections, _super);
    function GroupUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", GroupUserMetadataConnectionsAlbums)
    ], GroupUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", GroupUserMetadataConnectionsAppearances)
    ], GroupUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", GroupUserMetadataConnectionsBlock)
    ], GroupUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", GroupUserMetadataConnectionsCategories)
    ], GroupUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", GroupUserMetadataConnectionsChannels)
    ], GroupUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", GroupUserMetadataConnectionsFeed)
    ], GroupUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", GroupUserMetadataConnectionsFolders)
    ], GroupUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", GroupUserMetadataConnectionsFollowers)
    ], GroupUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", GroupUserMetadataConnectionsFollowing)
    ], GroupUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", GroupUserMetadataConnectionsGroups)
    ], GroupUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", GroupUserMetadataConnectionsLikes)
    ], GroupUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", GroupUserMetadataConnectionsModeratedChannels)
    ], GroupUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", GroupUserMetadataConnectionsPictures)
    ], GroupUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", GroupUserMetadataConnectionsPortfolios)
    ], GroupUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", GroupUserMetadataConnectionsRecommendedChannels)
    ], GroupUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", GroupUserMetadataConnectionsRecommendedUsers)
    ], GroupUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", GroupUserMetadataConnectionsShared)
    ], GroupUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", GroupUserMetadataConnectionsVideos)
    ], GroupUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", GroupUserMetadataConnectionsWatchedVideos)
    ], GroupUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", GroupUserMetadataConnectionsWatchlater)
    ], GroupUserMetadataConnections.prototype, "watchlater", void 0);
    return GroupUserMetadataConnections;
}(SpeakeasyBase));
export { GroupUserMetadataConnections };
var GroupUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(GroupUserMetadataInteractionsAddPrivacyUser, _super);
    function GroupUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return GroupUserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { GroupUserMetadataInteractionsAddPrivacyUser };
// GroupUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var GroupUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(GroupUserMetadataInteractionsBlock, _super);
    function GroupUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], GroupUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], GroupUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return GroupUserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { GroupUserMetadataInteractionsBlock };
// GroupUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var GroupUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(GroupUserMetadataInteractionsFollow, _super);
    function GroupUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], GroupUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return GroupUserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { GroupUserMetadataInteractionsFollow };
// GroupUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var GroupUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(GroupUserMetadataInteractionsReport, _super);
    function GroupUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], GroupUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUserMetadataInteractionsReport.prototype, "uri", void 0);
    return GroupUserMetadataInteractionsReport;
}(SpeakeasyBase));
export { GroupUserMetadataInteractionsReport };
var GroupUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(GroupUserMetadataInteractions, _super);
    function GroupUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", GroupUserMetadataInteractionsAddPrivacyUser)
    ], GroupUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", GroupUserMetadataInteractionsBlock)
    ], GroupUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", GroupUserMetadataInteractionsFollow)
    ], GroupUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", GroupUserMetadataInteractionsReport)
    ], GroupUserMetadataInteractions.prototype, "report", void 0);
    return GroupUserMetadataInteractions;
}(SpeakeasyBase));
export { GroupUserMetadataInteractions };
// GroupUserMetadata
/**
 * The user's metadata.
**/
var GroupUserMetadata = /** @class */ (function (_super) {
    __extends(GroupUserMetadata, _super);
    function GroupUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", GroupUserMetadataConnections)
    ], GroupUserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", GroupUserMetadataInteractions)
    ], GroupUserMetadata.prototype, "interactions", void 0);
    return GroupUserMetadata;
}(SpeakeasyBase));
export { GroupUserMetadata };
export var GroupUserPreferencesVideosPrivacyCommentsEnum;
(function (GroupUserPreferencesVideosPrivacyCommentsEnum) {
    GroupUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    GroupUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    GroupUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(GroupUserPreferencesVideosPrivacyCommentsEnum || (GroupUserPreferencesVideosPrivacyCommentsEnum = {}));
export var GroupUserPreferencesVideosPrivacyEmbedEnum;
(function (GroupUserPreferencesVideosPrivacyEmbedEnum) {
    GroupUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    GroupUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    GroupUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(GroupUserPreferencesVideosPrivacyEmbedEnum || (GroupUserPreferencesVideosPrivacyEmbedEnum = {}));
export var GroupUserPreferencesVideosPrivacyViewEnum;
(function (GroupUserPreferencesVideosPrivacyViewEnum) {
    GroupUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    GroupUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    GroupUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    GroupUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    GroupUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    GroupUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    GroupUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(GroupUserPreferencesVideosPrivacyViewEnum || (GroupUserPreferencesVideosPrivacyViewEnum = {}));
var GroupUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(GroupUserPreferencesVideosPrivacy, _super);
    function GroupUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], GroupUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], GroupUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], GroupUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], GroupUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], GroupUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return GroupUserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { GroupUserPreferencesVideosPrivacy };
var GroupUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(GroupUserPreferencesVideos, _super);
    function GroupUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", GroupUserPreferencesVideosPrivacy)
    ], GroupUserPreferencesVideos.prototype, "privacy", void 0);
    return GroupUserPreferencesVideos;
}(SpeakeasyBase));
export { GroupUserPreferencesVideos };
var GroupUserPreferences = /** @class */ (function (_super) {
    __extends(GroupUserPreferences, _super);
    function GroupUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", GroupUserPreferencesVideos)
    ], GroupUserPreferences.prototype, "videos", void 0);
    return GroupUserPreferences;
}(SpeakeasyBase));
export { GroupUserPreferences };
// GroupUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var GroupUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(GroupUserUploadQuotaLifetime, _super);
    function GroupUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaLifetime.prototype, "used", void 0);
    return GroupUserUploadQuotaLifetime;
}(SpeakeasyBase));
export { GroupUserUploadQuotaLifetime };
// GroupUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var GroupUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(GroupUserUploadQuotaPeriodic, _super);
    function GroupUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], GroupUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaPeriodic.prototype, "used", void 0);
    return GroupUserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { GroupUserUploadQuotaPeriodic };
export var GroupUserUploadQuotaSpaceShowingEnum;
(function (GroupUserUploadQuotaSpaceShowingEnum) {
    GroupUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    GroupUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(GroupUserUploadQuotaSpaceShowingEnum || (GroupUserUploadQuotaSpaceShowingEnum = {}));
// GroupUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var GroupUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(GroupUserUploadQuotaSpace, _super);
    function GroupUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], GroupUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], GroupUserUploadQuotaSpace.prototype, "used", void 0);
    return GroupUserUploadQuotaSpace;
}(SpeakeasyBase));
export { GroupUserUploadQuotaSpace };
// GroupUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var GroupUserUploadQuota = /** @class */ (function (_super) {
    __extends(GroupUserUploadQuota, _super);
    function GroupUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", GroupUserUploadQuotaLifetime)
    ], GroupUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", GroupUserUploadQuotaPeriodic)
    ], GroupUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", GroupUserUploadQuotaSpace)
    ], GroupUserUploadQuota.prototype, "space", void 0);
    return GroupUserUploadQuota;
}(SpeakeasyBase));
export { GroupUserUploadQuota };
var GroupUserWebsites = /** @class */ (function (_super) {
    __extends(GroupUserWebsites, _super);
    function GroupUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GroupUserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GroupUserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupUserWebsites.prototype, "name", void 0);
    return GroupUserWebsites;
}(SpeakeasyBase));
export { GroupUserWebsites };
// GroupUser
/**
 * The owner of the group.
**/
var GroupUser = /** @class */ (function (_super) {
    __extends(GroupUser, _super);
    function GroupUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], GroupUser.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", GroupUserMetadata)
    ], GroupUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], GroupUser.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", GroupUserPreferences)
    ], GroupUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", GroupUserUploadQuota)
    ], GroupUser.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GroupUser.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: GroupUserWebsites }),
        __metadata("design:type", Array)
    ], GroupUser.prototype, "websites", void 0);
    return GroupUser;
}(SpeakeasyBase));
export { GroupUser };
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Group.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Group.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Group.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", GroupMetadata)
    ], Group.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Group.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], Group.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", GroupPrivacy)
    ], Group.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Group.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Group.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", GroupUser)
    ], Group.prototype, "user", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
