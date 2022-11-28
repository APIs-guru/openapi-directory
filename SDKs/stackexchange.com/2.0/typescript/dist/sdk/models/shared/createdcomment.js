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
var CreatedCommentOwnerBadgeCounts = /** @class */ (function (_super) {
    __extends(CreatedCommentOwnerBadgeCounts, _super);
    function CreatedCommentOwnerBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwnerBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwnerBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwnerBadgeCounts.prototype, "silver", void 0);
    return CreatedCommentOwnerBadgeCounts;
}(SpeakeasyBase));
export { CreatedCommentOwnerBadgeCounts };
var CreatedCommentOwner = /** @class */ (function (_super) {
    __extends(CreatedCommentOwner, _super);
    function CreatedCommentOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwner.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatedCommentOwnerBadgeCounts)
    ], CreatedCommentOwner.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentOwner.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentOwner.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentOwner.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwner.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentOwner.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentOwner.prototype, "userType", void 0);
    return CreatedCommentOwner;
}(SpeakeasyBase));
export { CreatedCommentOwner };
var CreatedCommentReplyToUserBadgeCounts = /** @class */ (function (_super) {
    __extends(CreatedCommentReplyToUserBadgeCounts, _super);
    function CreatedCommentReplyToUserBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUserBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUserBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUserBadgeCounts.prototype, "silver", void 0);
    return CreatedCommentReplyToUserBadgeCounts;
}(SpeakeasyBase));
export { CreatedCommentReplyToUserBadgeCounts };
var CreatedCommentReplyToUser = /** @class */ (function (_super) {
    __extends(CreatedCommentReplyToUser, _super);
    function CreatedCommentReplyToUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUser.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatedCommentReplyToUserBadgeCounts)
    ], CreatedCommentReplyToUser.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentReplyToUser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentReplyToUser.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentReplyToUser.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUser.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedCommentReplyToUser.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedCommentReplyToUser.prototype, "userType", void 0);
    return CreatedCommentReplyToUser;
}(SpeakeasyBase));
export { CreatedCommentReplyToUser };
var CreatedComment = /** @class */ (function (_super) {
    __extends(CreatedComment, _super);
    function CreatedComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedComment.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedComment.prototype, "bodyMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CreatedComment.prototype, "canFlag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedComment.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedComment.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CreatedComment.prototype, "edited", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedComment.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatedCommentOwner)
    ], CreatedComment.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedComment.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatedComment.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatedCommentReplyToUser)
    ], CreatedComment.prototype, "replyToUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatedComment.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CreatedComment.prototype, "upvoted", void 0);
    return CreatedComment;
}(SpeakeasyBase));
export { CreatedComment };
