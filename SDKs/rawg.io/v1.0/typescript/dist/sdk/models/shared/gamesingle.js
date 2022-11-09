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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GameSingleEsrbRatingNameEnum;
(function (GameSingleEsrbRatingNameEnum) {
    GameSingleEsrbRatingNameEnum["Everyone"] = "Everyone";
    GameSingleEsrbRatingNameEnum["Everyone10Plus"] = "Everyone 10+";
    GameSingleEsrbRatingNameEnum["Teen"] = "Teen";
    GameSingleEsrbRatingNameEnum["Mature"] = "Mature";
    GameSingleEsrbRatingNameEnum["AdultsOnly"] = "Adults Only";
    GameSingleEsrbRatingNameEnum["RatingPending"] = "Rating Pending";
})(GameSingleEsrbRatingNameEnum || (GameSingleEsrbRatingNameEnum = {}));
export var GameSingleEsrbRatingSlugEnum;
(function (GameSingleEsrbRatingSlugEnum) {
    GameSingleEsrbRatingSlugEnum["Everyone"] = "everyone";
    GameSingleEsrbRatingSlugEnum["Everyone10Plus"] = "everyone-10-plus";
    GameSingleEsrbRatingSlugEnum["Teen"] = "teen";
    GameSingleEsrbRatingSlugEnum["Mature"] = "mature";
    GameSingleEsrbRatingSlugEnum["AdultsOnly"] = "adults-only";
    GameSingleEsrbRatingSlugEnum["RatingPending"] = "rating-pending";
})(GameSingleEsrbRatingSlugEnum || (GameSingleEsrbRatingSlugEnum = {}));
var GameSingleEsrbRating = /** @class */ (function (_super) {
    __extends(GameSingleEsrbRating, _super);
    function GameSingleEsrbRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameSingleEsrbRating.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GameSingleEsrbRating.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GameSingleEsrbRating.prototype, "slug", void 0);
    return GameSingleEsrbRating;
}(SpeakeasyBase));
export { GameSingleEsrbRating };
var GameSinglePlatformsPlatform = /** @class */ (function (_super) {
    __extends(GameSinglePlatformsPlatform, _super);
    function GameSinglePlatformsPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameSinglePlatformsPlatform.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GameSinglePlatformsPlatform.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GameSinglePlatformsPlatform.prototype, "slug", void 0);
    return GameSinglePlatformsPlatform;
}(SpeakeasyBase));
export { GameSinglePlatformsPlatform };
var GameSinglePlatformsRequirements = /** @class */ (function (_super) {
    __extends(GameSinglePlatformsRequirements, _super);
    function GameSinglePlatformsRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=minimum" }),
        __metadata("design:type", String)
    ], GameSinglePlatformsRequirements.prototype, "minimum", void 0);
    __decorate([
        Metadata({ data: "json, name=recommended" }),
        __metadata("design:type", String)
    ], GameSinglePlatformsRequirements.prototype, "recommended", void 0);
    return GameSinglePlatformsRequirements;
}(SpeakeasyBase));
export { GameSinglePlatformsRequirements };
var GameSinglePlatforms = /** @class */ (function (_super) {
    __extends(GameSinglePlatforms, _super);
    function GameSinglePlatforms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", GameSinglePlatformsPlatform)
    ], GameSinglePlatforms.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=released_at" }),
        __metadata("design:type", String)
    ], GameSinglePlatforms.prototype, "releasedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=requirements" }),
        __metadata("design:type", GameSinglePlatformsRequirements)
    ], GameSinglePlatforms.prototype, "requirements", void 0);
    return GameSinglePlatforms;
}(SpeakeasyBase));
export { GameSinglePlatforms };
var GameSingle = /** @class */ (function (_super) {
    __extends(GameSingle, _super);
    function GameSingle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=achievements_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "achievementsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=added" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "added", void 0);
    __decorate([
        Metadata({ data: "json, name=added_by_status" }),
        __metadata("design:type", Map)
    ], GameSingle.prototype, "addedByStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=additions_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "additionsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=alternative_names" }),
        __metadata("design:type", Array)
    ], GameSingle.prototype, "alternativeNames", void 0);
    __decorate([
        Metadata({ data: "json, name=background_image" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "backgroundImage", void 0);
    __decorate([
        Metadata({ data: "json, name=background_image_additional" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "backgroundImageAdditional", void 0);
    __decorate([
        Metadata({ data: "json, name=creators_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "creatorsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=esrb_rating" }),
        __metadata("design:type", GameSingleEsrbRating)
    ], GameSingle.prototype, "esrbRating", void 0);
    __decorate([
        Metadata({ data: "json, name=game_series_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "gameSeriesCount", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=metacritic" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "metacritic", void 0);
    __decorate([
        Metadata({ data: "json, name=metacritic_platforms", elemType: shared.GamePlatformMetacritic }),
        __metadata("design:type", Array)
    ], GameSingle.prototype, "metacriticPlatforms", void 0);
    __decorate([
        Metadata({ data: "json, name=metacritic_url" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "metacriticUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=movies_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "moviesCount", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=name_original" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "nameOriginal", void 0);
    __decorate([
        Metadata({ data: "json, name=parent_achievements_count" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "parentAchievementsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=parents_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "parentsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=platforms", elemType: shared.GameSinglePlatforms }),
        __metadata("design:type", Array)
    ], GameSingle.prototype, "platforms", void 0);
    __decorate([
        Metadata({ data: "json, name=playtime" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "playtime", void 0);
    __decorate([
        Metadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "rating", void 0);
    __decorate([
        Metadata({ data: "json, name=rating_top" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "ratingTop", void 0);
    __decorate([
        Metadata({ data: "json, name=ratings" }),
        __metadata("design:type", Map)
    ], GameSingle.prototype, "ratings", void 0);
    __decorate([
        Metadata({ data: "json, name=ratings_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "ratingsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=reactions" }),
        __metadata("design:type", Map)
    ], GameSingle.prototype, "reactions", void 0);
    __decorate([
        Metadata({ data: "json, name=reddit_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "redditCount", void 0);
    __decorate([
        Metadata({ data: "json, name=reddit_description" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "redditDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=reddit_logo" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "redditLogo", void 0);
    __decorate([
        Metadata({ data: "json, name=reddit_name" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "redditName", void 0);
    __decorate([
        Metadata({ data: "json, name=reddit_url" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "redditUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=released" }),
        __metadata("design:type", Date)
    ], GameSingle.prototype, "released", void 0);
    __decorate([
        Metadata({ data: "json, name=reviews_text_count" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "reviewsTextCount", void 0);
    __decorate([
        Metadata({ data: "json, name=screenshots_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "screenshotsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "slug", void 0);
    __decorate([
        Metadata({ data: "json, name=suggestions_count" }),
        __metadata("design:type", Number)
    ], GameSingle.prototype, "suggestionsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=tba" }),
        __metadata("design:type", Boolean)
    ], GameSingle.prototype, "tba", void 0);
    __decorate([
        Metadata({ data: "json, name=twitch_count" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "twitchCount", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], GameSingle.prototype, "updated", void 0);
    __decorate([
        Metadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "website", void 0);
    __decorate([
        Metadata({ data: "json, name=youtube_count" }),
        __metadata("design:type", String)
    ], GameSingle.prototype, "youtubeCount", void 0);
    return GameSingle;
}(SpeakeasyBase));
export { GameSingle };
