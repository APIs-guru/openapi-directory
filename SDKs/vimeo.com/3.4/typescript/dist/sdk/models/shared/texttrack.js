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
export var TextTrackTypeEnum;
(function (TextTrackTypeEnum) {
    TextTrackTypeEnum["Captions"] = "captions";
    TextTrackTypeEnum["Subtitles"] = "subtitles";
})(TextTrackTypeEnum || (TextTrackTypeEnum = {}));
var TextTrack = /** @class */ (function (_super) {
    __extends(TextTrack, _super);
    function TextTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], TextTrack.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hls_link" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "hlsLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hls_link_expires_time" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "hlsLinkExpiresTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_expires_time" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "linkExpiresTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], TextTrack.prototype, "uri", void 0);
    return TextTrack;
}(SpeakeasyBase));
export { TextTrack };
