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
import { UserForApiContract } from "./userforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
var DiscussionTopicContract = /** @class */ (function (_super) {
    __extends(DiscussionTopicContract, _super);
    function DiscussionTopicContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", UserForApiContract)
    ], DiscussionTopicContract.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentCount" }),
        __metadata("design:type", Number)
    ], DiscussionTopicContract.prototype, "commentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: CommentForApiContract }),
        __metadata("design:type", Array)
    ], DiscussionTopicContract.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], DiscussionTopicContract.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], DiscussionTopicContract.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderId" }),
        __metadata("design:type", Number)
    ], DiscussionTopicContract.prototype, "folderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DiscussionTopicContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastComment" }),
        __metadata("design:type", CommentForApiContract)
    ], DiscussionTopicContract.prototype, "lastComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], DiscussionTopicContract.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DiscussionTopicContract.prototype, "name", void 0);
    return DiscussionTopicContract;
}(SpeakeasyBase));
export { DiscussionTopicContract };
