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
export var GameEsrbRatingNameEnum;
(function (GameEsrbRatingNameEnum) {
    GameEsrbRatingNameEnum["Everyone"] = "Everyone";
    GameEsrbRatingNameEnum["Everyone10Plus"] = "Everyone 10+";
    GameEsrbRatingNameEnum["Teen"] = "Teen";
    GameEsrbRatingNameEnum["Mature"] = "Mature";
    GameEsrbRatingNameEnum["AdultsOnly"] = "Adults Only";
    GameEsrbRatingNameEnum["RatingPending"] = "Rating Pending";
})(GameEsrbRatingNameEnum || (GameEsrbRatingNameEnum = {}));
export var GameEsrbRatingSlugEnum;
(function (GameEsrbRatingSlugEnum) {
    GameEsrbRatingSlugEnum["Everyone"] = "everyone";
    GameEsrbRatingSlugEnum["Everyone10Plus"] = "everyone-10-plus";
    GameEsrbRatingSlugEnum["Teen"] = "teen";
    GameEsrbRatingSlugEnum["Mature"] = "mature";
    GameEsrbRatingSlugEnum["AdultsOnly"] = "adults-only";
    GameEsrbRatingSlugEnum["RatingPending"] = "rating-pending";
})(GameEsrbRatingSlugEnum || (GameEsrbRatingSlugEnum = {}));
var GameEsrbRating = /** @class */ (function (_super) {
    __extends(GameEsrbRating, _super);
    function GameEsrbRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GameEsrbRating.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GameEsrbRating.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GameEsrbRating.prototype, "slug", void 0);
    return GameEsrbRating;
}(SpeakeasyBase));
export { GameEsrbRating };
var GamePlatformsPlatform = /** @class */ (function (_super) {
    __extends(GamePlatformsPlatform, _super);
    function GamePlatformsPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GamePlatformsPlatform.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GamePlatformsPlatform.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GamePlatformsPlatform.prototype, "slug", void 0);
    return GamePlatformsPlatform;
}(SpeakeasyBase));
export { GamePlatformsPlatform };
var GamePlatformsRequirements = /** @class */ (function (_super) {
    __extends(GamePlatformsRequirements, _super);
    function GamePlatformsRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=minimum" }),
        __metadata("design:type", String)
    ], GamePlatformsRequirements.prototype, "minimum", void 0);
    __decorate([
        Metadata({ data: "json, name=recommended" }),
        __metadata("design:type", String)
    ], GamePlatformsRequirements.prototype, "recommended", void 0);
    return GamePlatformsRequirements;
}(SpeakeasyBase));
export { GamePlatformsRequirements };
var GamePlatforms = /** @class */ (function (_super) {
    __extends(GamePlatforms, _super);
    function GamePlatforms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", GamePlatformsPlatform)
    ], GamePlatforms.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=released_at" }),
        __metadata("design:type", String)
    ], GamePlatforms.prototype, "releasedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=requirements" }),
        __metadata("design:type", GamePlatformsRequirements)
    ], GamePlatforms.prototype, "requirements", void 0);
    return GamePlatforms;
}(SpeakeasyBase));
export { GamePlatforms };
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=added" }),
        __metadata("design:type", Number)
    ], Game.prototype, "added", void 0);
    __decorate([
        Metadata({ data: "json, name=added_by_status" }),
        __metadata("design:type", Map)
    ], Game.prototype, "addedByStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=background_image" }),
        __metadata("design:type", String)
    ], Game.prototype, "backgroundImage", void 0);
    __decorate([
        Metadata({ data: "json, name=esrb_rating" }),
        __metadata("design:type", GameEsrbRating)
    ], Game.prototype, "esrbRating", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Game.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=metacritic" }),
        __metadata("design:type", Number)
    ], Game.prototype, "metacritic", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Game.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=platforms", elemType: shared.GamePlatforms }),
        __metadata("design:type", Array)
    ], Game.prototype, "platforms", void 0);
    __decorate([
        Metadata({ data: "json, name=playtime" }),
        __metadata("design:type", Number)
    ], Game.prototype, "playtime", void 0);
    __decorate([
        Metadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], Game.prototype, "rating", void 0);
    __decorate([
        Metadata({ data: "json, name=rating_top" }),
        __metadata("design:type", Number)
    ], Game.prototype, "ratingTop", void 0);
    __decorate([
        Metadata({ data: "json, name=ratings" }),
        __metadata("design:type", Map)
    ], Game.prototype, "ratings", void 0);
    __decorate([
        Metadata({ data: "json, name=ratings_count" }),
        __metadata("design:type", Number)
    ], Game.prototype, "ratingsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=released" }),
        __metadata("design:type", Date)
    ], Game.prototype, "released", void 0);
    __decorate([
        Metadata({ data: "json, name=reviews_text_count" }),
        __metadata("design:type", String)
    ], Game.prototype, "reviewsTextCount", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Game.prototype, "slug", void 0);
    __decorate([
        Metadata({ data: "json, name=suggestions_count" }),
        __metadata("design:type", Number)
    ], Game.prototype, "suggestionsCount", void 0);
    __decorate([
        Metadata({ data: "json, name=tba" }),
        __metadata("design:type", Boolean)
    ], Game.prototype, "tba", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Game.prototype, "updated", void 0);
    return Game;
}(SpeakeasyBase));
export { Game };
