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
import { ArtistForArtistForApiContract } from "./artistforartistforapicontract";
import { ArtistContract } from "./artistcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ArtistRelationsForApi } from "./artistrelationsforapi";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export var ArtistForApiContractArtistTypeEnum;
(function (ArtistForApiContractArtistTypeEnum) {
    ArtistForApiContractArtistTypeEnum["Unknown"] = "Unknown";
    ArtistForApiContractArtistTypeEnum["Circle"] = "Circle";
    ArtistForApiContractArtistTypeEnum["Label"] = "Label";
    ArtistForApiContractArtistTypeEnum["Producer"] = "Producer";
    ArtistForApiContractArtistTypeEnum["Animator"] = "Animator";
    ArtistForApiContractArtistTypeEnum["Illustrator"] = "Illustrator";
    ArtistForApiContractArtistTypeEnum["Lyricist"] = "Lyricist";
    ArtistForApiContractArtistTypeEnum["Vocaloid"] = "Vocaloid";
    ArtistForApiContractArtistTypeEnum["Utau"] = "UTAU";
    ArtistForApiContractArtistTypeEnum["CeVio"] = "CeVIO";
    ArtistForApiContractArtistTypeEnum["OtherVoiceSynthesizer"] = "OtherVoiceSynthesizer";
    ArtistForApiContractArtistTypeEnum["OtherVocalist"] = "OtherVocalist";
    ArtistForApiContractArtistTypeEnum["OtherGroup"] = "OtherGroup";
    ArtistForApiContractArtistTypeEnum["OtherIndividual"] = "OtherIndividual";
    ArtistForApiContractArtistTypeEnum["Utaite"] = "Utaite";
    ArtistForApiContractArtistTypeEnum["Band"] = "Band";
    ArtistForApiContractArtistTypeEnum["Vocalist"] = "Vocalist";
    ArtistForApiContractArtistTypeEnum["Character"] = "Character";
    ArtistForApiContractArtistTypeEnum["SynthesizerV"] = "SynthesizerV";
})(ArtistForApiContractArtistTypeEnum || (ArtistForApiContractArtistTypeEnum = {}));
export var ArtistForApiContractDefaultNameLanguageEnum;
(function (ArtistForApiContractDefaultNameLanguageEnum) {
    ArtistForApiContractDefaultNameLanguageEnum["Unspecified"] = "Unspecified";
    ArtistForApiContractDefaultNameLanguageEnum["Japanese"] = "Japanese";
    ArtistForApiContractDefaultNameLanguageEnum["Romaji"] = "Romaji";
    ArtistForApiContractDefaultNameLanguageEnum["English"] = "English";
})(ArtistForApiContractDefaultNameLanguageEnum || (ArtistForApiContractDefaultNameLanguageEnum = {}));
export var ArtistForApiContractStatusEnum;
(function (ArtistForApiContractStatusEnum) {
    ArtistForApiContractStatusEnum["Draft"] = "Draft";
    ArtistForApiContractStatusEnum["Finished"] = "Finished";
    ArtistForApiContractStatusEnum["Approved"] = "Approved";
    ArtistForApiContractStatusEnum["Locked"] = "Locked";
})(ArtistForApiContractStatusEnum || (ArtistForApiContractStatusEnum = {}));
var ArtistForApiContract = /** @class */ (function (_super) {
    __extends(ArtistForApiContract, _super);
    function ArtistForApiContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistLinks", elemType: ArtistForArtistForApiContract }),
        __metadata("design:type", Array)
    ], ArtistForApiContract.prototype, "artistLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistLinksReverse", elemType: ArtistForArtistForApiContract }),
        __metadata("design:type", Array)
    ], ArtistForApiContract.prototype, "artistLinksReverse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistType" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "artistType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseVoicebank" }),
        __metadata("design:type", ArtistContract)
    ], ArtistForApiContract.prototype, "baseVoicebank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], ArtistForApiContract.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultName" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "defaultName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "defaultNameLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ArtistForApiContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ArtistForApiContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPicture" }),
        __metadata("design:type", EntryThumbForApiContract)
    ], ArtistForApiContract.prototype, "mainPicture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergedTo" }),
        __metadata("design:type", Number)
    ], ArtistForApiContract.prototype, "mergedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract }),
        __metadata("design:type", Array)
    ], ArtistForApiContract.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictureMime" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "pictureMime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations" }),
        __metadata("design:type", ArtistRelationsForApi)
    ], ArtistForApiContract.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", Date)
    ], ArtistForApiContract.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ArtistForApiContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract }),
        __metadata("design:type", Array)
    ], ArtistForApiContract.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ArtistForApiContract.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract }),
        __metadata("design:type", Array)
    ], ArtistForApiContract.prototype, "webLinks", void 0);
    return ArtistForApiContract;
}(SpeakeasyBase));
export { ArtistForApiContract };
