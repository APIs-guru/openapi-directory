import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchWordsPathParams extends SpeakeasyBase {
    query: string;
}
export declare class SearchWordsQueryParams extends SpeakeasyBase {
    allowRegex?: string;
    caseSensitive?: string;
    excludePartOfSpeech?: string;
    includePartOfSpeech?: string;
    limit?: number;
    maxCorpusCount?: number;
    maxDictionaryCount?: number;
    maxLength?: number;
    minCorpusCount?: number;
    minDictionaryCount?: number;
    minLength?: number;
    skip?: number;
}
export declare class SearchWordsRequest extends SpeakeasyBase {
    pathParams: SearchWordsPathParams;
    queryParams: SearchWordsQueryParams;
}
export declare class SearchWordsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
