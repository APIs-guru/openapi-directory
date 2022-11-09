import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ReverseDictionaryExcludeSourceDictionariesEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
export declare enum ReverseDictionaryIncludeSourceDictionariesEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
export declare enum ReverseDictionaryIncludeTagsEnum {
    False = "false",
    True = "true"
}
export declare enum ReverseDictionarySortByEnum {
    Alpha = "alpha",
    Count = "count"
}
export declare enum ReverseDictionarySortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ReverseDictionaryQueryParams extends SpeakeasyBase {
    excludePartOfSpeech?: string;
    excludeSourceDictionaries?: ReverseDictionaryExcludeSourceDictionariesEnum;
    expandTerms?: string;
    findSenseForWord?: string;
    includePartOfSpeech?: string;
    includeSourceDictionaries?: ReverseDictionaryIncludeSourceDictionariesEnum;
    includeTags?: ReverseDictionaryIncludeTagsEnum;
    limit?: number;
    maxCorpusCount?: number;
    maxLength?: number;
    minCorpusCount?: number;
    minLength?: number;
    query: string;
    skip?: string;
    sortBy?: ReverseDictionarySortByEnum;
    sortOrder?: ReverseDictionarySortOrderEnum;
}
export declare class ReverseDictionaryRequest extends SpeakeasyBase {
    queryParams: ReverseDictionaryQueryParams;
}
export declare class ReverseDictionaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
