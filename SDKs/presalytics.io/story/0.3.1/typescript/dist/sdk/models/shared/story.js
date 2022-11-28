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
import { StoryCollaborator } from "./storycollaborator";
import { OoxmlDocument } from "./ooxmldocument";
import { StoryOutlineHistory } from "./storyoutlinehistory";
// Story
/**
 * Model for story objects
**/
var Story = /** @class */ (function (_super) {
    __extends(Story, _super);
    function Story() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collaborators", elemType: StoryCollaborator }),
        __metadata("design:type", Array)
    ], Story.prototype, "collaborators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Story.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Story.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Story.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_public" }),
        __metadata("design:type", Boolean)
    ], Story.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ooxml_documents", elemType: OoxmlDocument }),
        __metadata("design:type", Array)
    ], Story.prototype, "ooxmlDocuments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outline" }),
        __metadata("design:type", String)
    ], Story.prototype, "outline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outline_history", elemType: StoryOutlineHistory }),
        __metadata("design:type", Array)
    ], Story.prototype, "outlineHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], Story.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Story.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Story.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Story.prototype, "updatedBy", void 0);
    return Story;
}(SpeakeasyBase));
export { Story };
