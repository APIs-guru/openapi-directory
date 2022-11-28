import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocalizedStringContractLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class LocalizedStringContract extends SpeakeasyBase {
    language?: LocalizedStringContractLanguageEnum;
    value?: string;
}
