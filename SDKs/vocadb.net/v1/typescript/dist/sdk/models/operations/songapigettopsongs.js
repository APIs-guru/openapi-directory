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
export var SongApiGetTopSongsFieldsEnum;
(function (SongApiGetTopSongsFieldsEnum) {
    SongApiGetTopSongsFieldsEnum["None"] = "None";
    SongApiGetTopSongsFieldsEnum["AdditionalNames"] = "AdditionalNames";
    SongApiGetTopSongsFieldsEnum["Albums"] = "Albums";
    SongApiGetTopSongsFieldsEnum["Artists"] = "Artists";
    SongApiGetTopSongsFieldsEnum["Lyrics"] = "Lyrics";
    SongApiGetTopSongsFieldsEnum["MainPicture"] = "MainPicture";
    SongApiGetTopSongsFieldsEnum["Names"] = "Names";
    SongApiGetTopSongsFieldsEnum["PVs"] = "PVs";
    SongApiGetTopSongsFieldsEnum["ReleaseEvent"] = "ReleaseEvent";
    SongApiGetTopSongsFieldsEnum["Tags"] = "Tags";
    SongApiGetTopSongsFieldsEnum["ThumbUrl"] = "ThumbUrl";
    SongApiGetTopSongsFieldsEnum["WebLinks"] = "WebLinks";
})(SongApiGetTopSongsFieldsEnum || (SongApiGetTopSongsFieldsEnum = {}));
export var SongApiGetTopSongsFilterByEnum;
(function (SongApiGetTopSongsFilterByEnum) {
    SongApiGetTopSongsFilterByEnum["CreateDate"] = "CreateDate";
    SongApiGetTopSongsFilterByEnum["PublishDate"] = "PublishDate";
    SongApiGetTopSongsFilterByEnum["Popularity"] = "Popularity";
})(SongApiGetTopSongsFilterByEnum || (SongApiGetTopSongsFilterByEnum = {}));
export var SongApiGetTopSongsLanguagePreferenceEnum;
(function (SongApiGetTopSongsLanguagePreferenceEnum) {
    SongApiGetTopSongsLanguagePreferenceEnum["Default"] = "Default";
    SongApiGetTopSongsLanguagePreferenceEnum["Japanese"] = "Japanese";
    SongApiGetTopSongsLanguagePreferenceEnum["Romaji"] = "Romaji";
    SongApiGetTopSongsLanguagePreferenceEnum["English"] = "English";
})(SongApiGetTopSongsLanguagePreferenceEnum || (SongApiGetTopSongsLanguagePreferenceEnum = {}));
export var SongApiGetTopSongsVocalistEnum;
(function (SongApiGetTopSongsVocalistEnum) {
    SongApiGetTopSongsVocalistEnum["Nothing"] = "Nothing";
    SongApiGetTopSongsVocalistEnum["Vocaloid"] = "Vocaloid";
    SongApiGetTopSongsVocalistEnum["Utau"] = "UTAU";
    SongApiGetTopSongsVocalistEnum["Other"] = "Other";
})(SongApiGetTopSongsVocalistEnum || (SongApiGetTopSongsVocalistEnum = {}));
var SongApiGetTopSongsQueryParams = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsQueryParams, _super);
    function SongApiGetTopSongsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=durationHours" }),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsQueryParams.prototype, "durationHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterBy" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "filterBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languagePreference" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "languagePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], SongApiGetTopSongsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vocalist" }),
        __metadata("design:type", String)
    ], SongApiGetTopSongsQueryParams.prototype, "vocalist", void 0);
    return SongApiGetTopSongsQueryParams;
}(SpeakeasyBase));
export { SongApiGetTopSongsQueryParams };
var SongApiGetTopSongsRequest = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsRequest, _super);
    function SongApiGetTopSongsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SongApiGetTopSongsQueryParams)
    ], SongApiGetTopSongsRequest.prototype, "queryParams", void 0);
    return SongApiGetTopSongsRequest;
}(SpeakeasyBase));
export { SongApiGetTopSongsRequest };
var SongApiGetTopSongsResponse = /** @class */ (function (_super) {
    __extends(SongApiGetTopSongsResponse, _super);
    function SongApiGetTopSongsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SongApiGetTopSongsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SongApiGetTopSongsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SongForApiContract }),
        __metadata("design:type", Array)
    ], SongApiGetTopSongsResponse.prototype, "songForApiContracts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SongApiGetTopSongsResponse.prototype, "statusCode", void 0);
    return SongApiGetTopSongsResponse;
}(SpeakeasyBase));
export { SongApiGetTopSongsResponse };
