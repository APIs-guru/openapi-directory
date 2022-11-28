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
// PresetsMetadataConnectionsVideos
/**
 * Information about the videos in this preset.
**/
var PresetsMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(PresetsMetadataConnectionsVideos, _super);
    function PresetsMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsMetadataConnectionsVideos.prototype, "uri", void 0);
    return PresetsMetadataConnectionsVideos;
}(SpeakeasyBase));
export { PresetsMetadataConnectionsVideos };
// PresetsMetadataConnections
/**
 * A list of resource URIs related to the album.
**/
var PresetsMetadataConnections = /** @class */ (function (_super) {
    __extends(PresetsMetadataConnections, _super);
    function PresetsMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", PresetsMetadataConnectionsVideos)
    ], PresetsMetadataConnections.prototype, "videos", void 0);
    return PresetsMetadataConnections;
}(SpeakeasyBase));
export { PresetsMetadataConnections };
// PresetsMetadata
/**
 * Metadata about the album.
**/
var PresetsMetadata = /** @class */ (function (_super) {
    __extends(PresetsMetadata, _super);
    function PresetsMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", PresetsMetadataConnections)
    ], PresetsMetadata.prototype, "connections", void 0);
    return PresetsMetadata;
}(SpeakeasyBase));
export { PresetsMetadata };
var PresetsSettingsButtons = /** @class */ (function (_super) {
    __extends(PresetsSettingsButtons, _super);
    function PresetsSettingsButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hd" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "hd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=share" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "share", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vote" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "vote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsButtons.prototype, "watchlater", void 0);
    return PresetsSettingsButtons;
}(SpeakeasyBase));
export { PresetsSettingsButtons };
var PresetsSettingsLogos = /** @class */ (function (_super) {
    __extends(PresetsSettingsLogos, _super);
    function PresetsSettingsLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsLogos.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_custom" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsLogos.prototype, "stickyCustom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vimeo" }),
        __metadata("design:type", Boolean)
    ], PresetsSettingsLogos.prototype, "vimeo", void 0);
    return PresetsSettingsLogos;
}(SpeakeasyBase));
export { PresetsSettingsLogos };
// PresetsSettingsOutroLink
/**
 * The outro link settings. Present only if the type is `link`.
**/
var PresetsSettingsOutroLink = /** @class */ (function (_super) {
    __extends(PresetsSettingsOutroLink, _super);
    function PresetsSettingsOutroLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutroLink.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutroLink.prototype, "url", void 0);
    return PresetsSettingsOutroLink;
}(SpeakeasyBase));
export { PresetsSettingsOutroLink };
export var PresetsSettingsOutroTypeEnum;
(function (PresetsSettingsOutroTypeEnum) {
    PresetsSettingsOutroTypeEnum["Link"] = "link";
    PresetsSettingsOutroTypeEnum["NoIdea"] = "no idea";
    PresetsSettingsOutroTypeEnum["Text"] = "text";
    PresetsSettingsOutroTypeEnum["UploadedClips"] = "uploaded_clips";
    PresetsSettingsOutroTypeEnum["UploadedVideos"] = "uploaded_videos";
})(PresetsSettingsOutroTypeEnum || (PresetsSettingsOutroTypeEnum = {}));
var PresetsSettingsOutro = /** @class */ (function (_super) {
    __extends(PresetsSettingsOutro, _super);
    function PresetsSettingsOutro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clips" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutro.prototype, "clips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", PresetsSettingsOutroLink)
    ], PresetsSettingsOutro.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutro.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutro.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", String)
    ], PresetsSettingsOutro.prototype, "videos", void 0);
    return PresetsSettingsOutro;
}(SpeakeasyBase));
export { PresetsSettingsOutro };
// PresetsSettings
/**
 * The contents of the presets group.
**/
var PresetsSettings = /** @class */ (function (_super) {
    __extends(PresetsSettings, _super);
    function PresetsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buttons" }),
        __metadata("design:type", PresetsSettingsButtons)
    ], PresetsSettings.prototype, "buttons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logos" }),
        __metadata("design:type", PresetsSettingsLogos)
    ], PresetsSettings.prototype, "logos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outro" }),
        __metadata("design:type", PresetsSettingsOutro)
    ], PresetsSettings.prototype, "outro", void 0);
    return PresetsSettings;
}(SpeakeasyBase));
export { PresetsSettings };
export var PresetsUserAccountEnum;
(function (PresetsUserAccountEnum) {
    PresetsUserAccountEnum["Basic"] = "basic";
    PresetsUserAccountEnum["Business"] = "business";
    PresetsUserAccountEnum["LiveBusiness"] = "live_business";
    PresetsUserAccountEnum["LivePremium"] = "live_premium";
    PresetsUserAccountEnum["LivePro"] = "live_pro";
    PresetsUserAccountEnum["Plus"] = "plus";
    PresetsUserAccountEnum["Pro"] = "pro";
    PresetsUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    PresetsUserAccountEnum["Producer"] = "producer";
})(PresetsUserAccountEnum || (PresetsUserAccountEnum = {}));
// PresetsUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var PresetsUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsAlbums, _super);
    function PresetsUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsAlbums };
// PresetsUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var PresetsUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsAppearances, _super);
    function PresetsUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsAppearances };
// PresetsUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var PresetsUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsBlock, _super);
    function PresetsUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsBlock };
// PresetsUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var PresetsUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsCategories, _super);
    function PresetsUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsCategories };
// PresetsUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var PresetsUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsChannels, _super);
    function PresetsUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsChannels };
// PresetsUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var PresetsUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsFeed, _super);
    function PresetsUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsFeed };
// PresetsUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var PresetsUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsFolders, _super);
    function PresetsUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsFolders };
// PresetsUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var PresetsUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsFollowers, _super);
    function PresetsUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsFollowers };
// PresetsUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var PresetsUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsFollowing, _super);
    function PresetsUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsFollowing };
// PresetsUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var PresetsUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsGroups, _super);
    function PresetsUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsGroups };
// PresetsUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var PresetsUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsLikes, _super);
    function PresetsUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsLikes };
// PresetsUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var PresetsUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsModeratedChannels, _super);
    function PresetsUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsModeratedChannels };
// PresetsUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var PresetsUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsPictures, _super);
    function PresetsUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsPictures };
// PresetsUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var PresetsUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsPortfolios, _super);
    function PresetsUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsPortfolios };
// PresetsUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var PresetsUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsRecommendedChannels, _super);
    function PresetsUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsRecommendedChannels };
// PresetsUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var PresetsUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsRecommendedUsers, _super);
    function PresetsUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsRecommendedUsers };
// PresetsUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var PresetsUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsShared, _super);
    function PresetsUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsShared.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsShared;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsShared };
// PresetsUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var PresetsUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsVideos, _super);
    function PresetsUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsVideos };
// PresetsUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var PresetsUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsWatchedVideos, _super);
    function PresetsUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsWatchedVideos };
// PresetsUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var PresetsUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnectionsWatchlater, _super);
    function PresetsUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PresetsUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return PresetsUserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { PresetsUserMetadataConnectionsWatchlater };
// PresetsUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var PresetsUserMetadataConnections = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataConnections, _super);
    function PresetsUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", PresetsUserMetadataConnectionsAlbums)
    ], PresetsUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", PresetsUserMetadataConnectionsAppearances)
    ], PresetsUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", PresetsUserMetadataConnectionsBlock)
    ], PresetsUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", PresetsUserMetadataConnectionsCategories)
    ], PresetsUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", PresetsUserMetadataConnectionsChannels)
    ], PresetsUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", PresetsUserMetadataConnectionsFeed)
    ], PresetsUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", PresetsUserMetadataConnectionsFolders)
    ], PresetsUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", PresetsUserMetadataConnectionsFollowers)
    ], PresetsUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", PresetsUserMetadataConnectionsFollowing)
    ], PresetsUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", PresetsUserMetadataConnectionsGroups)
    ], PresetsUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", PresetsUserMetadataConnectionsLikes)
    ], PresetsUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", PresetsUserMetadataConnectionsModeratedChannels)
    ], PresetsUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", PresetsUserMetadataConnectionsPictures)
    ], PresetsUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", PresetsUserMetadataConnectionsPortfolios)
    ], PresetsUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", PresetsUserMetadataConnectionsRecommendedChannels)
    ], PresetsUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", PresetsUserMetadataConnectionsRecommendedUsers)
    ], PresetsUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", PresetsUserMetadataConnectionsShared)
    ], PresetsUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", PresetsUserMetadataConnectionsVideos)
    ], PresetsUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", PresetsUserMetadataConnectionsWatchedVideos)
    ], PresetsUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", PresetsUserMetadataConnectionsWatchlater)
    ], PresetsUserMetadataConnections.prototype, "watchlater", void 0);
    return PresetsUserMetadataConnections;
}(SpeakeasyBase));
export { PresetsUserMetadataConnections };
var PresetsUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataInteractionsAddPrivacyUser, _super);
    function PresetsUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return PresetsUserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { PresetsUserMetadataInteractionsAddPrivacyUser };
// PresetsUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var PresetsUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataInteractionsBlock, _super);
    function PresetsUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], PresetsUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return PresetsUserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { PresetsUserMetadataInteractionsBlock };
// PresetsUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var PresetsUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataInteractionsFollow, _super);
    function PresetsUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], PresetsUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return PresetsUserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { PresetsUserMetadataInteractionsFollow };
// PresetsUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var PresetsUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataInteractionsReport, _super);
    function PresetsUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], PresetsUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUserMetadataInteractionsReport.prototype, "uri", void 0);
    return PresetsUserMetadataInteractionsReport;
}(SpeakeasyBase));
export { PresetsUserMetadataInteractionsReport };
var PresetsUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(PresetsUserMetadataInteractions, _super);
    function PresetsUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", PresetsUserMetadataInteractionsAddPrivacyUser)
    ], PresetsUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", PresetsUserMetadataInteractionsBlock)
    ], PresetsUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", PresetsUserMetadataInteractionsFollow)
    ], PresetsUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", PresetsUserMetadataInteractionsReport)
    ], PresetsUserMetadataInteractions.prototype, "report", void 0);
    return PresetsUserMetadataInteractions;
}(SpeakeasyBase));
export { PresetsUserMetadataInteractions };
// PresetsUserMetadata
/**
 * The user's metadata.
**/
var PresetsUserMetadata = /** @class */ (function (_super) {
    __extends(PresetsUserMetadata, _super);
    function PresetsUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", PresetsUserMetadataConnections)
    ], PresetsUserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", PresetsUserMetadataInteractions)
    ], PresetsUserMetadata.prototype, "interactions", void 0);
    return PresetsUserMetadata;
}(SpeakeasyBase));
export { PresetsUserMetadata };
export var PresetsUserPreferencesVideosPrivacyCommentsEnum;
(function (PresetsUserPreferencesVideosPrivacyCommentsEnum) {
    PresetsUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    PresetsUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    PresetsUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(PresetsUserPreferencesVideosPrivacyCommentsEnum || (PresetsUserPreferencesVideosPrivacyCommentsEnum = {}));
export var PresetsUserPreferencesVideosPrivacyEmbedEnum;
(function (PresetsUserPreferencesVideosPrivacyEmbedEnum) {
    PresetsUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    PresetsUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    PresetsUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(PresetsUserPreferencesVideosPrivacyEmbedEnum || (PresetsUserPreferencesVideosPrivacyEmbedEnum = {}));
export var PresetsUserPreferencesVideosPrivacyViewEnum;
(function (PresetsUserPreferencesVideosPrivacyViewEnum) {
    PresetsUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    PresetsUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    PresetsUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    PresetsUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    PresetsUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    PresetsUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    PresetsUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(PresetsUserPreferencesVideosPrivacyViewEnum || (PresetsUserPreferencesVideosPrivacyViewEnum = {}));
var PresetsUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(PresetsUserPreferencesVideosPrivacy, _super);
    function PresetsUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], PresetsUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], PresetsUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], PresetsUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], PresetsUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], PresetsUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return PresetsUserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { PresetsUserPreferencesVideosPrivacy };
var PresetsUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(PresetsUserPreferencesVideos, _super);
    function PresetsUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", PresetsUserPreferencesVideosPrivacy)
    ], PresetsUserPreferencesVideos.prototype, "privacy", void 0);
    return PresetsUserPreferencesVideos;
}(SpeakeasyBase));
export { PresetsUserPreferencesVideos };
var PresetsUserPreferences = /** @class */ (function (_super) {
    __extends(PresetsUserPreferences, _super);
    function PresetsUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", PresetsUserPreferencesVideos)
    ], PresetsUserPreferences.prototype, "videos", void 0);
    return PresetsUserPreferences;
}(SpeakeasyBase));
export { PresetsUserPreferences };
// PresetsUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var PresetsUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(PresetsUserUploadQuotaLifetime, _super);
    function PresetsUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaLifetime.prototype, "used", void 0);
    return PresetsUserUploadQuotaLifetime;
}(SpeakeasyBase));
export { PresetsUserUploadQuotaLifetime };
// PresetsUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var PresetsUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(PresetsUserUploadQuotaPeriodic, _super);
    function PresetsUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], PresetsUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaPeriodic.prototype, "used", void 0);
    return PresetsUserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { PresetsUserUploadQuotaPeriodic };
