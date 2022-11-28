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
import { User } from "./user";
var AlbumPictureSizes = /** @class */ (function (_super) {
    __extends(AlbumPictureSizes, _super);
    function AlbumPictureSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], AlbumPictureSizes.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], AlbumPictureSizes.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_with_play_button" }),
        __metadata("design:type", String)
    ], AlbumPictureSizes.prototype, "linkWithPlayButton", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], AlbumPictureSizes.prototype, "width", void 0);
    return AlbumPictureSizes;
}(SpeakeasyBase));
export { AlbumPictureSizes };
export var AlbumPictureTypeEnum;
(function (AlbumPictureTypeEnum) {
    AlbumPictureTypeEnum["Caution"] = "caution";
    AlbumPictureTypeEnum["Custom"] = "custom";
    AlbumPictureTypeEnum["Default"] = "default";
})(AlbumPictureTypeEnum || (AlbumPictureTypeEnum = {}));
// AlbumPicture
/**
 * The custom logo for this album.
**/
var AlbumPicture = /** @class */ (function (_super) {
    __extends(AlbumPicture, _super);
    function AlbumPicture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], AlbumPicture.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], AlbumPicture.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], AlbumPicture.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes", elemType: AlbumPictureSizes }),
        __metadata("design:type", Array)
    ], AlbumPicture.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AlbumPicture.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumPicture.prototype, "uri", void 0);
    return AlbumPicture;
}(SpeakeasyBase));
export { AlbumPicture };
// AlbumEmbed
/**
 * Embed data for the album.
**/
var AlbumEmbed = /** @class */ (function (_super) {
    __extends(AlbumEmbed, _super);
    function AlbumEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], AlbumEmbed.prototype, "html", void 0);
    return AlbumEmbed;
}(SpeakeasyBase));
export { AlbumEmbed };
export var AlbumLayoutEnum;
(function (AlbumLayoutEnum) {
    AlbumLayoutEnum["Grid"] = "grid";
    AlbumLayoutEnum["Player"] = "player";
})(AlbumLayoutEnum || (AlbumLayoutEnum = {}));
// AlbumMetadataConnectionsVideos
/**
 * Information about the videos that belong to this album.
**/
var AlbumMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(AlbumMetadataConnectionsVideos, _super);
    function AlbumMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], AlbumMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], AlbumMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumMetadataConnectionsVideos.prototype, "uri", void 0);
    return AlbumMetadataConnectionsVideos;
}(SpeakeasyBase));
export { AlbumMetadataConnectionsVideos };
// AlbumMetadataConnections
/**
 * A collection of information that is connected to this resource.
**/
var AlbumMetadataConnections = /** @class */ (function (_super) {
    __extends(AlbumMetadataConnections, _super);
    function AlbumMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", AlbumMetadataConnectionsVideos)
    ], AlbumMetadataConnections.prototype, "videos", void 0);
    return AlbumMetadataConnections;
}(SpeakeasyBase));
export { AlbumMetadataConnections };
// AlbumMetadataInteractionsAddCustomThumbnails
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
**/
var AlbumMetadataInteractionsAddCustomThumbnails = /** @class */ (function (_super) {
    __extends(AlbumMetadataInteractionsAddCustomThumbnails, _super);
    function AlbumMetadataInteractionsAddCustomThumbnails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], AlbumMetadataInteractionsAddCustomThumbnails.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumMetadataInteractionsAddCustomThumbnails.prototype, "uri", void 0);
    return AlbumMetadataInteractionsAddCustomThumbnails;
}(SpeakeasyBase));
export { AlbumMetadataInteractionsAddCustomThumbnails };
// AlbumMetadataInteractionsAddLogos
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
**/
var AlbumMetadataInteractionsAddLogos = /** @class */ (function (_super) {
    __extends(AlbumMetadataInteractionsAddLogos, _super);
    function AlbumMetadataInteractionsAddLogos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], AlbumMetadataInteractionsAddLogos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumMetadataInteractionsAddLogos.prototype, "uri", void 0);
    return AlbumMetadataInteractionsAddLogos;
}(SpeakeasyBase));
export { AlbumMetadataInteractionsAddLogos };
// AlbumMetadataInteractionsAddVideos
/**
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
**/
var AlbumMetadataInteractionsAddVideos = /** @class */ (function (_super) {
    __extends(AlbumMetadataInteractionsAddVideos, _super);
    function AlbumMetadataInteractionsAddVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], AlbumMetadataInteractionsAddVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], AlbumMetadataInteractionsAddVideos.prototype, "uri", void 0);
    return AlbumMetadataInteractionsAddVideos;
}(SpeakeasyBase));
export { AlbumMetadataInteractionsAddVideos };
// AlbumMetadataInteractions
/**
 * A list of resource URIs related to the album.
**/
var AlbumMetadataInteractions = /** @class */ (function (_super) {
    __extends(AlbumMetadataInteractions, _super);
    function AlbumMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_custom_thumbnails" }),
        __metadata("design:type", AlbumMetadataInteractionsAddCustomThumbnails)
    ], AlbumMetadataInteractions.prototype, "addCustomThumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_logos" }),
        __metadata("design:type", AlbumMetadataInteractionsAddLogos)
    ], AlbumMetadataInteractions.prototype, "addLogos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_videos" }),
        __metadata("design:type", AlbumMetadataInteractionsAddVideos)
    ], AlbumMetadataInteractions.prototype, "addVideos", void 0);
    return AlbumMetadataInteractions;
}(SpeakeasyBase));
export { AlbumMetadataInteractions };
// AlbumMetadata
/**
 * Metadata about the album.
**/
var AlbumMetadata = /** @class */ (function (_super) {
    __extends(AlbumMetadata, _super);
    function AlbumMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", AlbumMetadataConnections)
    ], AlbumMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", AlbumMetadataInteractions)
    ], AlbumMetadata.prototype, "interactions", void 0);
    return AlbumMetadata;
}(SpeakeasyBase));
export { AlbumMetadata };
export var AlbumPrivacyViewEnum;
(function (AlbumPrivacyViewEnum) {
    AlbumPrivacyViewEnum["Anybody"] = "anybody";
    AlbumPrivacyViewEnum["EmbedOnly"] = "embed_only";
    AlbumPrivacyViewEnum["Password"] = "password";
})(AlbumPrivacyViewEnum || (AlbumPrivacyViewEnum = {}));
// AlbumPrivacy
/**
 * The privacy settings of the album.
**/
var AlbumPrivacy = /** @class */ (function (_super) {
    __extends(AlbumPrivacy, _super);
    function AlbumPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AlbumPrivacy.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], AlbumPrivacy.prototype, "view", void 0);
    return AlbumPrivacy;
}(SpeakeasyBase));
export { AlbumPrivacy };
export var AlbumSortEnum;
(function (AlbumSortEnum) {
    AlbumSortEnum["AddedFirst"] = "added_first";
    AlbumSortEnum["AddedLast"] = "added_last";
    AlbumSortEnum["Alphabetical"] = "alphabetical";
    AlbumSortEnum["Arranged"] = "arranged";
    AlbumSortEnum["Comments"] = "comments";
    AlbumSortEnum["Likes"] = "likes";
    AlbumSortEnum["Newest"] = "newest";
    AlbumSortEnum["Oldest"] = "oldest";
    AlbumSortEnum["Plays"] = "plays";
})(AlbumSortEnum || (AlbumSortEnum = {}));
export var AlbumThemeEnum;
(function (AlbumThemeEnum) {
    AlbumThemeEnum["Dark"] = "dark";
    AlbumThemeEnum["Standard"] = "standard";
})(AlbumThemeEnum || (AlbumThemeEnum = {}));
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_continuous_play" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "allowContinuousPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_downloads" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "allowDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_share" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "allowShare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand_color" }),
        __metadata("design:type", String)
    ], Album.prototype, "brandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Album.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_logo" }),
        __metadata("design:type", AlbumPicture)
    ], Album.prototype, "customLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Album.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Album.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Album.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", AlbumEmbed)
    ], Album.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed_brand_color" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "embedBrandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed_custom_logo" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "embedCustomLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_nav" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "hideNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_vimeo_logo" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "hideVimeoLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", String)
    ], Album.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Album.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", AlbumMetadata)
    ], Album.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Album.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Album.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], Album.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", AlbumPrivacy)
    ], Album.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Album.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review_mode" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "reviewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], Album.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], Album.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Album.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Album.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_custom_domain" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "useCustomDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Album.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=web_brand_color" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "webBrandColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=web_custom_logo" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "webCustomLogo", void 0);
    return Album;
}(SpeakeasyBase));
export { Album };
