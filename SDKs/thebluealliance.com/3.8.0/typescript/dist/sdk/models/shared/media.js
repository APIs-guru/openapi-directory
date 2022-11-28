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
export var MediaTypeEnum;
(function (MediaTypeEnum) {
    MediaTypeEnum["Youtube"] = "youtube";
    MediaTypeEnum["Cdphotothread"] = "cdphotothread";
    MediaTypeEnum["Imgur"] = "imgur";
    MediaTypeEnum["FacebookProfile"] = "facebook-profile";
    MediaTypeEnum["YoutubeChannel"] = "youtube-channel";
    MediaTypeEnum["TwitterProfile"] = "twitter-profile";
    MediaTypeEnum["GithubProfile"] = "github-profile";
    MediaTypeEnum["InstagramProfile"] = "instagram-profile";
    MediaTypeEnum["PeriscopeProfile"] = "periscope-profile";
    MediaTypeEnum["Grabcad"] = "grabcad";
    MediaTypeEnum["InstagramImage"] = "instagram-image";
    MediaTypeEnum["ExternalLink"] = "external-link";
    MediaTypeEnum["Avatar"] = "avatar";
})(MediaTypeEnum || (MediaTypeEnum = {}));
// Media
/**
 * The `Media` object contains a reference for most any media associated with a team or event on TBA.
**/
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Map)
    ], Media.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direct_url" }),
        __metadata("design:type", String)
    ], Media.prototype, "directUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foreign_key" }),
        __metadata("design:type", String)
    ], Media.prototype, "foreignKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred" }),
        __metadata("design:type", Boolean)
    ], Media.prototype, "preferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Media.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view_url" }),
        __metadata("design:type", String)
    ], Media.prototype, "viewUrl", void 0);
    return Media;
}(SpeakeasyBase));
export { Media };
