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
import { TimeIntervalObject } from "./timeintervalobject";
import { SectionObject } from "./sectionobject";
import { SegmentObject } from "./segmentobject";
// AudioAnalysisObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
**/
var AudioAnalysisObject = /** @class */ (function (_super) {
    __extends(AudioAnalysisObject, _super);
    function AudioAnalysisObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bars", elemType: TimeIntervalObject }),
        __metadata("design:type", Array)
    ], AudioAnalysisObject.prototype, "bars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beats", elemType: TimeIntervalObject }),
        __metadata("design:type", Array)
    ], AudioAnalysisObject.prototype, "beats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sections", elemType: SectionObject }),
        __metadata("design:type", Array)
    ], AudioAnalysisObject.prototype, "sections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segments", elemType: SegmentObject }),
        __metadata("design:type", Array)
    ], AudioAnalysisObject.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tatums", elemType: TimeIntervalObject }),
        __metadata("design:type", Array)
    ], AudioAnalysisObject.prototype, "tatums", void 0);
    return AudioAnalysisObject;
}(SpeakeasyBase));
export { AudioAnalysisObject };
