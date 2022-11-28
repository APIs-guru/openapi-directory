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
var TagWikisLastBodyEditorBadgeCounts = /** @class */ (function (_super) {
    __extends(TagWikisLastBodyEditorBadgeCounts, _super);
    function TagWikisLastBodyEditorBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditorBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditorBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditorBadgeCounts.prototype, "silver", void 0);
    return TagWikisLastBodyEditorBadgeCounts;
}(SpeakeasyBase));
export { TagWikisLastBodyEditorBadgeCounts };
var TagWikisLastBodyEditor = /** @class */ (function (_super) {
    __extends(TagWikisLastBodyEditor, _super);
    function TagWikisLastBodyEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditor.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagWikisLastBodyEditorBadgeCounts)
    ], TagWikisLastBodyEditor.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastBodyEditor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastBodyEditor.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastBodyEditor.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditor.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastBodyEditor.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastBodyEditor.prototype, "userType", void 0);
    return TagWikisLastBodyEditor;
}(SpeakeasyBase));
export { TagWikisLastBodyEditor };
var TagWikisLastExcerptEditorBadgeCounts = /** @class */ (function (_super) {
    __extends(TagWikisLastExcerptEditorBadgeCounts, _super);
    function TagWikisLastExcerptEditorBadgeCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditorBadgeCounts.prototype, "bronze", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditorBadgeCounts.prototype, "gold", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditorBadgeCounts.prototype, "silver", void 0);
    return TagWikisLastExcerptEditorBadgeCounts;
}(SpeakeasyBase));
export { TagWikisLastExcerptEditorBadgeCounts };
var TagWikisLastExcerptEditor = /** @class */ (function (_super) {
    __extends(TagWikisLastExcerptEditor, _super);
    function TagWikisLastExcerptEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditor.prototype, "acceptRate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagWikisLastExcerptEditorBadgeCounts)
    ], TagWikisLastExcerptEditor.prototype, "badgeCounts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastExcerptEditor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastExcerptEditor.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastExcerptEditor.prototype, "profileImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditor.prototype, "reputation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikisLastExcerptEditor.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikisLastExcerptEditor.prototype, "userType", void 0);
    return TagWikisLastExcerptEditor;
}(SpeakeasyBase));
export { TagWikisLastExcerptEditor };
var TagWikis = /** @class */ (function (_super) {
    __extends(TagWikis, _super);
    function TagWikis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikis.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikis.prototype, "bodyLastEditDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikis.prototype, "excerpt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagWikis.prototype, "excerptLastEditDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagWikisLastBodyEditor)
    ], TagWikis.prototype, "lastBodyEditor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagWikisLastExcerptEditor)
    ], TagWikis.prototype, "lastExcerptEditor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagWikis.prototype, "tagName", void 0);
    return TagWikis;
}(SpeakeasyBase));
export { TagWikis };
