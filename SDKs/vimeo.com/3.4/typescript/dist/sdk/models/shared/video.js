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
import { Category } from "./category";
import { EmbedSettings } from "./embedsettings";
import { User } from "./user";
import { Picture } from "./picture";
import { Tag } from "./tag";
export var VideoContextActionEnum;
(function (VideoContextActionEnum) {
    VideoContextActionEnum["AddedTo"] = "Added to";
    VideoContextActionEnum["AppearanceBy"] = "Appearance by";
    VideoContextActionEnum["LikedBy"] = "Liked by";
    VideoContextActionEnum["UploadedBy"] = "Uploaded by";
})(VideoContextActionEnum || (VideoContextActionEnum = {}));
// VideoContext
/**
 * The context of the video's subscription, if this video is part of a subscription.
**/
var VideoContext = /** @class */ (function (_super) {
    __extends(VideoContext, _super);
    function VideoContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], VideoContext.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Map)
    ], VideoContext.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], VideoContext.prototype, "resourceType", void 0);
    return VideoContext;
}(SpeakeasyBase));
export { VideoContext };
export var VideoLicenseEnum;
(function (VideoLicenseEnum) {
    VideoLicenseEnum["By"] = "by";
    VideoLicenseEnum["ByNc"] = "by-nc";
    VideoLicenseEnum["ByNcNd"] = "by-nc-nd";
    VideoLicenseEnum["ByNcSa"] = "by-nc-sa";
    VideoLicenseEnum["ByNd"] = "by-nd";
    VideoLicenseEnum["BySa"] = "by-sa";
    VideoLicenseEnum["Cc0"] = "cc0";
})(VideoLicenseEnum || (VideoLicenseEnum = {}));
// VideoMetadataConnectionsComments
/**
 * Information about the comments on this video.
**/
var VideoMetadataConnectionsComments = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsComments, _super);
    function VideoMetadataConnectionsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsComments.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsComments.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsComments.prototype, "uri", void 0);
    return VideoMetadataConnectionsComments;
}(SpeakeasyBase));
export { VideoMetadataConnectionsComments };
// VideoMetadataConnectionsCredits
/**
 * Information about the users credited in this video.
**/
var VideoMetadataConnectionsCredits = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsCredits, _super);
    function VideoMetadataConnectionsCredits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsCredits.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsCredits.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsCredits.prototype, "uri", void 0);
    return VideoMetadataConnectionsCredits;
}(SpeakeasyBase));
export { VideoMetadataConnectionsCredits };
// VideoMetadataConnectionsLikes
/**
 * Information about the users who have liked this video.
**/
var VideoMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsLikes, _super);
    function VideoMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsLikes.prototype, "uri", void 0);
    return VideoMetadataConnectionsLikes;
}(SpeakeasyBase));
export { VideoMetadataConnectionsLikes };
// VideoMetadataConnectionsOndemand
/**
 * Information about this video's ondemand data.
**/
var VideoMetadataConnectionsOndemand = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsOndemand, _super);
    function VideoMetadataConnectionsOndemand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsOndemand.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsOndemand.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsOndemand.prototype, "uri", void 0);
    return VideoMetadataConnectionsOndemand;
}(SpeakeasyBase));
export { VideoMetadataConnectionsOndemand };
// VideoMetadataConnectionsPictures
/**
 * Information about this video's thumbnails.
**/
var VideoMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsPictures, _super);
    function VideoMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsPictures.prototype, "uri", void 0);
    return VideoMetadataConnectionsPictures;
}(SpeakeasyBase));
export { VideoMetadataConnectionsPictures };
// VideoMetadataConnectionsPlayback
/**
 * The DRM playback status connection for this video.
**/
var VideoMetadataConnectionsPlayback = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsPlayback, _super);
    function VideoMetadataConnectionsPlayback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsPlayback.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsPlayback.prototype, "uri", void 0);
    return VideoMetadataConnectionsPlayback;
}(SpeakeasyBase));
export { VideoMetadataConnectionsPlayback };
// VideoMetadataConnectionsRecommendations
/**
 * The recommendations for this video.
**/
var VideoMetadataConnectionsRecommendations = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsRecommendations, _super);
    function VideoMetadataConnectionsRecommendations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsRecommendations.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsRecommendations.prototype, "uri", void 0);
    return VideoMetadataConnectionsRecommendations;
}(SpeakeasyBase));
export { VideoMetadataConnectionsRecommendations };
// VideoMetadataConnectionsRelated
/**
 * Related content for this video.
**/
var VideoMetadataConnectionsRelated = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsRelated, _super);
    function VideoMetadataConnectionsRelated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsRelated.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsRelated.prototype, "uri", void 0);
    return VideoMetadataConnectionsRelated;
}(SpeakeasyBase));
export { VideoMetadataConnectionsRelated };
// VideoMetadataConnectionsSeason
/**
 * Information about the video's season.
**/
var VideoMetadataConnectionsSeason = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsSeason, _super);
    function VideoMetadataConnectionsSeason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsSeason.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsSeason.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsSeason.prototype, "uri", void 0);
    return VideoMetadataConnectionsSeason;
}(SpeakeasyBase));
export { VideoMetadataConnectionsSeason };
// VideoMetadataConnectionsTexttracks
/**
 * Information about this video's text tracks.
**/
var VideoMetadataConnectionsTexttracks = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsTexttracks, _super);
    function VideoMetadataConnectionsTexttracks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsTexttracks.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsTexttracks.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsTexttracks.prototype, "uri", void 0);
    return VideoMetadataConnectionsTexttracks;
}(SpeakeasyBase));
export { VideoMetadataConnectionsTexttracks };
// VideoMetadataConnectionsTrailer
/**
 * Information about this video's VOD trailer.
**/
var VideoMetadataConnectionsTrailer = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsTrailer, _super);
    function VideoMetadataConnectionsTrailer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsTrailer.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsTrailer.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsTrailer.prototype, "uri", void 0);
    return VideoMetadataConnectionsTrailer;
}(SpeakeasyBase));
export { VideoMetadataConnectionsTrailer };
// VideoMetadataConnectionsUsersWithAccess
/**
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
var VideoMetadataConnectionsUsersWithAccess = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsUsersWithAccess, _super);
    function VideoMetadataConnectionsUsersWithAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsUsersWithAccess.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsUsersWithAccess.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsUsersWithAccess.prototype, "uri", void 0);
    return VideoMetadataConnectionsUsersWithAccess;
}(SpeakeasyBase));
export { VideoMetadataConnectionsUsersWithAccess };
// VideoMetadataConnectionsVersions
/**
 * Information about the versions of this video.
**/
var VideoMetadataConnectionsVersions = /** @class */ (function (_super) {
    __extends(VideoMetadataConnectionsVersions, _super);
    function VideoMetadataConnectionsVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsVersions.prototype, "currentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataConnectionsVersions.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoMetadataConnectionsVersions.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataConnectionsVersions.prototype, "uri", void 0);
    return VideoMetadataConnectionsVersions;
}(SpeakeasyBase));
export { VideoMetadataConnectionsVersions };
// VideoMetadataConnections
/**
 * A list of resource URIs related to the video.
**/
var VideoMetadataConnections = /** @class */ (function (_super) {
    __extends(VideoMetadataConnections, _super);
    function VideoMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", VideoMetadataConnectionsComments)
    ], VideoMetadataConnections.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credits" }),
        __metadata("design:type", VideoMetadataConnectionsCredits)
    ], VideoMetadataConnections.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", VideoMetadataConnectionsLikes)
    ], VideoMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ondemand" }),
        __metadata("design:type", VideoMetadataConnectionsOndemand)
    ], VideoMetadataConnections.prototype, "ondemand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", VideoMetadataConnectionsPictures)
    ], VideoMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playback" }),
        __metadata("design:type", VideoMetadataConnectionsPlayback)
    ], VideoMetadataConnections.prototype, "playback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendations" }),
        __metadata("design:type", VideoMetadataConnectionsRecommendations)
    ], VideoMetadataConnections.prototype, "recommendations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", VideoMetadataConnectionsRelated)
    ], VideoMetadataConnections.prototype, "related", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", VideoMetadataConnectionsSeason)
    ], VideoMetadataConnections.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=texttracks" }),
        __metadata("design:type", VideoMetadataConnectionsTexttracks)
    ], VideoMetadataConnections.prototype, "texttracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailer" }),
        __metadata("design:type", VideoMetadataConnectionsTrailer)
    ], VideoMetadataConnections.prototype, "trailer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users_with_access" }),
        __metadata("design:type", VideoMetadataConnectionsUsersWithAccess)
    ], VideoMetadataConnections.prototype, "usersWithAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versions" }),
        __metadata("design:type", VideoMetadataConnectionsVersions)
    ], VideoMetadataConnections.prototype, "versions", void 0);
    return VideoMetadataConnections;
}(SpeakeasyBase));
export { VideoMetadataConnections };
export var VideoMetadataInteractionsBuyDownloadEnum;
(function (VideoMetadataInteractionsBuyDownloadEnum) {
    VideoMetadataInteractionsBuyDownloadEnum["Available"] = "available";
    VideoMetadataInteractionsBuyDownloadEnum["Purchased"] = "purchased";
    VideoMetadataInteractionsBuyDownloadEnum["Restricted"] = "restricted";
    VideoMetadataInteractionsBuyDownloadEnum["Unavailable"] = "unavailable";
})(VideoMetadataInteractionsBuyDownloadEnum || (VideoMetadataInteractionsBuyDownloadEnum = {}));
export var VideoMetadataInteractionsBuyStreamEnum;
(function (VideoMetadataInteractionsBuyStreamEnum) {
    VideoMetadataInteractionsBuyStreamEnum["Available"] = "available";
    VideoMetadataInteractionsBuyStreamEnum["Purchased"] = "purchased";
    VideoMetadataInteractionsBuyStreamEnum["Restricted"] = "restricted";
    VideoMetadataInteractionsBuyStreamEnum["Unavailable"] = "unavailable";
})(VideoMetadataInteractionsBuyStreamEnum || (VideoMetadataInteractionsBuyStreamEnum = {}));
// VideoMetadataInteractionsBuy
/**
 * The Buy interaction for a On Demand video.
**/
var VideoMetadataInteractionsBuy = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsBuy, _super);
    function VideoMetadataInteractionsBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_price" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "displayPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsBuy.prototype, "drm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], VideoMetadataInteractionsBuy.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "purchaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "stream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsBuy.prototype, "uri", void 0);
    return VideoMetadataInteractionsBuy;
}(SpeakeasyBase));
export { VideoMetadataInteractionsBuy };
// VideoMetadataInteractionsChannel
/**
 * When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.
**/
var VideoMetadataInteractionsChannel = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsChannel, _super);
    function VideoMetadataInteractionsChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsChannel.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsChannel.prototype, "uri", void 0);
    return VideoMetadataInteractionsChannel;
}(SpeakeasyBase));
export { VideoMetadataInteractionsChannel };
// VideoMetadataInteractionsLike
/**
 * Information about whether the authenticated user has liked this video.
**/
var VideoMetadataInteractionsLike = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsLike, _super);
    function VideoMetadataInteractionsLike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsLike.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsLike.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsLike.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsLike.prototype, "uri", void 0);
    return VideoMetadataInteractionsLike;
}(SpeakeasyBase));
export { VideoMetadataInteractionsLike };
export var VideoMetadataInteractionsRentStreamEnum;
(function (VideoMetadataInteractionsRentStreamEnum) {
    VideoMetadataInteractionsRentStreamEnum["Available"] = "available";
    VideoMetadataInteractionsRentStreamEnum["Purchased"] = "purchased";
    VideoMetadataInteractionsRentStreamEnum["Restricted"] = "restricted";
    VideoMetadataInteractionsRentStreamEnum["Unavailable"] = "unavailable";
})(VideoMetadataInteractionsRentStreamEnum || (VideoMetadataInteractionsRentStreamEnum = {}));
// VideoMetadataInteractionsRent
/**
 * The Rent interaction for an On Demand video.
**/
var VideoMetadataInteractionsRent = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsRent, _super);
    function VideoMetadataInteractionsRent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_price" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "displayPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsRent.prototype, "drm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "expiresTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], VideoMetadataInteractionsRent.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "purchaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "stream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsRent.prototype, "uri", void 0);
    return VideoMetadataInteractionsRent;
}(SpeakeasyBase));
export { VideoMetadataInteractionsRent };
// VideoMetadataInteractionsReport
/**
 * Information about where and how to report a video.
**/
var VideoMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsReport, _super);
    function VideoMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsReport.prototype, "uri", void 0);
    return VideoMetadataInteractionsReport;
}(SpeakeasyBase));
export { VideoMetadataInteractionsReport };
// VideoMetadataInteractionsSubscribe
/**
 * Subscription information for an On Demand video.
**/
var VideoMetadataInteractionsSubscribe = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsSubscribe, _super);
    function VideoMetadataInteractionsSubscribe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drm" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsSubscribe.prototype, "drm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsSubscribe.prototype, "expiresTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsSubscribe.prototype, "purchaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stream" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsSubscribe.prototype, "stream", void 0);
    return VideoMetadataInteractionsSubscribe;
}(SpeakeasyBase));
export { VideoMetadataInteractionsSubscribe };
// VideoMetadataInteractionsWatched
/**
 * Information about removing this video from the user's list of watched videos.
**/
var VideoMetadataInteractionsWatched = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsWatched, _super);
    function VideoMetadataInteractionsWatched() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsWatched.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsWatched.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsWatched.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsWatched.prototype, "uri", void 0);
    return VideoMetadataInteractionsWatched;
}(SpeakeasyBase));
export { VideoMetadataInteractionsWatched };
// VideoMetadataInteractionsWatchlater
/**
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
var VideoMetadataInteractionsWatchlater = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractionsWatchlater, _super);
    function VideoMetadataInteractionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoMetadataInteractionsWatchlater.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsWatchlater.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoMetadataInteractionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoMetadataInteractionsWatchlater.prototype, "uri", void 0);
    return VideoMetadataInteractionsWatchlater;
}(SpeakeasyBase));
export { VideoMetadataInteractionsWatchlater };
// VideoMetadataInteractions
/**
 * A list of resource URIs related to the video.
**/
var VideoMetadataInteractions = /** @class */ (function (_super) {
    __extends(VideoMetadataInteractions, _super);
    function VideoMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buy" }),
        __metadata("design:type", VideoMetadataInteractionsBuy)
    ], VideoMetadataInteractions.prototype, "buy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", VideoMetadataInteractionsChannel)
    ], VideoMetadataInteractions.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like" }),
        __metadata("design:type", VideoMetadataInteractionsLike)
    ], VideoMetadataInteractions.prototype, "like", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rent" }),
        __metadata("design:type", VideoMetadataInteractionsRent)
    ], VideoMetadataInteractions.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", VideoMetadataInteractionsReport)
    ], VideoMetadataInteractions.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribe" }),
        __metadata("design:type", VideoMetadataInteractionsSubscribe)
    ], VideoMetadataInteractions.prototype, "subscribe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched" }),
        __metadata("design:type", VideoMetadataInteractionsWatched)
    ], VideoMetadataInteractions.prototype, "watched", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", VideoMetadataInteractionsWatchlater)
    ], VideoMetadataInteractions.prototype, "watchlater", void 0);
    return VideoMetadataInteractions;
}(SpeakeasyBase));
export { VideoMetadataInteractions };
// VideoMetadata
/**
 * The video's metadata.
**/
var VideoMetadata = /** @class */ (function (_super) {
    __extends(VideoMetadata, _super);
    function VideoMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", VideoMetadataConnections)
    ], VideoMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", VideoMetadataInteractions)
    ], VideoMetadata.prototype, "interactions", void 0);
    return VideoMetadata;
}(SpeakeasyBase));
export { VideoMetadata };
// VideoProjectMetadataConnectionsVideos
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
var VideoProjectMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(VideoProjectMetadataConnectionsVideos, _super);
    function VideoProjectMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoProjectMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoProjectMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoProjectMetadataConnectionsVideos.prototype, "uri", void 0);
    return VideoProjectMetadataConnectionsVideos;
}(SpeakeasyBase));
export { VideoProjectMetadataConnectionsVideos };
// VideoProjectMetadataConnections
/**
 * A list of resource URIs related to the project.
**/
var VideoProjectMetadataConnections = /** @class */ (function (_super) {
    __extends(VideoProjectMetadataConnections, _super);
    function VideoProjectMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", VideoProjectMetadataConnectionsVideos)
    ], VideoProjectMetadataConnections.prototype, "videos", void 0);
    return VideoProjectMetadataConnections;
}(SpeakeasyBase));
export { VideoProjectMetadataConnections };
// VideoProjectMetadata
/**
 * The project's metadata.
**/
var VideoProjectMetadata = /** @class */ (function (_super) {
    __extends(VideoProjectMetadata, _super);
    function VideoProjectMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", VideoProjectMetadataConnections)
    ], VideoProjectMetadata.prototype, "connections", void 0);
    return VideoProjectMetadata;
}(SpeakeasyBase));
export { VideoProjectMetadata };
// VideoProject
/**
 * Information about the folder that contains this video.
**/
var VideoProject = /** @class */ (function (_super) {
    __extends(VideoProject, _super);
    function VideoProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], VideoProject.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", VideoProjectMetadata)
    ], VideoProject.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], VideoProject.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoProject.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], VideoProject.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoProject.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], VideoProject.prototype, "user", void 0);
    return VideoProject;
}(SpeakeasyBase));
export { VideoProject };
export var VideoPrivacyCommentsEnum;
(function (VideoPrivacyCommentsEnum) {
    VideoPrivacyCommentsEnum["Anybody"] = "anybody";
    VideoPrivacyCommentsEnum["Contacts"] = "contacts";
    VideoPrivacyCommentsEnum["Nobody"] = "nobody";
})(VideoPrivacyCommentsEnum || (VideoPrivacyCommentsEnum = {}));
export var VideoPrivacyEmbedEnum;
(function (VideoPrivacyEmbedEnum) {
    VideoPrivacyEmbedEnum["Private"] = "private";
    VideoPrivacyEmbedEnum["Public"] = "public";
})(VideoPrivacyEmbedEnum || (VideoPrivacyEmbedEnum = {}));
export var VideoPrivacyViewEnum;
(function (VideoPrivacyViewEnum) {
    VideoPrivacyViewEnum["Anybody"] = "anybody";
    VideoPrivacyViewEnum["Contacts"] = "contacts";
    VideoPrivacyViewEnum["Disable"] = "disable";
    VideoPrivacyViewEnum["Nobody"] = "nobody";
    VideoPrivacyViewEnum["Password"] = "password";
    VideoPrivacyViewEnum["Unlisted"] = "unlisted";
    VideoPrivacyViewEnum["Users"] = "users";
})(VideoPrivacyViewEnum || (VideoPrivacyViewEnum = {}));
// VideoPrivacy
/**
 * The video's privacy setting.
**/
var VideoPrivacy = /** @class */ (function (_super) {
    __extends(VideoPrivacy, _super);
    function VideoPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], VideoPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], VideoPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], VideoPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], VideoPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], VideoPrivacy.prototype, "view", void 0);
    return VideoPrivacy;
}(SpeakeasyBase));
export { VideoPrivacy };
var VideoSpatialDirectorTimeline = /** @class */ (function (_super) {
    __extends(VideoSpatialDirectorTimeline, _super);
    function VideoSpatialDirectorTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], VideoSpatialDirectorTimeline.prototype, "pitch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roll" }),
        __metadata("design:type", Number)
    ], VideoSpatialDirectorTimeline.prototype, "roll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_code" }),
        __metadata("design:type", Number)
    ], VideoSpatialDirectorTimeline.prototype, "timeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yaw" }),
        __metadata("design:type", Number)
    ], VideoSpatialDirectorTimeline.prototype, "yaw", void 0);
    return VideoSpatialDirectorTimeline;
}(SpeakeasyBase));
export { VideoSpatialDirectorTimeline };
export var VideoSpatialProjectionEnum;
(function (VideoSpatialProjectionEnum) {
    VideoSpatialProjectionEnum["Cubical"] = "cubical";
    VideoSpatialProjectionEnum["Cylindrical"] = "cylindrical";
    VideoSpatialProjectionEnum["Dome"] = "dome";
    VideoSpatialProjectionEnum["Equirectangular"] = "equirectangular";
    VideoSpatialProjectionEnum["Pyramid"] = "pyramid";
})(VideoSpatialProjectionEnum || (VideoSpatialProjectionEnum = {}));
export var VideoSpatialStereoFormatEnum;
(function (VideoSpatialStereoFormatEnum) {
    VideoSpatialStereoFormatEnum["LeftRight"] = "left-right";
    VideoSpatialStereoFormatEnum["Mono"] = "mono";
    VideoSpatialStereoFormatEnum["TopBottom"] = "top-bottom";
})(VideoSpatialStereoFormatEnum || (VideoSpatialStereoFormatEnum = {}));
// VideoSpatial
/**
 * 360 spatial data.
**/
var VideoSpatial = /** @class */ (function (_super) {
    __extends(VideoSpatial, _super);
    function VideoSpatial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: VideoSpatialDirectorTimeline }),
        __metadata("design:type", Array)
    ], VideoSpatial.prototype, "directorTimeline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_of_view" }),
        __metadata("design:type", Number)
    ], VideoSpatial.prototype, "fieldOfView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projection" }),
        __metadata("design:type", String)
    ], VideoSpatial.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stereo_format" }),
        __metadata("design:type", String)
    ], VideoSpatial.prototype, "stereoFormat", void 0);
    return VideoSpatial;
}(SpeakeasyBase));
export { VideoSpatial };
// VideoStats
/**
 * A collection of stats associated with this video.
**/
var VideoStats = /** @class */ (function (_super) {
    __extends(VideoStats, _super);
    function VideoStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], VideoStats.prototype, "plays", void 0);
    return VideoStats;
}(SpeakeasyBase));
export { VideoStats };
export var VideoStatusEnum;
(function (VideoStatusEnum) {
    VideoStatusEnum["Available"] = "available";
    VideoStatusEnum["QuotaExceeded"] = "quota_exceeded";
    VideoStatusEnum["TotalCapExceeded"] = "total_cap_exceeded";
    VideoStatusEnum["TranscodeStarting"] = "transcode_starting";
    VideoStatusEnum["Transcoding"] = "transcoding";
    VideoStatusEnum["TranscodingError"] = "transcoding_error";
    VideoStatusEnum["Unavailable"] = "unavailable";
    VideoStatusEnum["Uploading"] = "uploading";
    VideoStatusEnum["UploadingError"] = "uploading_error";
})(VideoStatusEnum || (VideoStatusEnum = {}));
export var VideoTranscodeStatusEnum;
(function (VideoTranscodeStatusEnum) {
    VideoTranscodeStatusEnum["Complete"] = "complete";
    VideoTranscodeStatusEnum["Error"] = "error";
    VideoTranscodeStatusEnum["InProgress"] = "in_progress";
})(VideoTranscodeStatusEnum || (VideoTranscodeStatusEnum = {}));
// VideoTranscode
/**
 * The transcode information for a video upload.
**/
var VideoTranscode = /** @class */ (function (_super) {
    __extends(VideoTranscode, _super);
    function VideoTranscode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoTranscode.prototype, "status", void 0);
    return VideoTranscode;
}(SpeakeasyBase));
export { VideoTranscode };
export var VideoUploadApproachEnum;
(function (VideoUploadApproachEnum) {
    VideoUploadApproachEnum["Post"] = "post";
    VideoUploadApproachEnum["Pull"] = "pull";
    VideoUploadApproachEnum["Streaming"] = "streaming";
    VideoUploadApproachEnum["Tus"] = "tus";
})(VideoUploadApproachEnum || (VideoUploadApproachEnum = {}));
export var VideoUploadStatusEnum;
(function (VideoUploadStatusEnum) {
    VideoUploadStatusEnum["Complete"] = "complete";
    VideoUploadStatusEnum["Error"] = "error";
    VideoUploadStatusEnum["InProgress"] = "in_progress";
})(VideoUploadStatusEnum || (VideoUploadStatusEnum = {}));
// VideoUpload
/**
 * The upload information for this video.
**/
var VideoUpload = /** @class */ (function (_super) {
    __extends(VideoUpload, _super);
    function VideoUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approach" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "approach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complete_uri" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "completeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], VideoUpload.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_link" }),
        __metadata("design:type", String)
    ], VideoUpload.prototype, "uploadLink", void 0);
    return VideoUpload;
}(SpeakeasyBase));
export { VideoUpload };
export var VideoUserAccountEnum;
(function (VideoUserAccountEnum) {
    VideoUserAccountEnum["Basic"] = "basic";
    VideoUserAccountEnum["Business"] = "business";
    VideoUserAccountEnum["LiveBusiness"] = "live_business";
    VideoUserAccountEnum["LivePremium"] = "live_premium";
    VideoUserAccountEnum["LivePro"] = "live_pro";
    VideoUserAccountEnum["Plus"] = "plus";
    VideoUserAccountEnum["Pro"] = "pro";
    VideoUserAccountEnum["ProUnlimited"] = "pro_unlimited";
    VideoUserAccountEnum["Producer"] = "producer";
})(VideoUserAccountEnum || (VideoUserAccountEnum = {}));
// VideoUserMetadataConnectionsAlbums
/**
 * Information about the albums created by this user.
**/
var VideoUserMetadataConnectionsAlbums = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsAlbums, _super);
    function VideoUserMetadataConnectionsAlbums() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsAlbums.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsAlbums.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsAlbums.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsAlbums;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsAlbums };
