import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEtymologiesPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetEtymologiesUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetEtymologiesQueryParams extends SpeakeasyBase {
    useCanonical?: GetEtymologiesUseCanonicalEnum;
}
export declare class GetEtymologiesRequest extends SpeakeasyBase {
    pathParams: GetEtymologiesPathParams;
    queryParams: GetEtymologiesQueryParams;
}
export declare class GetEtymologiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
