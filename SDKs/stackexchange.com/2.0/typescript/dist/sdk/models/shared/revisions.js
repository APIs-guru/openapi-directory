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
var RevisionsUserBadgeCounts = /** @class */ (function (_super) {
    __extends(RevisionsUserBadgeCounts, _super);
    function RevisionsUserBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUserBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUserBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUserBadgeCounts.prototype, "silver", void 0);
    return RevisionsUserBadgeCounts;
}(SpeakeasyBase));
export { RevisionsUserBadgeCounts };
var RevisionsUser = /** @class */ (function (_super) {
    __extends(RevisionsUser, _super);
    function RevisionsUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUser.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevisionsUserBadgeCounts)
    ], RevisionsUser.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevisionsUser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevisionsUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevisionsUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUser.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevisionsUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevisionsUser.prototype, "userType", void 0);
    return RevisionsUser;
}(SpeakeasyBase));
export { RevisionsUser };
var Revisions = /** @class */ (function (_super) {
    __extends(Revisions, _super);
    function Revisions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Revisions.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Revisions.prototype, "isRollback", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "lastBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Revisions.prototype, "lastTags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "lastTitle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Revisions.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "revisionGuid", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Revisions.prototype, "revisionNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "revisionType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Revisions.prototype, "setCommunityWiki", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Revisions.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Revisions.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevisionsUser)
    ], Revisions.prototype, "user", void 0);
    return Revisions;
}(SpeakeasyBase));
export { Revisions };
