import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocalizedStringWithIdContractLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class LocalizedStringWithIdContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=language" })
  language?: LocalizedStringWithIdContractLanguageEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
