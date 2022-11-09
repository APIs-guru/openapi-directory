import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTopExamplePathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetTopExampleUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetTopExampleQueryParams extends SpeakeasyBase {
    useCanonical?: GetTopExampleUseCanonicalEnum;
}
export declare class GetTopExampleRequest extends SpeakeasyBase {
    pathParams: GetTopExamplePathParams;
    queryParams: GetTopExampleQueryParams;
}
export declare class GetTopExampleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
