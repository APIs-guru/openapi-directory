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
import * as shared from "../shared";
var GetTextTracksAlt1PathParams = /** @class */ (function (_super) {
    __extends(GetTextTracksAlt1PathParams, _super);
    function GetTextTracksAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" }),
        __metadata("design:type", Number)
    ], GetTextTracksAlt1PathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], GetTextTracksAlt1PathParams.prototype, "videoId", void 0);
    return GetTextTracksAlt1PathParams;
}(SpeakeasyBase));
export { GetTextTracksAlt1PathParams };
var GetTextTracksAlt1Request = /** @class */ (function (_super) {
    __extends(GetTextTracksAlt1Request, _super);
    function GetTextTracksAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTextTracksAlt1PathParams)
    ], GetTextTracksAlt1Request.prototype, "pathParams", void 0);
    return GetTextTracksAlt1Request;
}(SpeakeasyBase));
export { GetTextTracksAlt1Request };
var GetTextTracksAlt1Response = /** @class */ (function (_super) {
    __extends(GetTextTracksAlt1Response, _super);
    function GetTextTracksAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTextTracksAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTextTracksAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], GetTextTracksAlt1Response.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TextTrack }),
        __metadata("design:type", Array)
    ], GetTextTracksAlt1Response.prototype, "textTracks", void 0);
    return GetTextTracksAlt1Response;
}(SpeakeasyBase));
export { GetTextTracksAlt1Response };
