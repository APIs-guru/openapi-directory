import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LyricsForSongContractTranslationTypeEnum {
    Original = "Original",
    Romanized = "Romanized",
    Translation = "Translation"
}
export declare class LyricsForSongContract extends SpeakeasyBase {
    cultureCode?: string;
    id?: number;
    source?: string;
    translationType?: LyricsForSongContractTranslationTypeEnum;
    url?: string;
    value?: string;
}
