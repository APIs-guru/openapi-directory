import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LyricsForSongContractTranslationTypeEnum {
    Original = "Original"
,    Romanized = "Romanized"
,    Translation = "Translation"
}


export class LyricsForSongContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=cultureCode" })
  cultureCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=translationType" })
  translationType?: LyricsForSongContractTranslationTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
