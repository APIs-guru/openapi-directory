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
var MarkedEpisodeEmbedded = /** @class */ (function (_super) {
    __extends(MarkedEpisodeEmbedded, _super);
    function MarkedEpisodeEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episode" }),
        __metadata("design:type", Map)
    ], MarkedEpisodeEmbedded.prototype, "episode", void 0);
    return MarkedEpisodeEmbedded;
}(SpeakeasyBase));
export { MarkedEpisodeEmbedded };
var MarkedEpisodeInput = /** @class */ (function (_super) {
    __extends(MarkedEpisodeInput, _super);
    function MarkedEpisodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", MarkedEpisodeEmbedded)
    ], MarkedEpisodeInput.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marked_at" }),
        __metadata("design:type", Number)
    ], MarkedEpisodeInput.prototype, "markedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Object)
    ], MarkedEpisodeInput.prototype, "type", void 0);
    return MarkedEpisodeInput;
}(SpeakeasyBase));
export { MarkedEpisodeInput };
var MarkedEpisode = /** @class */ (function (_super) {
    __extends(MarkedEpisode, _super);
    function MarkedEpisode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", MarkedEpisodeEmbedded)
    ], MarkedEpisode.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=episode_id" }),
        __metadata("design:type", Number)
    ], MarkedEpisode.prototype, "episodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marked_at" }),
        __metadata("design:type", Number)
    ], MarkedEpisode.prototype, "markedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Object)
    ], MarkedEpisode.prototype, "type", void 0);
    return MarkedEpisode;
}(SpeakeasyBase));
export { MarkedEpisode };
