import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagBaseContract } from "./tagbasecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringWithIdContract } from "./localizedstringwithidcontract";
import { TagBaseContract } from "./tagbasecontract";
import { TagBaseContract } from "./tagbasecontract";
import { EnglishTranslatedStringContract } from "./englishtranslatedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";

export enum TagForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum TagForApiContractStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class TagForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalNames" })
  additionalNames?: string;

  @Metadata({ data: "json, name=aliasedTo" })
  aliasedTo?: TagBaseContract;

  @Metadata({ data: "json, name=categoryName" })
  categoryName?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=defaultNameLanguage" })
  defaultNameLanguage?: TagForApiContractDefaultNameLanguageEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mainPicture" })
  mainPicture?: EntryThumbForApiContract;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=names", elemType: shared.LocalizedStringWithIdContract })
  names?: LocalizedStringWithIdContract[];

  @Metadata({ data: "json, name=parent" })
  parent?: TagBaseContract;

  @Metadata({ data: "json, name=relatedTags", elemType: shared.TagBaseContract })
  relatedTags?: TagBaseContract[];

  @Metadata({ data: "json, name=status" })
  status?: TagForApiContractStatusEnum;

  @Metadata({ data: "json, name=targets" })
  targets?: number;

  @Metadata({ data: "json, name=translatedDescription" })
  translatedDescription?: EnglishTranslatedStringContract;

  @Metadata({ data: "json, name=urlSlug" })
  urlSlug?: string;

  @Metadata({ data: "json, name=usageCount" })
  usageCount?: number;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=webLinks", elemType: shared.WebLinkForApiContract })
  webLinks?: WebLinkForApiContract[];
}
