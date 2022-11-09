import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocalizedStringContractLanguageEnum {
    Unspecified = "Unspecified"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class LocalizedStringContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: LocalizedStringContractLanguageEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
