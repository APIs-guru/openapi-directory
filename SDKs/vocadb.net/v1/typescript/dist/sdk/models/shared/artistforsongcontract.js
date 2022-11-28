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
import { ArtistContract } from "./artistcontract";
export var ArtistForSongContractCategoriesEnum;
(function (ArtistForSongContractCategoriesEnum) {
    ArtistForSongContractCategoriesEnum["Nothing"] = "Nothing";
    ArtistForSongContractCategoriesEnum["Vocalist"] = "Vocalist";
    ArtistForSongContractCategoriesEnum["Producer"] = "Producer";
    ArtistForSongContractCategoriesEnum["Animator"] = "Animator";
    ArtistForSongContractCategoriesEnum["Label"] = "Label";
    ArtistForSongContractCategoriesEnum["Circle"] = "Circle";
    ArtistForSongContractCategoriesEnum["Other"] = "Other";
    ArtistForSongContractCategoriesEnum["Band"] = "Band";
    ArtistForSongContractCategoriesEnum["Illustrator"] = "Illustrator";
    ArtistForSongContractCategoriesEnum["Subject"] = "Subject";
})(ArtistForSongContractCategoriesEnum || (ArtistForSongContractCategoriesEnum = {}));
export var ArtistForSongContractEffectiveRolesEnum;
(function (ArtistForSongContractEffectiveRolesEnum) {
    ArtistForSongContractEffectiveRolesEnum["Default"] = "Default";
    ArtistForSongContractEffectiveRolesEnum["Animator"] = "Animator";
    ArtistForSongContractEffectiveRolesEnum["Arranger"] = "Arranger";
    ArtistForSongContractEffectiveRolesEnum["Composer"] = "Composer";
    ArtistForSongContractEffectiveRolesEnum["Distributor"] = "Distributor";
    ArtistForSongContractEffectiveRolesEnum["Illustrator"] = "Illustrator";
    ArtistForSongContractEffectiveRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForSongContractEffectiveRolesEnum["Lyricist"] = "Lyricist";
    ArtistForSongContractEffectiveRolesEnum["Mastering"] = "Mastering";
    ArtistForSongContractEffectiveRolesEnum["Publisher"] = "Publisher";
    ArtistForSongContractEffectiveRolesEnum["Vocalist"] = "Vocalist";
    ArtistForSongContractEffectiveRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForSongContractEffectiveRolesEnum["Other"] = "Other";
    ArtistForSongContractEffectiveRolesEnum["Mixer"] = "Mixer";
    ArtistForSongContractEffectiveRolesEnum["Chorus"] = "Chorus";
    ArtistForSongContractEffectiveRolesEnum["Encoder"] = "Encoder";
    ArtistForSongContractEffectiveRolesEnum["VocalDataProvider"] = "VocalDataProvider";
})(ArtistForSongContractEffectiveRolesEnum || (ArtistForSongContractEffectiveRolesEnum = {}));
export var ArtistForSongContractRolesEnum;
(function (ArtistForSongContractRolesEnum) {
    ArtistForSongContractRolesEnum["Default"] = "Default";
    ArtistForSongContractRolesEnum["Animator"] = "Animator";
    ArtistForSongContractRolesEnum["Arranger"] = "Arranger";
    ArtistForSongContractRolesEnum["Composer"] = "Composer";
    ArtistForSongContractRolesEnum["Distributor"] = "Distributor";
    ArtistForSongContractRolesEnum["Illustrator"] = "Illustrator";
    ArtistForSongContractRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForSongContractRolesEnum["Lyricist"] = "Lyricist";
    ArtistForSongContractRolesEnum["Mastering"] = "Mastering";
    ArtistForSongContractRolesEnum["Publisher"] = "Publisher";
    ArtistForSongContractRolesEnum["Vocalist"] = "Vocalist";
    ArtistForSongContractRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForSongContractRolesEnum["Other"] = "Other";
    ArtistForSongContractRolesEnum["Mixer"] = "Mixer";
    ArtistForSongContractRolesEnum["Chorus"] = "Chorus";
    ArtistForSongContractRolesEnum["Encoder"] = "Encoder";
    ArtistForSongContractRolesEnum["VocalDataProvider"] = "VocalDataProvider";
})(ArtistForSongContractRolesEnum || (ArtistForSongContractRolesEnum = {}));
var ArtistForSongContract = /** @class */ (function (_super) {
    __extends(ArtistForSongContract, _super);
    function ArtistForSongContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist" }),
        __metadata("design:type", ArtistContract)
    ], ArtistForSongContract.prototype, "artist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", String)
    ], ArtistForSongContract.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveRoles" }),
        __metadata("design:type", String)
    ], ArtistForSongContract.prototype, "effectiveRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ArtistForSongContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isCustomName" }),
        __metadata("design:type", Boolean)
    ], ArtistForSongContract.prototype, "isCustomName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSupport" }),
        __metadata("design:type", Boolean)
    ], ArtistForSongContract.prototype, "isSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtistForSongContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", String)
    ], ArtistForSongContract.prototype, "roles", void 0);
    return ArtistForSongContract;
}(SpeakeasyBase));
export { ArtistForSongContract };
