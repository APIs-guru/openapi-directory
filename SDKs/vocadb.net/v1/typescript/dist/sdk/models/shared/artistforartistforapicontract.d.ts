import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";
export declare enum ArtistForArtistForApiContractLinkTypeEnum {
    CharacterDesigner = "CharacterDesigner",
    Group = "Group",
    Illustrator = "Illustrator",
    Manager = "Manager",
    VoiceProvider = "VoiceProvider"
}
export declare class ArtistForArtistForApiContract extends SpeakeasyBase {
    artist?: ArtistContract;
    linkType?: ArtistForArtistForApiContractLinkTypeEnum;
}
