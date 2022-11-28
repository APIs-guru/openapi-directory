import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";


export enum ArtistForEventContractEffectiveRolesEnum {
    Default = "Default",
    Dancer = "Dancer",
    Dj = "DJ",
    Instrumentalist = "Instrumentalist",
    Organizer = "Organizer",
    Promoter = "Promoter",
    Vj = "VJ",
    Vocalist = "Vocalist",
    VoiceManipulator = "VoiceManipulator",
    OtherPerformer = "OtherPerformer",
    Other = "Other"
}

export enum ArtistForEventContractRolesEnum {
    Default = "Default",
    Dancer = "Dancer",
    Dj = "DJ",
    Instrumentalist = "Instrumentalist",
    Organizer = "Organizer",
    Promoter = "Promoter",
    Vj = "VJ",
    Vocalist = "Vocalist",
    VoiceManipulator = "VoiceManipulator",
    OtherPerformer = "OtherPerformer",
    Other = "Other"
}


export class ArtistForEventContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist" })
  artist?: ArtistContract;

  @SpeakeasyMetadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: ArtistForEventContractEffectiveRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: ArtistForEventContractRolesEnum;
}