export var PresetsUserUploadQuotaSpaceShowingEnum;
(function (PresetsUserUploadQuotaSpaceShowingEnum) {
    PresetsUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    PresetsUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(PresetsUserUploadQuotaSpaceShowingEnum || (PresetsUserUploadQuotaSpaceShowingEnum = {}));
// PresetsUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var PresetsUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(PresetsUserUploadQuotaSpace, _super);
    function PresetsUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], PresetsUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], PresetsUserUploadQuotaSpace.prototype, "used", void 0);
    return PresetsUserUploadQuotaSpace;
}(SpeakeasyBase));
export { PresetsUserUploadQuotaSpace };
// PresetsUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var PresetsUserUploadQuota = /** @class */ (function (_super) {
    __extends(PresetsUserUploadQuota, _super);
    function PresetsUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", PresetsUserUploadQuotaLifetime)
    ], PresetsUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", PresetsUserUploadQuotaPeriodic)
    ], PresetsUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", PresetsUserUploadQuotaSpace)
    ], PresetsUserUploadQuota.prototype, "space", void 0);
    return PresetsUserUploadQuota;
}(SpeakeasyBase));
export { PresetsUserUploadQuota };
var PresetsUserWebsites = /** @class */ (function (_super) {
    __extends(PresetsUserWebsites, _super);
    function PresetsUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PresetsUserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PresetsUserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PresetsUserWebsites.prototype, "name", void 0);
    return PresetsUserWebsites;
}(SpeakeasyBase));
export { PresetsUserWebsites };
// PresetsUser
/**
 * The owner of the preset.
**/
var PresetsUser = /** @class */ (function (_super) {
    __extends(PresetsUser, _super);
    function PresetsUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], PresetsUser.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PresetsUserMetadata)
    ], PresetsUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], PresetsUser.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", PresetsUserPreferences)
    ], PresetsUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", PresetsUserUploadQuota)
    ], PresetsUser.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PresetsUser.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: PresetsUserWebsites }),
        __metadata("design:type", Array)
    ], PresetsUser.prototype, "websites", void 0);
    return PresetsUser;
}(SpeakeasyBase));
export { PresetsUser };
var Presets = /** @class */ (function (_super) {
    __extends(Presets, _super);
    function Presets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PresetsMetadata)
    ], Presets.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Presets.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", PresetsSettings)
    ], Presets.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Presets.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PresetsUser)
    ], Presets.prototype, "user", void 0);
    return Presets;
}(SpeakeasyBase));
export { Presets };
