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
var InfoObjectSiteStyling = /** @class */ (function (_super) {
    __extends(InfoObjectSiteStyling, _super);
    function InfoObjectSiteStyling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSiteStyling.prototype, "linkColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSiteStyling.prototype, "tagBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSiteStyling.prototype, "tagForegroundColor", void 0);
    return InfoObjectSiteStyling;
}(SpeakeasyBase));
export { InfoObjectSiteStyling };
var InfoObjectSite = /** @class */ (function (_super) {
    __extends(InfoObjectSite, _super);
    function InfoObjectSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InfoObjectSite.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "apiSiteParameter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObjectSite.prototype, "closedBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "faviconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "highResolutionIconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObjectSite.prototype, "launchDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InfoObjectSite.prototype, "markdownExtensions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObjectSite.prototype, "openBetaDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], InfoObjectSite.prototype, "relatedSites", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "siteState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "siteType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "siteUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InfoObjectSiteStyling)
    ], InfoObjectSite.prototype, "styling", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObjectSite.prototype, "twitterAccount", void 0);
    return InfoObjectSite;
}(SpeakeasyBase));
export { InfoObjectSite };
var InfoObject = /** @class */ (function (_super) {
    __extends(InfoObject, _super);
    function InfoObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "answersPerMinute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InfoObject.prototype, "apiRevision", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "badgesPerMinute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "newActiveUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "questionsPerMinute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InfoObjectSite)
    ], InfoObject.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalAccepted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalAnswers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalBadges", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalComments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalQuestions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalUnanswered", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InfoObject.prototype, "totalVotes", void 0);
    return InfoObject;
}(SpeakeasyBase));
export { InfoObject };
