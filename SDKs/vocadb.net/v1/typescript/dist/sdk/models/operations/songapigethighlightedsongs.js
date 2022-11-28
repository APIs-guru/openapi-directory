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
export var SongApiGetHighlightedSongsFieldsEnum;
(function (SongApiGetHighlightedSongsFieldsEnum) {
    SongApiGetHighlightedSongsFieldsEnum["None"] = "None";
    SongApiGetHighlightedSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetHighlightedSongsFieldsEnum["Albums"] = "Albums";
    SongApiGetHighlightedSongsFieldsEnum["Artists"] = "Artists";
    SongApiGetHighlightedSongsFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetHighlightedSongsFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetHighlightedSongsFieldsEnum["Names"] = "Names";
    SongApiGetHighlightedSongsFieldsEnum["PVs"] = "PVs";
    SongApiGetHighlightedSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetHighlightedSongsFieldsEnum["Tags"] = "Tags";
    SongApiGetHighlightedSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetHighlightedSongsFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetHighlightedSongsFieldsEnum || (SongApiGetHighlightedSongsFieldsEnum = {}));
export var SongApiGetHighlightedSongsLanguagePreferenceEnum;
(function (SongApiGetHighlightedSongsLanguagePreferenceEnum) {
    SongApiGetHighlightedSongsLanguagePreferenceEnum["Default"] = "Default";
    SongApiGetHighlightedSongsLanguagePreferenceEnum["Japanese"] = "Japanese";
    SongApiGetHighlightedSongsLanguagePreferenceEnum["Romaji"] = "Romaji";
    SongApiGetHighlightedSongsLanguagePreferenceEnum["English"] = "English";
})(SongApiGetHighlightedSongsLanguagePreferenceEnum || (SongApiGetHighlightedSongsLanguagePreferenceEnum = {}));
var SongApiGetHighlightedSongsQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetHighlightedSongsQueryParams, _super);
    function SongApiGetHighlightedSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetHighlightedSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], SongApiGetHighlightedSongsQueryParams.prototype, "languagePreference", void 0);
    return SongApiGetHighlightedSongsQueryParams;
}(SpeakeasyBase));
export { SongApiGetHighlightedSongsQueryParams };
var SongApiGetHighlightedSongsRequest = /** @class */ (function (_super) {
    __extends(SongApiGetHighlightedSongsRequest, _super);
    function SongApiGetHighlightedSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetHighlightedSongsQueryParams)
    ], SongApiGetHighlightedSongsRequest.prototype, "queryParams", void 0);
    return SongApiGetHighlightedSongsRequest;
}(SpeakeasyBase));
export { SongApiGetHighlightedSongsRequest };
var SongApiGetHighlightedSongsResponse = /** @class */ (function (_super) {
    __extends(SongApiGetHighlightedSongsResponse, _super);
    function SongApiGetHighlightedSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetHighlightedSongsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetHighlightedSongsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SongForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetHighlightedSongsResponse.prototype, "songForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetHighlightedSongsResponse.prototype, "statusCode", void 0);
    return SongApiGetHighlightedSongsResponse;
}(SpeakeasyBase));
export { SongApiGetHighlightedSongsResponse };