// VideoUserMetadataConnectionsAppearances
/**
 * Information about the appearances of this user in other videos.
**/
var VideoUserMetadataConnectionsAppearances = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsAppearances, _super);
    function VideoUserMetadataConnectionsAppearances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsAppearances.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsAppearances.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsAppearances.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsAppearances;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsAppearances };
// VideoUserMetadataConnectionsBlock
/**
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
var VideoUserMetadataConnectionsBlock = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsBlock, _super);
    function VideoUserMetadataConnectionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsBlock.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsBlock.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsBlock;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsBlock };
// VideoUserMetadataConnectionsCategories
/**
 * Information about this user's followed categories.
**/
var VideoUserMetadataConnectionsCategories = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsCategories, _super);
    function VideoUserMetadataConnectionsCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsCategories.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsCategories.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsCategories.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsCategories;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsCategories };
// VideoUserMetadataConnectionsChannels
/**
 * Information about this user's subscribed channels.
**/
var VideoUserMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsChannels, _super);
    function VideoUserMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsChannels.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsChannels;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsChannels };
// VideoUserMetadataConnectionsFeed
/**
 * Information about this user's feed.
**/
var VideoUserMetadataConnectionsFeed = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsFeed, _super);
    function VideoUserMetadataConnectionsFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsFeed.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsFeed.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsFeed;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsFeed };
