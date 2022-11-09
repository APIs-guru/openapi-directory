import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistContract } from "./artistcontract";

export enum ArtistForArtistForApiContractLinkTypeEnum {
    CharacterDesigner = "CharacterDesigner"
,    Group = "Group"
,    Illustrator = "Illustrator"
,    Manager = "Manager"
,    VoiceProvider = "VoiceProvider"
}


export class ArtistForArtistForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @Metadata({ data: "json, name=linkType" })
  linkType?: ArtistForArtistForApiContractLinkTypeEnum;
}
