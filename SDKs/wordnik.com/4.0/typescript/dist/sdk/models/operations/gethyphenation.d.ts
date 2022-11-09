import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetHyphenationPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetHyphenationSourceDictionaryEnum {
    Ahd = "ahd",
    Century = "century",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
export declare enum GetHyphenationUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetHyphenationQueryParams extends SpeakeasyBase {
    limit?: number;
    sourceDictionary?: GetHyphenationSourceDictionaryEnum;
    useCanonical?: GetHyphenationUseCanonicalEnum;
}
export declare class GetHyphenationRequest extends SpeakeasyBase {
    pathParams: GetHyphenationPathParams;
    queryParams: GetHyphenationQueryParams;
}
export declare class GetHyphenationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
