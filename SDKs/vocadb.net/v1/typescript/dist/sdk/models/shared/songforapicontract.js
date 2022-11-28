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
import { AlbumContractInput } from "./albumcontract";
import { ArtistForSongContract } from "./artistforsongcontract";
import { LyricsForSongContract } from "./lyricsforsongcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { ReleaseEventForApiContractInput } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
import { AlbumContract } from "./albumcontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
export var SongForApiContractDefaultNameLanguageEnum;
(function (SongForApiContractDefaultNameLanguageEnum) {
    SongForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    SongForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    SongForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    SongForApiContractDefaultNameLanguageEnum["English"] = "English";
})(SongForApiContractDefaultNameLanguageEnum || (SongForApiContractDefaultNameLanguageEnum = {}));
export var SongForApiContractPvServicesEnum;
(function (SongForApiContractPvServicesEnum) {
    SongForApiContractPvServicesEnum["Nothing"] = "Nothing";
    SongForApiContractPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongForApiContractPvServicesEnum["Youtube"] = "Youtube";
    SongForApiContractPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongForApiContractPvServicesEnum["Vimeo"] = "Vimeo";
    SongForApiContractPvServicesEnum["Piapro"] = "Piapro";
    SongForApiContractPvServicesEnum["Bilibili"] = "Bilibili";
    SongForApiContractPvServicesEnum["File"] = "File";
    SongForApiContractPvServicesEnum["LocalFile"] = "LocalFile";
    SongForApiContractPvServicesEnum["Creofuga"] = "Creofuga";
    SongForApiContractPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongForApiContractPvServicesEnum || (SongForApiContractPvServicesEnum = {}));
export var SongForApiContractSongTypeEnum;
(function (SongForApiContractSongTypeEnum) {
    SongForApiContractSongTypeEnum["Unspecified"] = "Unspecified";
    SongForApiContractSongTypeEnum["Original"] = "Original";
    SongForApiContractSongTypeEnum["Remaster"] = "Remaster";
    SongForApiContractSongTypeEnum["Remix"] = "Remix";
    SongForApiContractSongTypeEnum["Cover"] = "Cover";
    SongForApiContractSongTypeEnum["Arrangement"] = "Arrangement";
    SongForApiContractSongTypeEnum["Instrumental"] = "Instrumental";
    SongForApiContractSongTypeEnum["Mashup"] = "Mashup";
    SongForApiContractSongTypeEnum["MusicPv"] = "MusicPV";
    SongForApiContractSongTypeEnum["DramaPv"] = "DramaPV";
    SongForApiContractSongTypeEnum["Live"] = "Live";
    SongForApiContractSongTypeEnum["Illustration"] = "Illustration";
    SongForApiContractSongTypeEnum["Other"] = "Other";
})(SongForApiContractSongTypeEnum || (SongForApiContractSongTypeEnum = {}));
export var SongForApiContractStatusEnum;
(function (SongForApiContractStatusEnum) {
    SongForApiContractStatusEnum["Draft"] = "Draft";
    SongForApiContractStatusEnum["Finished"] = "Finished";
    SongForApiContractStatusEnum["Approved"] = "Approved";
    SongForApiContractStatusEnum["Locked"] = "Locked";
})(SongForApiContractStatusEnum || (SongForApiContractStatusEnum = {}));
var SongForApiContractInput = /** @class */ (function (_super) {
    __extends(SongForApiContractInput, _super);
    function SongForApiContractInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums", elemType: AlbumContractInput }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "artistString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], SongForApiContractInput.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "defaultName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongForApiContractInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favoritedTimes" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "favoritedTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lengthSeconds" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "lengthSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lyrics", elemType: LyricsForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "lyrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], SongForApiContractInput.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "mergedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalVersionId" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "originalVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], SongForApiContractInput.prototype, "publishDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvServices" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "pvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingScore" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "ratingScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseEvent" }),
        __metadata("design:type", ReleaseEventForApiContractInput)
    ], SongForApiContractInput.prototype, "releaseEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "songType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], SongForApiContractInput.prototype, "thumbUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongForApiContractInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContractInput.prototype, "webLinks", void 0);
    return SongForApiContractInput;
}(SpeakeasyBase));
export { SongForApiContractInput };
var SongForApiContract = /** @class */ (function (_super) {
    __extends(SongForApiContract, _super);
    function SongForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albums", elemType: AlbumContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "albums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "artistString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], SongForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "defaultName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongForApiContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favoritedTimes" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "favoritedTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lengthSeconds" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "lengthSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lyrics", elemType: LyricsForSongContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "lyrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], SongForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "mergedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalVersionId" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "originalVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], SongForApiContract.prototype, "publishDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvServices" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "pvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingScore" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "ratingScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseEvent" }),
        __metadata("design:type", ReleaseEventForApiContract)
    ], SongForApiContract.prototype, "releaseEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "songType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], SongForApiContract.prototype, "thumbUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], SongForApiContract.prototype, "webLinks", void 0);
    return SongForApiContract;
}(SpeakeasyBase));
export { SongForApiContract };
