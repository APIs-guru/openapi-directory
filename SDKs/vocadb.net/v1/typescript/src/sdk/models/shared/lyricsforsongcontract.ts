import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LyricsForSongContractTranslationTypeEnum {
    Original = "Original",
    Romanized = "Romanized",
    Translation = "Translation"
}


export class LyricsForSongContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cultureCode" })
  cultureCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=translationType" })
  translationType?: LyricsForSongContractTranslationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
