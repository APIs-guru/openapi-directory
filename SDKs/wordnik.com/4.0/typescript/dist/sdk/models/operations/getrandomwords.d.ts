import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRandomWordsSortByEnum {
    Alpha = "alpha",
    Count = "count"
}
export declare enum GetRandomWordsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetRandomWordsQueryParams extends SpeakeasyBase {
    excludePartOfSpeech?: string;
    hasDictionaryDef?: string;
    includePartOfSpeech?: string;
    limit?: number;
    maxCorpusCount?: number;
    maxDictionaryCount?: number;
    maxLength?: number;
    minCorpusCount?: number;
    minDictionaryCount?: number;
    minLength?: number;
    sortBy?: GetRandomWordsSortByEnum;
    sortOrder?: GetRandomWordsSortOrderEnum;
}
export declare class GetRandomWordsRequest extends SpeakeasyBase {
    queryParams: GetRandomWordsQueryParams;
}
export declare class GetRandomWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
