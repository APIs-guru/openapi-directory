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
import { Picture } from "./picture";
import { Tag } from "./tag";
import { User } from "./user";
// ChannelMetadataConnectionsPrivacyUsers
/**
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
**/
var ChannelMetadataConnectionsPrivacyUsers = /** @class */ (function (_super) {
    __extends(ChannelMetadataConnectionsPrivacyUsers, _super);
    function ChannelMetadataConnectionsPrivacyUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataConnectionsPrivacyUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ChannelMetadataConnectionsPrivacyUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataConnectionsPrivacyUsers.prototype, "uri", void 0);
    return ChannelMetadataConnectionsPrivacyUsers;
}(SpeakeasyBase));
export { ChannelMetadataConnectionsPrivacyUsers };
// ChannelMetadataConnectionsUsers
/**
 * Information about the users following or moderating this channel.
**/
var ChannelMetadataConnectionsUsers = /** @class */ (function (_super) {
    __extends(ChannelMetadataConnectionsUsers, _super);
    function ChannelMetadataConnectionsUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataConnectionsUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ChannelMetadataConnectionsUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataConnectionsUsers.prototype, "uri", void 0);
    return ChannelMetadataConnectionsUsers;
}(SpeakeasyBase));
export { ChannelMetadataConnectionsUsers };
// ChannelMetadataConnectionsVideos
/**
 * Information about the videos that belong to this channel.
**/
var ChannelMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(ChannelMetadataConnectionsVideos, _super);
    function ChannelMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ChannelMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataConnectionsVideos.prototype, "uri", void 0);
    return ChannelMetadataConnectionsVideos;
}(SpeakeasyBase));
export { ChannelMetadataConnectionsVideos };
// ChannelMetadataConnections
/**
 * A collection of information that is connected to this resource.
**/
var ChannelMetadataConnections = /** @class */ (function (_super) {
    __extends(ChannelMetadataConnections, _super);
    function ChannelMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy_users" }),
        __metadata("design:type", ChannelMetadataConnectionsPrivacyUsers)
    ], ChannelMetadataConnections.prototype, "privacyUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", ChannelMetadataConnectionsUsers)
    ], ChannelMetadataConnections.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", ChannelMetadataConnectionsVideos)
    ], ChannelMetadataConnections.prototype, "videos", void 0);
    return ChannelMetadataConnections;
}(SpeakeasyBase));
export { ChannelMetadataConnections };
// ChannelMetadataInteractionsAddModerators
/**
 * An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.
**/
var ChannelMetadataInteractionsAddModerators = /** @class */ (function (_super) {
    __extends(ChannelMetadataInteractionsAddModerators, _super);
    function ChannelMetadataInteractionsAddModerators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataInteractionsAddModerators.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsAddModerators.prototype, "uri", void 0);
    return ChannelMetadataInteractionsAddModerators;
}(SpeakeasyBase));
export { ChannelMetadataInteractionsAddModerators };
// ChannelMetadataInteractionsAddTo
/**
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
**/
var ChannelMetadataInteractionsAddTo = /** @class */ (function (_super) {
    __extends(ChannelMetadataInteractionsAddTo, _super);
    function ChannelMetadataInteractionsAddTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataInteractionsAddTo.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsAddTo.prototype, "uri", void 0);
    return ChannelMetadataInteractionsAddTo;
}(SpeakeasyBase));
export { ChannelMetadataInteractionsAddTo };
export var ChannelMetadataInteractionsFollowTypeEnum;
(function (ChannelMetadataInteractionsFollowTypeEnum) {
    ChannelMetadataInteractionsFollowTypeEnum["Moderator"] = "moderator";
    ChannelMetadataInteractionsFollowTypeEnum["Subscriber"] = "subscriber";
})(ChannelMetadataInteractionsFollowTypeEnum || (ChannelMetadataInteractionsFollowTypeEnum = {}));
// ChannelMetadataInteractionsFollow
/**
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
**/
var ChannelMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(ChannelMetadataInteractionsFollow, _super);
    function ChannelMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], ChannelMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsFollow.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsFollow.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsFollow.prototype, "uri", void 0);
    return ChannelMetadataInteractionsFollow;
}(SpeakeasyBase));
export { ChannelMetadataInteractionsFollow };
// ChannelMetadataInteractionsModerateVideos
/**
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
**/
var ChannelMetadataInteractionsModerateVideos = /** @class */ (function (_super) {
    __extends(ChannelMetadataInteractionsModerateVideos, _super);
    function ChannelMetadataInteractionsModerateVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ChannelMetadataInteractionsModerateVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelMetadataInteractionsModerateVideos.prototype, "uri", void 0);
    return ChannelMetadataInteractionsModerateVideos;
}(SpeakeasyBase));
export { ChannelMetadataInteractionsModerateVideos };
// ChannelMetadataInteractions
/**
 * A list of resource URIs related to the channel.
**/
var ChannelMetadataInteractions = /** @class */ (function (_super) {
    __extends(ChannelMetadataInteractions, _super);
    function ChannelMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_moderators" }),
        __metadata("design:type", ChannelMetadataInteractionsAddModerators)
    ], ChannelMetadataInteractions.prototype, "addModerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_to" }),
        __metadata("design:type", ChannelMetadataInteractionsAddTo)
    ], ChannelMetadataInteractions.prototype, "addTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", ChannelMetadataInteractionsFollow)
    ], ChannelMetadataInteractions.prototype, "follow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderate_videos" }),
        __metadata("design:type", ChannelMetadataInteractionsModerateVideos)
    ], ChannelMetadataInteractions.prototype, "moderateVideos", void 0);
    return ChannelMetadataInteractions;
}(SpeakeasyBase));
export { ChannelMetadataInteractions };
// ChannelMetadata
/**
 * Metadata about the channel.
**/
var ChannelMetadata = /** @class */ (function (_super) {
    __extends(ChannelMetadata, _super);
    function ChannelMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", ChannelMetadataConnections)
    ], ChannelMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", ChannelMetadataInteractions)
    ], ChannelMetadata.prototype, "interactions", void 0);
    return ChannelMetadata;
}(SpeakeasyBase));
export { ChannelMetadata };
export var ChannelPrivacyViewEnum;
(function (ChannelPrivacyViewEnum) {
    ChannelPrivacyViewEnum["Anybody"] = "anybody";
    ChannelPrivacyViewEnum["Moderators"] = "moderators";
    ChannelPrivacyViewEnum["Users"] = "users";
})(ChannelPrivacyViewEnum || (ChannelPrivacyViewEnum = {}));
// ChannelPrivacy
/**
 * The privacy settings of the channel.
**/
var ChannelPrivacy = /** @class */ (function (_super) {
    __extends(ChannelPrivacy, _super);
    function ChannelPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], ChannelPrivacy.prototype, "view", void 0);
    return ChannelPrivacy;
}(SpeakeasyBase));
export { ChannelPrivacy };
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: Category }),
        __metadata("design:type", Array)
    ], Channel.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Channel.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Channel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Picture)
    ], Channel.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Channel.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ChannelMetadata)
    ], Channel.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Channel.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Channel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], Channel.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", ChannelPrivacy)
    ], Channel.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Channel.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Channel.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Channel.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Channel.prototype, "user", void 0);
    return Channel;
}(SpeakeasyBase));
export { Channel };
