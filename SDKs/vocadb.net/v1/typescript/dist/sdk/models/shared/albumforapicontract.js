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
import { ArtistForAlbumForApiContract } from "./artistforalbumforapicontract";
import { AlbumDiscPropertiesContract } from "./albumdiscpropertiescontract";
import { AlbumIdentifierContract } from "./albumidentifiercontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { PvContract } from "./pvcontract";
import { OptionalDateTimeContract } from "./optionaldatetimecontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { SongInAlbumForApiContract } from "./songinalbumforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export var AlbumForApiContractDefaultNameLanguageEnum;
(function (AlbumForApiContractDefaultNameLanguageEnum) {
    AlbumForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    AlbumForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    AlbumForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    AlbumForApiContractDefaultNameLanguageEnum["English"] = "English";
})(AlbumForApiContractDefaultNameLanguageEnum || (AlbumForApiContractDefaultNameLanguageEnum = {}));
export var AlbumForApiContractDiscTypeEnum;
(function (AlbumForApiContractDiscTypeEnum) {
    AlbumForApiContractDiscTypeEnum["Unknown"] = "Unknown";
    AlbumForApiContractDiscTypeEnum["Album"] = "Album";
    AlbumForApiContractDiscTypeEnum["Single"] = "Single";
    AlbumForApiContractDiscTypeEnum["Ep"] = "EP";
    AlbumForApiContractDiscTypeEnum["SplitAlbum"] = "SplitAlbum";
    AlbumForApiContractDiscTypeEnum["Compilation"] = "Compilation";
    AlbumForApiContractDiscTypeEnum["Video"] = "Video";
    AlbumForApiContractDiscTypeEnum["Artbook"] = "Artbook";
    AlbumForApiContractDiscTypeEnum["Game"] = "Game";
    AlbumForApiContractDiscTypeEnum["Fanmade"] = "Fanmade";
    AlbumForApiContractDiscTypeEnum["Instrumental"] = "Instrumental";
    AlbumForApiContractDiscTypeEnum["Other"] = "Other";
})(AlbumForApiContractDiscTypeEnum || (AlbumForApiContractDiscTypeEnum = {}));
export var AlbumForApiContractStatusEnum;
(function (AlbumForApiContractStatusEnum) {
    AlbumForApiContractStatusEnum["Draft"] = "Draft";
    AlbumForApiContractStatusEnum["Finished"] = "Finished";
    AlbumForApiContractStatusEnum["Approved"] = "Approved";
    AlbumForApiContractStatusEnum["Locked"] = "Locked";
})(AlbumForApiContractStatusEnum || (AlbumForApiContractStatusEnum = {}));
var AlbumForApiContract = /** @class */ (function (_super) {
    __extends(AlbumForApiContract, _super);
    function AlbumForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "artistString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistForAlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "barcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catalogNumber" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "catalogNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], AlbumForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "defaultName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], AlbumForApiContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discType" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "discType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discs", elemType: AlbumDiscPropertiesContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "discs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifiers", elemType: AlbumIdentifierContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "identifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], AlbumForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "mergedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvs", elemType: PvContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "pvs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingAverage" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "ratingAverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingCount" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "ratingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", OptionalDateTimeContract)
    ], AlbumForApiContract.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseEvent" }),
        __metadata("design:type", ReleaseEventForApiContract)
    ], AlbumForApiContract.prototype, "releaseEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AlbumForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracks", elemType: SongInAlbumForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "tracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], AlbumForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], AlbumForApiContract.prototype, "webLinks", void 0);
    return AlbumForApiContract;
}(SpeakeasyBase));
export { AlbumForApiContract };
