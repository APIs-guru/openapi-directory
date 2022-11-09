import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetWordFrequencyPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetWordFrequencyUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetWordFrequencyQueryParams extends SpeakeasyBase {
    endYear?: number;
    startYear?: number;
    useCanonical?: GetWordFrequencyUseCanonicalEnum;
}
export declare class GetWordFrequencyRequest extends SpeakeasyBase {
    pathParams: GetWordFrequencyPathParams;
    queryParams: GetWordFrequencyQueryParams;
}
export declare class GetWordFrequencyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
