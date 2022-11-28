import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagBaseContract } from "./tagbasecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringWithIdContract } from "./localizedstringwithidcontract";
import { EnglishTranslatedStringContract } from "./englishtranslatedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";


export enum TagForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum TagForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class TagForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @SpeakeasyMetadata({ data: "json, name=aliasedTo" })
  aliasedTo?: TagBaseContract;

  @SpeakeasyMetadata({ data: "json, name=categoryName" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: TagForApiContractDefaultNameLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=names", elemType: LocalizedStringWithIdContract })
  names?: LocalizedStringWithIdContract[];

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: TagBaseContract;

  @SpeakeasyMetadata({ data: "json, name=relatedTags", elemType: TagBaseContract })
  relatedTags?: TagBaseContract[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TagForApiContractStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: number;

  @SpeakeasyMetadata({ data: "json, name=translatedDescription" })
  translatedDescription?: EnglishTranslatedStringContract;

  @SpeakeasyMetadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=usageCount" })
  usageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
