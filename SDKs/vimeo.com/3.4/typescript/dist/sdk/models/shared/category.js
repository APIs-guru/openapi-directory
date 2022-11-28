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
// CategoryMetadataConnectionsChannels
/**
 * Information about the channels related to this category.
**/
var CategoryMetadataConnectionsChannels = /** @class */ (function (_super) {
    __extends(CategoryMetadataConnectionsChannels, _super);
    function CategoryMetadataConnectionsChannels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CategoryMetadataConnectionsChannels.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CategoryMetadataConnectionsChannels.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryMetadataConnectionsChannels.prototype, "uri", void 0);
    return CategoryMetadataConnectionsChannels;
}(SpeakeasyBase));
export { CategoryMetadataConnectionsChannels };
// CategoryMetadataConnectionsGroups
/**
 * Information about the groups related to this category.
**/
var CategoryMetadataConnectionsGroups = /** @class */ (function (_super) {
    __extends(CategoryMetadataConnectionsGroups, _super);
    function CategoryMetadataConnectionsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CategoryMetadataConnectionsGroups.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CategoryMetadataConnectionsGroups.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryMetadataConnectionsGroups.prototype, "uri", void 0);
    return CategoryMetadataConnectionsGroups;
}(SpeakeasyBase));
export { CategoryMetadataConnectionsGroups };
// CategoryMetadataConnectionsUsers
/**
 * Information about the users related to this category.
**/
var CategoryMetadataConnectionsUsers = /** @class */ (function (_super) {
    __extends(CategoryMetadataConnectionsUsers, _super);
    function CategoryMetadataConnectionsUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CategoryMetadataConnectionsUsers.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CategoryMetadataConnectionsUsers.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryMetadataConnectionsUsers.prototype, "uri", void 0);
    return CategoryMetadataConnectionsUsers;
}(SpeakeasyBase));
export { CategoryMetadataConnectionsUsers };
// CategoryMetadataConnectionsVideos
/**
 * Information about the videos related to this category.
**/
var CategoryMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(CategoryMetadataConnectionsVideos, _super);
    function CategoryMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], CategoryMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CategoryMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryMetadataConnectionsVideos.prototype, "uri", void 0);
    return CategoryMetadataConnectionsVideos;
}(SpeakeasyBase));
export { CategoryMetadataConnectionsVideos };
// CategoryMetadataConnections
/**
 * A collection of information that is connected to this resource.
**/
var CategoryMetadataConnections = /** @class */ (function (_super) {
    __extends(CategoryMetadataConnections, _super);
    function CategoryMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels" }),
        __metadata("design:type", CategoryMetadataConnectionsChannels)
    ], CategoryMetadataConnections.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", CategoryMetadataConnectionsGroups)
    ], CategoryMetadataConnections.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", CategoryMetadataConnectionsUsers)
    ], CategoryMetadataConnections.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", CategoryMetadataConnectionsVideos)
    ], CategoryMetadataConnections.prototype, "videos", void 0);
    return CategoryMetadataConnections;
}(SpeakeasyBase));
export { CategoryMetadataConnections };
// CategoryMetadataInteractionsFollow
/**
 * An action indicating if the authenticated user has followed this category.
**/
var CategoryMetadataInteractionsFollow = /** @class */ (function (_super) {
    __extends(CategoryMetadataInteractionsFollow, _super);
    function CategoryMetadataInteractionsFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added" }),
        __metadata("design:type", Boolean)
    ], CategoryMetadataInteractionsFollow.prototype, "added", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_time" }),
        __metadata("design:type", String)
    ], CategoryMetadataInteractionsFollow.prototype, "addedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryMetadataInteractionsFollow.prototype, "uri", void 0);
    return CategoryMetadataInteractionsFollow;
}(SpeakeasyBase));
export { CategoryMetadataInteractionsFollow };
// CategoryMetadataInteractions
/**
 * The permissible actions related to the category.
**/
var CategoryMetadataInteractions = /** @class */ (function (_super) {
    __extends(CategoryMetadataInteractions, _super);
    function CategoryMetadataInteractions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follow" }),
        __metadata("design:type", CategoryMetadataInteractionsFollow)
    ], CategoryMetadataInteractions.prototype, "follow", void 0);
    return CategoryMetadataInteractions;
}(SpeakeasyBase));
export { CategoryMetadataInteractions };
// CategoryMetadata
/**
 * Metadata about the category.
**/
var CategoryMetadata = /** @class */ (function (_super) {
    __extends(CategoryMetadata, _super);
    function CategoryMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", CategoryMetadataConnections)
    ], CategoryMetadata.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions" }),
        __metadata("design:type", CategoryMetadataInteractions)
    ], CategoryMetadata.prototype, "interactions", void 0);
    return CategoryMetadata;
}(SpeakeasyBase));
export { CategoryMetadata };
// CategoryParent
/**
 * The container of this category's parent category, if the current category is a subcategory.
**/
var CategoryParent = /** @class */ (function (_super) {
    __extends(CategoryParent, _super);
    function CategoryParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CategoryParent.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategoryParent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategoryParent.prototype, "uri", void 0);
    return CategoryParent;
}(SpeakeasyBase));
export { CategoryParent };
var CategorySubcategories = /** @class */ (function (_super) {
    __extends(CategorySubcategories, _super);
    function CategorySubcategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], CategorySubcategories.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategorySubcategories.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], CategorySubcategories.prototype, "uri", void 0);
    return CategorySubcategories;
}(SpeakeasyBase));
export { CategorySubcategories };
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", Picture)
    ], Category.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_video_featured_time" }),
        __metadata("design:type", String)
    ], Category.prototype, "lastVideoFeaturedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Category.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", CategoryMetadata)
    ], Category.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", CategoryParent)
    ], Category.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictures" }),
        __metadata("design:type", Picture)
    ], Category.prototype, "pictures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Category.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subcategories", elemType: CategorySubcategories }),
        __metadata("design:type", Array)
    ], Category.prototype, "subcategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=top_level" }),
        __metadata("design:type", Boolean)
    ], Category.prototype, "topLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Category.prototype, "uri", void 0);
    return Category;
}(SpeakeasyBase));
export { Category };
