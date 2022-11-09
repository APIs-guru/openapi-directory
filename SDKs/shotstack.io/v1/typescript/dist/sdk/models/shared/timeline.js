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
import * as shared from "../shared";
import { Soundtrack } from "./soundtrack";
// Timeline
/**
 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
**/
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=background" }),
        __metadata("design:type", String)
    ], Timeline.prototype, "background", void 0);
    __decorate([
        Metadata({ data: "json, name=cache" }),
        __metadata("design:type", Boolean)
    ], Timeline.prototype, "cache", void 0);
    __decorate([
        Metadata({ data: "json, name=fonts", elemType: shared.Font }),
        __metadata("design:type", Array)
    ], Timeline.prototype, "fonts", void 0);
    __decorate([
        Metadata({ data: "json, name=soundtrack" }),
        __metadata("design:type", Soundtrack)
    ], Timeline.prototype, "soundtrack", void 0);
    __decorate([
        Metadata({ data: "json, name=tracks", elemType: shared.Track }),
        __metadata("design:type", Array)
    ], Timeline.prototype, "tracks", void 0);
    return Timeline;
}(SpeakeasyBase));
export { Timeline };
