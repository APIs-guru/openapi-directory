import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LocalizedStringWithIdContractLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class LocalizedStringWithIdContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: LocalizedStringWithIdContractLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
