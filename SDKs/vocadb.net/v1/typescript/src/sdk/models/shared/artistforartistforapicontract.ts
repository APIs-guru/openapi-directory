import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";


export enum ArtistForArtistForApiContractLinkTypeEnum {
    CharacterDesigner = "CharacterDesigner",
    Group = "Group",
    Illustrator = "Illustrator",
    Manager = "Manager",
    VoiceProvider = "VoiceProvider"
}


export class ArtistForArtistForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: ArtistForArtistForApiContractLinkTypeEnum;
}
