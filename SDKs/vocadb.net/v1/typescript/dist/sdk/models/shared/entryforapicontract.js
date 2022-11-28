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
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { ArchivedWebLinkContract } from "./archivedweblinkcontract";
export var EntryForApiContractArtistTypeEnum;
(function (EntryForApiContractArtistTypeEnum) {
    EntryForApiContractArtistTypeEnum["Unknown"] = "Unknown";
    EntryForApiContractArtistTypeEnum["Circle"] = "Circle";
    EntryForApiContractArtistTypeEnum["Label"] = "Label";
    EntryForApiContractArtistTypeEnum["Producer"] = "Producer";
    EntryForApiContractArtistTypeEnum["Animator"] = "Animator";
    EntryForApiContractArtistTypeEnum["Illustrator"] = "Illustrator";
    EntryForApiContractArtistTypeEnum["Lyricist"] = "Lyricist";
    EntryForApiContractArtistTypeEnum["Vocaloid"] = "Vocaloid";
    EntryForApiContractArtistTypeEnum["Utau"] = "UTAU";
    EntryForApiContractArtistTypeEnum["CeVio"] = "CeVIO";
    EntryForApiContractArtistTypeEnum["OtherVoiceSynthesizer"] = "OtherVoiceSynthesizer";
    EntryForApiContractArtistTypeEnum["OtherVocalist"] = "OtherVocalist";
    EntryForApiContractArtistTypeEnum["OtherGroup"] = "OtherGroup";
    EntryForApiContractArtistTypeEnum["OtherIndividual"] = "OtherIndividual";
    EntryForApiContractArtistTypeEnum["Utaite"] = "Utaite";
    EntryForApiContractArtistTypeEnum["Band"] = "Band";
    EntryForApiContractArtistTypeEnum["Vocalist"] = "Vocalist";
    EntryForApiContractArtistTypeEnum["Character"] = "Character";
    EntryForApiContractArtistTypeEnum["SynthesizerV"] = "SynthesizerV";
})(EntryForApiContractArtistTypeEnum || (EntryForApiContractArtistTypeEnum = {}));
export var EntryForApiContractDefaultNameLanguageEnum;
(function (EntryForApiContractDefaultNameLanguageEnum) {
    EntryForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    EntryForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    EntryForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    EntryForApiContractDefaultNameLanguageEnum["English"] = "English";
})(EntryForApiContractDefaultNameLanguageEnum || (EntryForApiContractDefaultNameLanguageEnum = {}));
export var EntryForApiContractDiscTypeEnum;
(function (EntryForApiContractDiscTypeEnum) {
    EntryForApiContractDiscTypeEnum["Unknown"] = "Unknown";
    EntryForApiContractDiscTypeEnum["Album"] = "Album";
    EntryForApiContractDiscTypeEnum["Single"] = "Single";
    EntryForApiContractDiscTypeEnum["Ep"] = "EP";
    EntryForApiContractDiscTypeEnum["SplitAlbum"] = "SplitAlbum";
    EntryForApiContractDiscTypeEnum["Compilation"] = "Compilation";
    EntryForApiContractDiscTypeEnum["Video"] = "Video";
    EntryForApiContractDiscTypeEnum["Artbook"] = "Artbook";
    EntryForApiContractDiscTypeEnum["Game"] = "Game";
    EntryForApiContractDiscTypeEnum["Fanmade"] = "Fanmade";
    EntryForApiContractDiscTypeEnum["Instrumental"] = "Instrumental";
    EntryForApiContractDiscTypeEnum["Other"] = "Other";
})(EntryForApiContractDiscTypeEnum || (EntryForApiContractDiscTypeEnum = {}));
export var EntryForApiContractEntryTypeEnum;
(function (EntryForApiContractEntryTypeEnum) {
    EntryForApiContractEntryTypeEnum["Undefined"] = "Undefined";
    EntryForApiContractEntryTypeEnum["Album"] = "Album";
    EntryForApiContractEntryTypeEnum["Artist"] = "Artist";
    EntryForApiContractEntryTypeEnum["DiscussionTopic"] = "DiscussionTopic";
    EntryForApiContractEntryTypeEnum["Pv"] = "PV";
    EntryForApiContractEntryTypeEnum["ReleaseEvent"] = "ReleaseEvent";
    EntryForApiContractEntryTypeEnum["ReleaseEventSeries"] = "ReleaseEventSeries";
    EntryForApiContractEntryTypeEnum["Song"] = "Song";
    EntryForApiContractEntryTypeEnum["SongList"] = "SongList";
    EntryForApiContractEntryTypeEnum["Tag"] = "Tag";
    EntryForApiContractEntryTypeEnum["User"] = "User";
    EntryForApiContractEntryTypeEnum["Venue"] = "Venue";
})(EntryForApiContractEntryTypeEnum || (EntryForApiContractEntryTypeEnum = {}));
export var EntryForApiContractEventCategoryEnum;
(function (EntryForApiContractEventCategoryEnum) {
    EntryForApiContractEventCategoryEnum["Unspecified"] = "Unspecified";
    EntryForApiContractEventCategoryEnum["AlbumRelease"] = "AlbumRelease";
    EntryForApiContractEventCategoryEnum["Anniversary"] = "Anniversary";
    EntryForApiContractEventCategoryEnum["Club"] = "Club";
    EntryForApiContractEventCategoryEnum["Concert"] = "Concert";
    EntryForApiContractEventCategoryEnum["Contest"] = "Contest";
    EntryForApiContractEventCategoryEnum["Convention"] = "Convention";
    EntryForApiContractEventCategoryEnum["Other"] = "Other";
})(EntryForApiContractEventCategoryEnum || (EntryForApiContractEventCategoryEnum = {}));
export var EntryForApiContractSongListFeaturedCategoryEnum;
(function (EntryForApiContractSongListFeaturedCategoryEnum) {
    EntryForApiContractSongListFeaturedCategoryEnum["Nothing"] = "Nothing";
    EntryForApiContractSongListFeaturedCategoryEnum["Concerts"] = "Concerts";
    EntryForApiContractSongListFeaturedCategoryEnum["VocaloidRanking"] = "VocaloidRanking";
    EntryForApiContractSongListFeaturedCategoryEnum["Pools"] = "Pools";
    EntryForApiContractSongListFeaturedCategoryEnum["Other"] = "Other";
})(EntryForApiContractSongListFeaturedCategoryEnum || (EntryForApiContractSongListFeaturedCategoryEnum = {}));
export var EntryForApiContractSongTypeEnum;
(function (EntryForApiContractSongTypeEnum) {
    EntryForApiContractSongTypeEnum["Unspecified"] = "Unspecified";
    EntryForApiContractSongTypeEnum["Original"] = "Original";
    EntryForApiContractSongTypeEnum["Remaster"] = "Remaster";
    EntryForApiContractSongTypeEnum["Remix"] = "Remix";
    EntryForApiContractSongTypeEnum["Cover"] = "Cover";
    EntryForApiContractSongTypeEnum["Arrangement"] = "Arrangement";
    EntryForApiContractSongTypeEnum["Instrumental"] = "Instrumental";
    EntryForApiContractSongTypeEnum["Mashup"] = "Mashup";
    EntryForApiContractSongTypeEnum["MusicPv"] = "MusicPV";
    EntryForApiContractSongTypeEnum["DramaPv"] = "DramaPV";
    EntryForApiContractSongTypeEnum["Live"] = "Live";
    EntryForApiContractSongTypeEnum["Illustration"] = "Illustration";
    EntryForApiContractSongTypeEnum["Other"] = "Other";
})(EntryForApiContractSongTypeEnum || (EntryForApiContractSongTypeEnum = {}));
export var EntryForApiContractStatusEnum;
(function (EntryForApiContractStatusEnum) {
    EntryForApiContractStatusEnum["Draft"] = "Draft";
    EntryForApiContractStatusEnum["Finished"] = "Finished";
    EntryForApiContractStatusEnum["Approved"] = "Approved";
    EntryForApiContractStatusEnum["Locked"] = "Locked";
})(EntryForApiContractStatusEnum || (EntryForApiContractStatusEnum = {}));
var EntryForApiContract = /** @class */ (function (_super) {
    __extends(EntryForApiContract, _super);
    function EntryForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityDate" }),
        __metadata("design:type", Date)
    ], EntryForApiContract.prototype, "activityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "artistString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistType" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "artistType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], EntryForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "defaultName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discType" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "discType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryType" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "entryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventCategory" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "eventCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EntryForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], EntryForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], EntryForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pVs", elemType: PvContract }),
        __metadata("design:type", Array)
    ], EntryForApiContract.prototype, "pVs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseEventSeriesName" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "releaseEventSeriesName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songListFeaturedCategory" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "songListFeaturedCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "songType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagCategoryName" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "tagCategoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], EntryForApiContract.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlSlug" }),
        __metadata("design:type", String)
    ], EntryForApiContract.prototype, "urlSlug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], EntryForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: ArchivedWebLinkContract }),
        __metadata("design:type", Array)
    ], EntryForApiContract.prototype, "webLinks", void 0);
    return EntryForApiContract;
}(SpeakeasyBase));
export { EntryForApiContract };
