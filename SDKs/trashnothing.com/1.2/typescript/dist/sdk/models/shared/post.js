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
import { Photo } from "./photo";
// Post
/**
 * An offer, wanted, admin, taken or received post.
**/
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Post.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Post.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", Date)
    ], Post.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer" }),
        __metadata("design:type", String)
    ], Post.prototype, "footer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], Post.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], Post.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], Post.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome" }),
        __metadata("design:type", String)
    ], Post.prototype, "outcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo }),
        __metadata("design:type", Array)
    ], Post.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_id" }),
        __metadata("design:type", String)
    ], Post.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Post.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Post.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Post.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], Post.prototype, "userId", void 0);
    return Post;
}(SpeakeasyBase));
export { Post };
