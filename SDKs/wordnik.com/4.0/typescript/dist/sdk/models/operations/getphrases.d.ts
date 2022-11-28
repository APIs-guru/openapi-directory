import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPhrasesPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetPhrasesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetPhrasesQueryParams extends SpeakeasyBase {
    limit?: number;
    useCanonical?: GetPhrasesUseCanonicalEnum;
    wlmi?: number;
}
export declare class GetPhrasesRequest extends SpeakeasyBase {
    pathParams: GetPhrasesPathParams;
    queryParams: GetPhrasesQueryParams;
}
export declare class GetPhrasesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
