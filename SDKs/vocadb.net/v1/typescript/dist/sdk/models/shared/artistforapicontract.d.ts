import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistForArtistForApiContract } from "./artistforartistforapicontract";
import { ArtistContract } from "./artistcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ArtistRelationsForApi } from "./artistrelationsforapi";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export declare enum ArtistForApiContractArtistTypeEnum {
    Unknown = "Unknown",
    Circle = "Circle",
    Label = "Label",
    Producer = "Producer",
    Animator = "Animator",
    Illustrator = "Illustrator",
    Lyricist = "Lyricist",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    CeVio = "CeVIO",
    OtherVoiceSynthesizer = "OtherVoiceSynthesizer",
    OtherVocalist = "OtherVocalist",
    OtherGroup = "OtherGroup",
    OtherIndividual = "OtherIndividual",
    Utaite = "Utaite",
    Band = "Band",
    Vocalist = "Vocalist",
    Character = "Character",
    SynthesizerV = "SynthesizerV"
}
export declare enum ArtistForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ArtistForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class ArtistForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    artistLinks?: ArtistForArtistForApiContract[];
    artistLinksReverse?: ArtistForArtistForApiContract[];
    artistType?: ArtistForApiContractArtistTypeEnum;
    baseVoicebank?: ArtistContract;
    createDate?: Date;
    defaultName?: string;
    defaultNameLanguage?: ArtistForApiContractDefaultNameLanguageEnum;
    deleted?: boolean;
    description?: string;
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    mergedTo?: number;
    name?: string;
    names?: LocalizedStringContract[];
    pictureMime?: string;
    relations?: ArtistRelationsForApi;
    releaseDate?: Date;
    status?: ArtistForApiContractStatusEnum;
    tags?: TagUsageForApiContract[];
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
