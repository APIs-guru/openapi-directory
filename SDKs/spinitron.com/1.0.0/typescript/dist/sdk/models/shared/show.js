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
import { Link } from "./link";
var ShowLinks = /** @class */ (function (_super) {
    __extends(ShowLinks, _super);
    function ShowLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personas", elemType: Link }),
        __metadata("design:type", Array)
    ], ShowLinks.prototype, "personas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playlists" }),
        __metadata("design:type", Link)
    ], ShowLinks.prototype, "playlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Link)
    ], ShowLinks.prototype, "self", void 0);
    return ShowLinks;
}(SpeakeasyBase));
export { ShowLinks };
// Show
/**
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
**/
var Show = /** @class */ (function (_super) {
    __extends(Show, _super);
    function Show() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ShowLinks)
    ], Show.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Show.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Show.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Show.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], Show.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_dj" }),
        __metadata("design:type", Boolean)
    ], Show.prototype, "hideDj", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Show.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Show.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_off" }),
        __metadata("design:type", Boolean)
    ], Show.prototype, "oneOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=since" }),
        __metadata("design:type", Number)
    ], Show.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], Show.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Show.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Show.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Show.prototype, "url", void 0);
    return Show;
}(SpeakeasyBase));
export { Show };
