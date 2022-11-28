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
export var ArtistContractArtistTypeEnum;
(function (ArtistContractArtistTypeEnum) {
    ArtistContractArtistTypeEnum["Unknown"] = "Unknown";
    ArtistContractArtistTypeEnum["Circle"] = "Circle";
    ArtistContractArtistTypeEnum["Label"] = "Label";
    ArtistContractArtistTypeEnum["Producer"] = "Producer";
    ArtistContractArtistTypeEnum["Animator"] = "Animator";
    ArtistContractArtistTypeEnum["Illustrator"] = "Illustrator";
    ArtistContractArtistTypeEnum["Lyricist"] = "Lyricist";
    ArtistContractArtistTypeEnum["Vocaloid"] = "Vocaloid";
    ArtistContractArtistTypeEnum["Utau"] = "UTAU";
    ArtistContractArtistTypeEnum["CeVio"] = "CeVIO";
    ArtistContractArtistTypeEnum["OtherVoiceSynthesizer"] = "OtherVoiceSynthesizer";
    ArtistContractArtistTypeEnum["OtherVocalist"] = "OtherVocalist";
    ArtistContractArtistTypeEnum["OtherGroup"] = "OtherGroup";
    ArtistContractArtistTypeEnum["OtherIndividual"] = "OtherIndividual";
    ArtistContractArtistTypeEnum["Utaite"] = "Utaite";
    ArtistContractArtistTypeEnum["Band"] = "Band";
    ArtistContractArtistTypeEnum["Vocalist"] = "Vocalist";
    ArtistContractArtistTypeEnum["Character"] = "Character";
    ArtistContractArtistTypeEnum["SynthesizerV"] = "SynthesizerV";
})(ArtistContractArtistTypeEnum || (ArtistContractArtistTypeEnum = {}));
export var ArtistContractStatusEnum;
(function (ArtistContractStatusEnum) {
    ArtistContractStatusEnum["Draft"] = "Draft";
    ArtistContractStatusEnum["Finished"] = "Finished";
    ArtistContractStatusEnum["Approved"] = "Approved";
    ArtistContractStatusEnum["Locked"] = "Locked";
})(ArtistContractStatusEnum || (ArtistContractStatusEnum = {}));
var ArtistContract = /** @class */ (function (_super) {
    __extends(ArtistContract, _super);
    function ArtistContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalNames" }),
        __metadata("design:type", String)
    ], ArtistContract.prototype, "additionalNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistType" }),
        __metadata("design:type", String)
    ], ArtistContract.prototype, "artistType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ArtistContract.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ArtistContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtistContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pictureMime" }),
        __metadata("design:type", String)
    ], ArtistContract.prototype, "pictureMime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", Date)
    ], ArtistContract.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ArtistContract.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ArtistContract.prototype, "version", void 0);
    return ArtistContract;
}(SpeakeasyBase));
export { ArtistContract };
