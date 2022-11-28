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
export var ArtistForEventContractEffectiveRolesEnum;
(function (ArtistForEventContractEffectiveRolesEnum) {
    ArtistForEventContractEffectiveRolesEnum["Default"] = "Default";
    ArtistForEventContractEffectiveRolesEnum["Dancer"] = "Dancer";
    ArtistForEventContractEffectiveRolesEnum["Dj"] = "DJ";
    ArtistForEventContractEffectiveRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForEventContractEffectiveRolesEnum["Organizer"] = "Organizer";
    ArtistForEventContractEffectiveRolesEnum["Promoter"] = "Promoter";
    ArtistForEventContractEffectiveRolesEnum["Vj"] = "VJ";
    ArtistForEventContractEffectiveRolesEnum["Vocalist"] = "Vocalist";
    ArtistForEventContractEffectiveRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForEventContractEffectiveRolesEnum["OtherPerformer"] = "OtherPerformer";
    ArtistForEventContractEffectiveRolesEnum["Other"] = "Other";
})(ArtistForEventContractEffectiveRolesEnum || (ArtistForEventContractEffectiveRolesEnum = {}));
export var ArtistForEventContractRolesEnum;
(function (ArtistForEventContractRolesEnum) {
    ArtistForEventContractRolesEnum["Default"] = "Default";
    ArtistForEventContractRolesEnum["Dancer"] = "Dancer";
    ArtistForEventContractRolesEnum["Dj"] = "DJ";
    ArtistForEventContractRolesEnum["Instrumentalist"] = "Instrumentalist";
    ArtistForEventContractRolesEnum["Organizer"] = "Organizer";
    ArtistForEventContractRolesEnum["Promoter"] = "Promoter";
    ArtistForEventContractRolesEnum["Vj"] = "VJ";
    ArtistForEventContractRolesEnum["Vocalist"] = "Vocalist";
    ArtistForEventContractRolesEnum["VoiceManipulator"] = "VoiceManipulator";
    ArtistForEventContractRolesEnum["OtherPerformer"] = "OtherPerformer";
    ArtistForEventContractRolesEnum["Other"] = "Other";
})(ArtistForEventContractRolesEnum || (ArtistForEventContractRolesEnum = {}));
var ArtistForEventContract = /** @class */ (function (_super) {
    __extends(ArtistForEventContract, _super);
    function ArtistForEventContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artist" }),
        __metadata("design:type", ArtistContract)
    ], ArtistForEventContract.prototype, "artist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveRoles" }),
        __metadata("design:type", String)
    ], ArtistForEventContract.prototype, "effectiveRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ArtistForEventContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ArtistForEventContract.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", String)
    ], ArtistForEventContract.prototype, "roles", void 0);
    return ArtistForEventContract;
}(SpeakeasyBase));
export { ArtistForEventContract };
