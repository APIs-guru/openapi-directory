import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistContract } from "./artistcontract";

export enum ArtistForEventContractEffectiveRolesEnum {
    Default = "Default"
,    Dancer = "Dancer"
,    Dj = "DJ"
,    Instrumentalist = "Instrumentalist"
,    Organizer = "Organizer"
,    Promoter = "Promoter"
,    Vj = "VJ"
,    Vocalist = "Vocalist"
,    VoiceManipulator = "VoiceManipulator"
,    OtherPerformer = "OtherPerformer"
,    Other = "Other"
}

export enum ArtistForEventContractRolesEnum {
    Default = "Default"
,    Dancer = "Dancer"
,    Dj = "DJ"
,    Instrumentalist = "Instrumentalist"
,    Organizer = "Organizer"
,    Promoter = "Promoter"
,    Vj = "VJ"
,    Vocalist = "Vocalist"
,    VoiceManipulator = "VoiceManipulator"
,    OtherPerformer = "OtherPerformer"
,    Other = "Other"
}


export class ArtistForEventContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @Metadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForEventContractEffectiveRolesEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roles" })
  roles?: ArtistForEventContractRolesEnum;
}
