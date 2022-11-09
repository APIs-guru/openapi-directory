import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRandomWordQueryParams extends SpeakeasyBase {
    excludePartOfSpeech?: string;
    hasDictionaryDef?: string;
    includePartOfSpeech?: string;
    maxCorpusCount?: number;
    maxDictionaryCount?: number;
    maxLength?: number;
    minCorpusCount?: number;
    minDictionaryCount?: number;
    minLength?: number;
}
export declare class GetRandomWordRequest extends SpeakeasyBase {
    queryParams: GetRandomWordQueryParams;
}
export declare class GetRandomWordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
