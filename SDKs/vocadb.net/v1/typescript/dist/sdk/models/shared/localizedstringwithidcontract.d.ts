import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocalizedStringWithIdContractLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class LocalizedStringWithIdContract extends SpeakeasyBase {
    id?: number;
    language?: LocalizedStringWithIdContractLanguageEnum;
    value?: string;
}
