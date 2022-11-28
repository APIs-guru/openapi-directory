import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LocalizedStringContractLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class LocalizedStringContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: LocalizedStringContractLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
