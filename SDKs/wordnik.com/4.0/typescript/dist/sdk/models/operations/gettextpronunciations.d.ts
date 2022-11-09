import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTextPronunciationsPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetTextPronunciationsSourceDictionaryEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}
export declare enum GetTextPronunciationsTypeFormatEnum {
    Ahd = "ahd",
    Arpabet = "arpabet",
    GcideDiacritical = "gcide-diacritical",
    Ipa = "IPA"
}
export declare enum GetTextPronunciationsUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetTextPronunciationsQueryParams extends SpeakeasyBase {
    limit?: number;
    sourceDictionary?: GetTextPronunciationsSourceDictionaryEnum;
    typeFormat?: GetTextPronunciationsTypeFormatEnum;
    useCanonical?: GetTextPronunciationsUseCanonicalEnum;
}
export declare class GetTextPronunciationsRequest extends SpeakeasyBase {
    pathParams: GetTextPronunciationsPathParams;
    queryParams: GetTextPronunciationsQueryParams;
}
export declare class GetTextPronunciationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
