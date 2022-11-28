import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistForArtistForApiContract } from "./artistforartistforapicontract";
import { ArtistContract } from "./artistcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ArtistRelationsForApi } from "./artistrelationsforapi";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";


export enum ArtistForApiContractArtistTypeEnum {
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

export enum ArtistForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum ArtistForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class ArtistForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=artistLinks", elemType: ArtistForArtistForApiContract })
  artistLinks?: ArtistForArtistForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=artistLinksReverse", elemType: ArtistForArtistForApiContract })
  artistLinksReverse?: ArtistForArtistForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=artistType" })
  artistType?: ArtistForApiContractArtistTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=baseVoicebank" })
  baseVoicebank?: ArtistContract;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: ArtistForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringContract })
  names?: LocalizedStringContract[];

  @SpeakeasyMetadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @SpeakeasyMetadata({ data: "json, name=relations" })
  relations?: ArtistRelationsForApi;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ArtistForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