// VideoUserMetadataConnectionsFolders
/**
 * Information about this user's folders.
**/
var VideoUserMetadataConnectionsFolders = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsFolders, _super);
    function VideoUserMetadataConnectionsFolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsFolders.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsFolders.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsFolders.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsFolders;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsFolders };
// VideoUserMetadataConnectionsFollowers
/**
 * Information about the user's followers.
**/
var VideoUserMetadataConnectionsFollowers = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsFollowers, _super);
    function VideoUserMetadataConnectionsFollowers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsFollowers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsFollowers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsFollowers.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsFollowers;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsFollowers };
// VideoUserMetadataConnectionsFollowing
/**
 * Information about the users that the current user is following.
**/
var VideoUserMetadataConnectionsFollowing = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsFollowing, _super);
    function VideoUserMetadataConnectionsFollowing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsFollowing.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsFollowing.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsFollowing.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsFollowing;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsFollowing };
// VideoUserMetadataConnectionsGroups
/**
 * Information about the groups created by this user.
**/
var VideoUserMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsGroups, _super);
    function VideoUserMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsGroups.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsGroups;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsGroups };
// VideoUserMetadataConnectionsLikes
/**
 * Information about the videos that this user has liked.
**/
var VideoUserMetadataConnectionsLikes = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsLikes, _super);
    function VideoUserMetadataConnectionsLikes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsLikes.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsLikes.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsLikes.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsLikes;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsLikes };
