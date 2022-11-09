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
// StoryOutlineHistory
/**
 * A revision repository for story outlines
**/
var StoryOutlineHistory = /** @class */ (function (_super) {
    __extends(StoryOutlineHistory, _super);
    function StoryOutlineHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=collaborator_user_id" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "collaboratorUserId", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], StoryOutlineHistory.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=outline" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "outline", void 0);
    __decorate([
        Metadata({ data: "json, name=revision_number" }),
        __metadata("design:type", Number)
    ], StoryOutlineHistory.prototype, "revisionNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=story_id" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "storyId", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], StoryOutlineHistory.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], StoryOutlineHistory.prototype, "updatedBy", void 0);
    return StoryOutlineHistory;
}(SpeakeasyBase));
export { StoryOutlineHistory };
