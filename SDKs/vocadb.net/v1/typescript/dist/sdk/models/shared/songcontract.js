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
export var SongContractPvServicesEnum;
(function (SongContractPvServicesEnum) {
    SongContractPvServicesEnum["Nothing"] = "Nothing";
    SongContractPvServicesEnum["NicoNicoDouga"] = "NicoNicoDouga";
    SongContractPvServicesEnum["Youtube"] = "Youtube";
    SongContractPvServicesEnum["SoundCloud"] = "SoundCloud";
    SongContractPvServicesEnum["Vimeo"] = "Vimeo";
    SongContractPvServicesEnum["Piapro"] = "Piapro";
    SongContractPvServicesEnum["Bilibili"] = "Bilibili";
    SongContractPvServicesEnum["File"] = "File";
    SongContractPvServicesEnum["LocalFile"] = "LocalFile";
    SongContractPvServicesEnum["Creofuga"] = "Creofuga";
    SongContractPvServicesEnum["Bandcamp"] = "Bandcamp";
})(SongContractPvServicesEnum || (SongContractPvServicesEnum = {}));
export var SongContractSongTypeEnum;
(function (SongContractSongTypeEnum) {
    SongContractSongTypeEnum["Unspecified"] = "Unspecified";
    SongContractSongTypeEnum["Original"] = "Original";
    SongContractSongTypeEnum["Remaster"] = "Remaster";
    SongContractSongTypeEnum["Remix"] = "Remix";
    SongContractSongTypeEnum["Cover"] = "Cover";
    SongContractSongTypeEnum["Arrangement"] = "Arrangement";
    SongContractSongTypeEnum["Instrumental"] = "Instrumental";
    SongContractSongTypeEnum["Mashup"] = "Mashup";
    SongContractSongTypeEnum["MusicPv"] = "MusicPV";
    SongContractSongTypeEnum["DramaPv"] = "DramaPV";
    SongContractSongTypeEnum["Live"] = "Live";
    SongContractSongTypeEnum["Illustration"] = "Illustration";
    SongContractSongTypeEnum["Other"] = "Other";
})(SongContractSongTypeEnum || (SongContractSongTypeEnum = {}));
export var SongContractStatusEnum;
(function (SongContractStatusEnum) {
    SongContractStatusEnum["Draft"] = "Draft";
    SongContractStatusEnum["Finished"] = "Finished";
    SongContractStatusEnum["Approved"] = "Approved";
    SongContractStatusEnum["Locked"] = "Locked";
})(SongContractStatusEnum || (SongContractStatusEnum = {}));
var SongContract = /** @class */ (function (_super) {
    __extends(SongContract, _super);
    function SongContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistString" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "artistString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], SongContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], SongContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favoritedTimes" }),
        __metadata("design:type", Number)
    ], SongContract.prototype, "favoritedTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SongContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lengthSeconds" }),
        __metadata("design:type", Number)
    ], SongContract.prototype, "lengthSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nicoId" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "nicoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishDate" }),
        __metadata("design:type", Date)
    ], SongContract.prototype, "publishDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvServices" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "pvServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingScore" }),
        __metadata("design:type", Number)
    ], SongContract.prototype, "ratingScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=songType" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "songType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbUrl" }),
        __metadata("design:type", String)
    ], SongContract.prototype, "thumbUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], SongContract.prototype, "version", void 0);
    return SongContract;
}(SpeakeasyBase));
export { SongContract };