// VideoUserMetadataConnectionsModeratedChannels
/**
 * Information about the channels that this user moderates.
**/
var VideoUserMetadataConnectionsModeratedChannels = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsModeratedChannels, _super);
    function VideoUserMetadataConnectionsModeratedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsModeratedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsModeratedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsModeratedChannels.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsModeratedChannels;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsModeratedChannels };
// VideoUserMetadataConnectionsPictures
/**
 * Information about this user's portraits.
**/
var VideoUserMetadataConnectionsPictures = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsPictures, _super);
    function VideoUserMetadataConnectionsPictures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsPictures.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsPictures.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsPictures.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsPictures;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsPictures };
// VideoUserMetadataConnectionsPortfolios
/**
 * Information about this user's portfolios.
**/
var VideoUserMetadataConnectionsPortfolios = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsPortfolios, _super);
    function VideoUserMetadataConnectionsPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsPortfolios.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsPortfolios.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsPortfolios.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsPortfolios;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsPortfolios };
// VideoUserMetadataConnectionsRecommendedChannels
/**
 * A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var VideoUserMetadataConnectionsRecommendedChannels = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsRecommendedChannels, _super);
    function VideoUserMetadataConnectionsRecommendedChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsRecommendedChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsRecommendedChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsRecommendedChannels.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsRecommendedChannels;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsRecommendedChannels };
// VideoUserMetadataConnectionsRecommendedUsers
/**
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
var VideoUserMetadataConnectionsRecommendedUsers = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsRecommendedUsers, _super);
    function VideoUserMetadataConnectionsRecommendedUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsRecommendedUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsRecommendedUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsRecommendedUsers.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsRecommendedUsers;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsRecommendedUsers };
// VideoUserMetadataConnectionsShared
/**
 * Information about the videos that have been shared with this user.
**/
var VideoUserMetadataConnectionsShared = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsShared, _super);
    function VideoUserMetadataConnectionsShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsShared.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsShared.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsShared.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsShared;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsShared };
