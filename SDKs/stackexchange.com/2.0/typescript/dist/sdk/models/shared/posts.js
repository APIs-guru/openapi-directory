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
var PostsLastEditorBadgeCounts = /** @class */ (function (_super) {
    __extends(PostsLastEditorBadgeCounts, _super);
    function PostsLastEditorBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditorBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditorBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditorBadgeCounts.prototype, "silver", void 0);
    return PostsLastEditorBadgeCounts;
}(SpeakeasyBase));
export { PostsLastEditorBadgeCounts };
var PostsLastEditor = /** @class */ (function (_super) {
    __extends(PostsLastEditor, _super);
    function PostsLastEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditor.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostsLastEditorBadgeCounts)
    ], PostsLastEditor.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsLastEditor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsLastEditor.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsLastEditor.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditor.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsLastEditor.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsLastEditor.prototype, "userType", void 0);
    return PostsLastEditor;
}(SpeakeasyBase));
export { PostsLastEditor };
var PostsOwnerBadgeCounts = /** @class */ (function (_super) {
    __extends(PostsOwnerBadgeCounts, _super);
    function PostsOwnerBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwnerBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwnerBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwnerBadgeCounts.prototype, "silver", void 0);
    return PostsOwnerBadgeCounts;
}(SpeakeasyBase));
export { PostsOwnerBadgeCounts };
var PostsOwner = /** @class */ (function (_super) {
    __extends(PostsOwner, _super);
    function PostsOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwner.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostsOwnerBadgeCounts)
    ], PostsOwner.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsOwner.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsOwner.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsOwner.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwner.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostsOwner.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostsOwner.prototype, "userType", void 0);
    return PostsOwner;
}(SpeakeasyBase));
export { PostsOwner };
var Posts = /** @class */ (function (_super) {
    __extends(Posts, _super);
    function Posts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "bodyMarkdown", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Posts.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "downVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Posts.prototype, "downvoted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "lastEditDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostsLastEditor)
    ], Posts.prototype, "lastEditor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostsOwner)
    ], Posts.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "postType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "shareLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Posts.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Posts.prototype, "upVoteCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Posts.prototype, "upvoted", void 0);
    return Posts;
}(SpeakeasyBase));
export { Posts };
