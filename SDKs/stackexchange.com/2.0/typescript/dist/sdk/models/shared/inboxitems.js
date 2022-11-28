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
var InboxItemsSiteStyling = /** @class */ (function (_super) {
    __extends(InboxItemsSiteStyling, _super);
    function InboxItemsSiteStyling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSiteStyling.prototype, "linkColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSiteStyling.prototype, "tagBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSiteStyling.prototype, "tagForegroundColor", void 0);
    return InboxItemsSiteStyling;
}(SpeakeasyBase));
export { InboxItemsSiteStyling };
var InboxItemsSite = /** @class */ (function (_super) {
    __extends(InboxItemsSite, _super);
    function InboxItemsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InboxItemsSite.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "apiSiteParameter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItemsSite.prototype, "closedBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "faviconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "highResolutionIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItemsSite.prototype, "launchDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InboxItemsSite.prototype, "markdownExtensions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItemsSite.prototype, "openBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InboxItemsSite.prototype, "relatedSites", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "siteState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "siteType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "siteUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InboxItemsSiteStyling)
    ], InboxItemsSite.prototype, "styling", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItemsSite.prototype, "twitterAccount", void 0);
    return InboxItemsSite;
}(SpeakeasyBase));
export { InboxItemsSite };
var InboxItems = /** @class */ (function (_super) {
    __extends(InboxItems, _super);
    function InboxItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItems.prototype, "answerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItems.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItems.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItems.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], InboxItems.prototype, "isUnread", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItems.prototype, "itemType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItems.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InboxItems.prototype, "questionId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InboxItemsSite)
    ], InboxItems.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InboxItems.prototype, "title", void 0);
    return InboxItems;
}(SpeakeasyBase));
export { InboxItems };
