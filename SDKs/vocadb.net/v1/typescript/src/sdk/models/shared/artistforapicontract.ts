import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtistForArtistForApiContract } from "./artistforartistforapicontract";
import { ArtistForArtistForApiContract } from "./artistforartistforapicontract";
import { ArtistContract } from "./artistcontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringContract } from "./localizedstringcontract";
import { ArtistRelationsForApi } from "./artistrelationsforapi";
import { TagUsageForApiContract } from "./tagusageforapicontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum ArtistForApiContractArtistTypeEnum {
    Unknown = "Unknown"
,    Circle = "Circle"
,    Label = "Label"
,    Producer = "Producer"
,    Animator = "Animator"
,    Illustrator = "Illustrator"
,    Lyricist = "Lyricist"
,    Vocaloid = "Vocaloid"
,    Utau = "UTAU"
,    CeVio = "CeVIO"
,    OtherVoiceSynthesizer = "OtherVoiceSynthesizer"
,    OtherVocalist = "OtherVocalist"
,    OtherGroup = "OtherGroup"
,    OtherIndividual = "OtherIndividual"
,    Utaite = "Utaite"
,    Band = "Band"
,    Vocalist = "Vocalist"
,    Character = "Character"
,    SynthesizerV = "SynthesizerV"
}

export enum ArtistForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum ArtistForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class ArtistForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=artistLinks", elemType: shared.ArtistForArtistForApiContract })
  artistLinks?: ArtistForArtistForApiContract[];

  @Metadata({ data: "json, name=artistLinksReverse", elemType: shared.ArtistForArtistForApiContract })
  artistLinksReverse?: ArtistForArtistForApiContract[];

  @Metadata({ data: "json, name=artistType" })
  artistType?: ArtistForApiContractArtistTypeEnum;

  @Metadata({ data: "json, name=baseVoicebank" })
  baseVoicebank?: ArtistContract;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=defaultName" })
  defaultName?: string;

  @Metadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: ArtistForApiContractDefaultNameLanguageEnum;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=mergedTo" })
  mergedTo?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringContract })
  names?: LocalizedStringContract[];

  @Metadata({ data: "json, name=pictureMime" })
  pictureMime?: string;

  @Metadata({ data: "json, name=relations" })
  relations?: ArtistRelationsForApi;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ArtistForApiContractStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.TagUsageForApiContract })
  tags?: TagUsageForApiContract[];

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