// VideoUserMetadataConnectionsVideos
/**
 * Information about the videos uploaded by this user.
**/
var VideoUserMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsVideos, _super);
    function VideoUserMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsVideos.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsVideos;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsVideos };
// VideoUserMetadataConnectionsWatchedVideos
/**
 * Information about the videos that this user has watched.
**/
var VideoUserMetadataConnectionsWatchedVideos = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsWatchedVideos, _super);
    function VideoUserMetadataConnectionsWatchedVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsWatchedVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsWatchedVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsWatchedVideos.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsWatchedVideos;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsWatchedVideos };
// VideoUserMetadataConnectionsWatchlater
/**
 * Information about the videos that this user wants to watch later.
**/
var VideoUserMetadataConnectionsWatchlater = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnectionsWatchlater, _super);
    function VideoUserMetadataConnectionsWatchlater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataConnectionsWatchlater.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], VideoUserMetadataConnectionsWatchlater.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataConnectionsWatchlater.prototype, "uri", void 0);
    return VideoUserMetadataConnectionsWatchlater;
}(SpeakeasyBase));
export { VideoUserMetadataConnectionsWatchlater };
// VideoUserMetadataConnections
/**
 * The list of resource URIs related to the user.
**/
var VideoUserMetadataConnections = /** @class */ (function (_super) {
    __extends(VideoUserMetadataConnections, _super);
    function VideoUserMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums" }),
        __metadata("design:type", VideoUserMetadataConnectionsAlbums)
    ], VideoUserMetadataConnections.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appearances" }),
        __metadata("design:type", VideoUserMetadataConnectionsAppearances)
    ], VideoUserMetadataConnections.prototype, "appearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", VideoUserMetadataConnectionsBlock)
    ], VideoUserMetadataConnections.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", VideoUserMetadataConnectionsCategories)
    ], VideoUserMetadataConnections.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", VideoUserMetadataConnectionsChannels)
    ], VideoUserMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed" }),
        __metadata("design:type", VideoUserMetadataConnectionsFeed)
    ], VideoUserMetadataConnections.prototype, "feed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", VideoUserMetadataConnectionsFolders)
    ], VideoUserMetadataConnections.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", VideoUserMetadataConnectionsFollowers)
    ], VideoUserMetadataConnections.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=following" }),
        __metadata("design:type", VideoUserMetadataConnectionsFollowing)
    ], VideoUserMetadataConnections.prototype, "following", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", VideoUserMetadataConnectionsGroups)
    ], VideoUserMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes" }),
        __metadata("design:type", VideoUserMetadataConnectionsLikes)
    ], VideoUserMetadataConnections.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderated_channels" }),
        __metadata("design:type", VideoUserMetadataConnectionsModeratedChannels)
    ], VideoUserMetadataConnections.prototype, "moderatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", VideoUserMetadataConnectionsPictures)
    ], VideoUserMetadataConnections.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portfolios" }),
        __metadata("design:type", VideoUserMetadataConnectionsPortfolios)
    ], VideoUserMetadataConnections.prototype, "portfolios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_channels" }),
        __metadata("design:type", VideoUserMetadataConnectionsRecommendedChannels)
    ], VideoUserMetadataConnections.prototype, "recommendedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommended_users" }),
        __metadata("design:type", VideoUserMetadataConnectionsRecommendedUsers)
    ], VideoUserMetadataConnections.prototype, "recommendedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", VideoUserMetadataConnectionsShared)
    ], VideoUserMetadataConnections.prototype, "shared", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", VideoUserMetadataConnectionsVideos)
    ], VideoUserMetadataConnections.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_videos" }),
        __metadata("design:type", VideoUserMetadataConnectionsWatchedVideos)
    ], VideoUserMetadataConnections.prototype, "watchedVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchlater" }),
        __metadata("design:type", VideoUserMetadataConnectionsWatchlater)
    ], VideoUserMetadataConnections.prototype, "watchlater", void 0);
    return VideoUserMetadataConnections;
}(SpeakeasyBase));
export { VideoUserMetadataConnections };
var VideoUserMetadataInteractionsAddPrivacyUser = /** @class */ (function (_super) {
    __extends(VideoUserMetadataInteractionsAddPrivacyUser, _super);
    function VideoUserMetadataInteractionsAddPrivacyUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataInteractionsAddPrivacyUser.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataInteractionsAddPrivacyUser.prototype, "uri", void 0);
    return VideoUserMetadataInteractionsAddPrivacyUser;
}(SpeakeasyBase));
export { VideoUserMetadataInteractionsAddPrivacyUser };
// VideoUserMetadataInteractionsBlock
/**
 * Information related to the block status of this user.
**/
var VideoUserMetadataInteractionsBlock = /** @class */ (function (_super) {
    __extends(VideoUserMetadataInteractionsBlock, _super);
    function VideoUserMetadataInteractionsBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoUserMetadataInteractionsBlock.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], VideoUserMetadataInteractionsBlock.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataInteractionsBlock.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataInteractionsBlock.prototype, "uri", void 0);
    return VideoUserMetadataInteractionsBlock;
}(SpeakeasyBase));
export { VideoUserMetadataInteractionsBlock };
// VideoUserMetadataInteractionsFollow
/**
 * Information related to the followed status of this user.
**/
var VideoUserMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(VideoUserMetadataInteractionsFollow, _super);
    function VideoUserMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], VideoUserMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataInteractionsFollow.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataInteractionsFollow.prototype, "uri", void 0);
    return VideoUserMetadataInteractionsFollow;
}(SpeakeasyBase));
export { VideoUserMetadataInteractionsFollow };
// VideoUserMetadataInteractionsReport
/**
 * Information regarding where and how to report a user.
**/
var VideoUserMetadataInteractionsReport = /** @class */ (function (_super) {
    __extends(VideoUserMetadataInteractionsReport, _super);
    function VideoUserMetadataInteractionsReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataInteractionsReport.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", Array)
    ], VideoUserMetadataInteractionsReport.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUserMetadataInteractionsReport.prototype, "uri", void 0);
    return VideoUserMetadataInteractionsReport;
}(SpeakeasyBase));
export { VideoUserMetadataInteractionsReport };
var VideoUserMetadataInteractions = /** @class */ (function (_super) {
    __extends(VideoUserMetadataInteractions, _super);
    function VideoUserMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_privacy_user" }),
        __metadata("design:type", VideoUserMetadataInteractionsAddPrivacyUser)
    ], VideoUserMetadataInteractions.prototype, "addPrivacyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=block" }),
        __metadata("design:type", VideoUserMetadataInteractionsBlock)
    ], VideoUserMetadataInteractions.prototype, "block", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", VideoUserMetadataInteractionsFollow)
    ], VideoUserMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report" }),
        __metadata("design:type", VideoUserMetadataInteractionsReport)
    ], VideoUserMetadataInteractions.prototype, "report", void 0);
    return VideoUserMetadataInteractions;
}(SpeakeasyBase));
export { VideoUserMetadataInteractions };
// VideoUserMetadata
/**
 * The user's metadata.
**/
var VideoUserMetadata = /** @class */ (function (_super) {
    __extends(VideoUserMetadata, _super);
    function VideoUserMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", VideoUserMetadataConnections)
    ], VideoUserMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", VideoUserMetadataInteractions)
    ], VideoUserMetadata.prototype, "interactions", void 0);
    return VideoUserMetadata;
}(SpeakeasyBase));
export { VideoUserMetadata };
export var VideoUserPreferencesVideosPrivacyCommentsEnum;
(function (VideoUserPreferencesVideosPrivacyCommentsEnum) {
    VideoUserPreferencesVideosPrivacyCommentsEnum["Anybody"] = "anybody";
    VideoUserPreferencesVideosPrivacyCommentsEnum["Contacts"] = "contacts";
    VideoUserPreferencesVideosPrivacyCommentsEnum["Nobody"] = "nobody";
})(VideoUserPreferencesVideosPrivacyCommentsEnum || (VideoUserPreferencesVideosPrivacyCommentsEnum = {}));
export var VideoUserPreferencesVideosPrivacyEmbedEnum;
(function (VideoUserPreferencesVideosPrivacyEmbedEnum) {
    VideoUserPreferencesVideosPrivacyEmbedEnum["Private"] = "private";
    VideoUserPreferencesVideosPrivacyEmbedEnum["Public"] = "public";
    VideoUserPreferencesVideosPrivacyEmbedEnum["Whitelist"] = "whitelist";
})(VideoUserPreferencesVideosPrivacyEmbedEnum || (VideoUserPreferencesVideosPrivacyEmbedEnum = {}));
export var VideoUserPreferencesVideosPrivacyViewEnum;
(function (VideoUserPreferencesVideosPrivacyViewEnum) {
    VideoUserPreferencesVideosPrivacyViewEnum["Anybody"] = "anybody";
    VideoUserPreferencesVideosPrivacyViewEnum["Contacts"] = "contacts";
    VideoUserPreferencesVideosPrivacyViewEnum["Disable"] = "disable";
    VideoUserPreferencesVideosPrivacyViewEnum["Nobody"] = "nobody";
    VideoUserPreferencesVideosPrivacyViewEnum["Password"] = "password";
    VideoUserPreferencesVideosPrivacyViewEnum["Unlisted"] = "unlisted";
    VideoUserPreferencesVideosPrivacyViewEnum["Users"] = "users";
})(VideoUserPreferencesVideosPrivacyViewEnum || (VideoUserPreferencesVideosPrivacyViewEnum = {}));
var VideoUserPreferencesVideosPrivacy = /** @class */ (function (_super) {
    __extends(VideoUserPreferencesVideosPrivacy, _super);
    function VideoUserPreferencesVideosPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add" }),
        __metadata("design:type", Boolean)
    ], VideoUserPreferencesVideosPrivacy.prototype, "add", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], VideoUserPreferencesVideosPrivacy.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], VideoUserPreferencesVideosPrivacy.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", String)
    ], VideoUserPreferencesVideosPrivacy.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], VideoUserPreferencesVideosPrivacy.prototype, "view", void 0);
    return VideoUserPreferencesVideosPrivacy;
}(SpeakeasyBase));
export { VideoUserPreferencesVideosPrivacy };
var VideoUserPreferencesVideos = /** @class */ (function (_super) {
    __extends(VideoUserPreferencesVideos, _super);
    function VideoUserPreferencesVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", VideoUserPreferencesVideosPrivacy)
    ], VideoUserPreferencesVideos.prototype, "privacy", void 0);
    return VideoUserPreferencesVideos;
}(SpeakeasyBase));
export { VideoUserPreferencesVideos };
var VideoUserPreferences = /** @class */ (function (_super) {
    __extends(VideoUserPreferences, _super);
    function VideoUserPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", VideoUserPreferencesVideos)
    ], VideoUserPreferences.prototype, "videos", void 0);
    return VideoUserPreferences;
}(SpeakeasyBase));
export { VideoUserPreferences };
// VideoUserUploadQuotaLifetime
/**
 * Information about the user's lifetime upload usage.
**/
var VideoUserUploadQuotaLifetime = /** @class */ (function (_super) {
    __extends(VideoUserUploadQuotaLifetime, _super);
    function VideoUserUploadQuotaLifetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaLifetime.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaLifetime.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaLifetime.prototype, "used", void 0);
    return VideoUserUploadQuotaLifetime;
}(SpeakeasyBase));
export { VideoUserUploadQuotaLifetime };
// VideoUserUploadQuotaPeriodic
/**
 * Information about the user's usage for the current period.
**/
var VideoUserUploadQuotaPeriodic = /** @class */ (function (_super) {
    __extends(VideoUserUploadQuotaPeriodic, _super);
    function VideoUserUploadQuotaPeriodic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaPeriodic.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaPeriodic.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset_date" }),
        __metadata("design:type", String)
    ], VideoUserUploadQuotaPeriodic.prototype, "resetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaPeriodic.prototype, "used", void 0);
    return VideoUserUploadQuotaPeriodic;
}(SpeakeasyBase));
export { VideoUserUploadQuotaPeriodic };
export var VideoUserUploadQuotaSpaceShowingEnum;
(function (VideoUserUploadQuotaSpaceShowingEnum) {
    VideoUserUploadQuotaSpaceShowingEnum["Lifetime"] = "lifetime";
    VideoUserUploadQuotaSpaceShowingEnum["Periodic"] = "periodic";
})(VideoUserUploadQuotaSpaceShowingEnum || (VideoUserUploadQuotaSpaceShowingEnum = {}));
// VideoUserUploadQuotaSpace
/**
 * Information about the user's upload space remaining for the current period.
**/
var VideoUserUploadQuotaSpace = /** @class */ (function (_super) {
    __extends(VideoUserUploadQuotaSpace, _super);
    function VideoUserUploadQuotaSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaSpace.prototype, "free", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaSpace.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showing" }),
        __metadata("design:type", String)
    ], VideoUserUploadQuotaSpace.prototype, "showing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used" }),
        __metadata("design:type", Number)
    ], VideoUserUploadQuotaSpace.prototype, "used", void 0);
    return VideoUserUploadQuotaSpace;
}(SpeakeasyBase));
export { VideoUserUploadQuotaSpace };
// VideoUserUploadQuota
/**
 * Appears only when the user has upload access and is looking at their own user record.
**/
var VideoUserUploadQuota = /** @class */ (function (_super) {
    __extends(VideoUserUploadQuota, _super);
    function VideoUserUploadQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", VideoUserUploadQuotaLifetime)
    ], VideoUserUploadQuota.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodic" }),
        __metadata("design:type", VideoUserUploadQuotaPeriodic)
    ], VideoUserUploadQuota.prototype, "periodic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space" }),
        __metadata("design:type", VideoUserUploadQuotaSpace)
    ], VideoUserUploadQuota.prototype, "space", void 0);
    return VideoUserUploadQuota;
}(SpeakeasyBase));
export { VideoUserUploadQuota };
var VideoUserWebsites = /** @class */ (function (_super) {
    __extends(VideoUserWebsites, _super);
    function VideoUserWebsites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VideoUserWebsites.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoUserWebsites.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoUserWebsites.prototype, "name", void 0);
    return VideoUserWebsites;
}(SpeakeasyBase));
export { VideoUserWebsites };
// VideoUser
/**
 * The video owner.
**/
var VideoUser = /** @class */ (function (_super) {
    __extends(VideoUser, _super);
    function VideoUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "bio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_filter" }),
        __metadata("design:type", Array)
    ], VideoUser.prototype, "contentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", VideoUserMetadata)
    ], VideoUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], VideoUser.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", VideoUserPreferences)
    ], VideoUser.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload_quota" }),
        __metadata("design:type", VideoUserUploadQuota)
    ], VideoUser.prototype, "uploadQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VideoUser.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites", elemType: VideoUserWebsites }),
        __metadata("design:type", Array)
    ], VideoUser.prototype, "websites", void 0);
    return VideoUser;
}(SpeakeasyBase));
export { VideoUser };
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: Category }),
        __metadata("design:type", Array)
    ], Video.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_rating" }),
        __metadata("design:type", Array)
    ], Video.prototype, "contentRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", VideoContext)
    ], Video.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Video.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Video.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Video.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embed" }),
        __metadata("design:type", EmbedSettings)
    ], Video.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Video.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Video.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_user_action_event_date" }),
        __metadata("design:type", String)
    ], Video.prototype, "lastUserActionEventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], Video.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Video.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", VideoMetadata)
    ], Video.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Video.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Video.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder" }),
        __metadata("design:type", VideoProject)
    ], Video.prototype, "parentFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Video.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], Video.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", VideoPrivacy)
    ], Video.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release_time" }),
        __metadata("design:type", String)
    ], Video.prototype, "releaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Video.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spatial" }),
        __metadata("design:type", VideoSpatial)
    ], Video.prototype, "spatial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", VideoStats)
    ], Video.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Video.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Video.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcode" }),
        __metadata("design:type", VideoTranscode)
    ], Video.prototype, "transcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upload" }),
        __metadata("design:type", VideoUpload)
    ], Video.prototype, "upload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Video.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", VideoUser)
    ], Video.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Video.prototype, "width", void 0);
    return Video;
}(SpeakeasyBase));
export { Video };
