import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistContract } from "./artistcontract";
export declare enum ArtistForEventContractEffectiveRolesEnum {
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
export declare enum ArtistForEventContractRolesEnum {
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
export declare class ArtistForEventContract extends SpeakeasyBase {
    artist?: ArtistContract;
    effectiveRoles?: ArtistForEventContractEffectiveRolesEnum;
    id?: number;
    name?: string;
    roles?: ArtistForEventContractRolesEnum;
}
