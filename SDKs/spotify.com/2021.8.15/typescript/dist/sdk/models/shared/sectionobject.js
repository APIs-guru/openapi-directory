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
// SectionObject
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#section-object - Find more info on the official Spotify Web API Reference
**/
var SectionObject = /** @class */ (function (_super) {
    __extends(SectionObject, _super);
    function SectionObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_confidence" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "keyConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loudness" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "loudness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode_confidence" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "modeConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempo" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "tempo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempo_confidence" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "tempoConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_signature" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "timeSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_signature_confidence" }),
        __metadata("design:type", Number)
    ], SectionObject.prototype, "timeSignatureConfidence", void 0);
    return SectionObject;
}(SpeakeasyBase));
export { SectionObject };
