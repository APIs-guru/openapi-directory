import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetExamplesPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetExamplesIncludeDuplicatesEnum {
    False = "false",
    True = "true"
}
export declare enum GetExamplesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetExamplesQueryParams extends SpeakeasyBase {
    includeDuplicates?: GetExamplesIncludeDuplicatesEnum;
    limit?: number;
    skip?: number;
    useCanonical?: GetExamplesUseCanonicalEnum;
}
export declare class GetExamplesRequest extends SpeakeasyBase {
    pathParams: GetExamplesPathParams;
    queryParams: GetExamplesQueryParams;
}
export declare class GetExamplesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
