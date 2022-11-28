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
var BadgesUserBadgeCounts = /** @class */ (function (_super) {
    __extends(BadgesUserBadgeCounts, _super);
    function BadgesUserBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUserBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUserBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUserBadgeCounts.prototype, "silver", void 0);
    return BadgesUserBadgeCounts;
}(SpeakeasyBase));
export { BadgesUserBadgeCounts };
var BadgesUser = /** @class */ (function (_super) {
    __extends(BadgesUser, _super);
    function BadgesUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUser.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BadgesUserBadgeCounts)
    ], BadgesUser.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BadgesUser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BadgesUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BadgesUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUser.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BadgesUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BadgesUser.prototype, "userType", void 0);
    return BadgesUser;
}(SpeakeasyBase));
export { BadgesUser };
var Badges = /** @class */ (function (_super) {
    __extends(Badges, _super);
    function Badges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Badges.prototype, "awardCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Badges.prototype, "badgeId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Badges.prototype, "badgeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Badges.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Badges.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Badges.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Badges.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BadgesUser)
    ], Badges.prototype, "user", void 0);
    return Badges;
}(SpeakeasyBase));
export { Badges };
