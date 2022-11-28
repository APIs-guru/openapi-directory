import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAudioPathParams extends SpeakeasyBase {
    word: string;
}
export declare enum GetAudioUseCanonicalEnum {
    False = "false",
    True = "true"
}
export declare class GetAudioQueryParams extends SpeakeasyBase {
    limit?: number;
    useCanonical?: GetAudioUseCanonicalEnum;
}
export declare class GetAudioRequest extends SpeakeasyBase {
    pathParams: GetAudioPathParams;
    queryParams: GetAudioQueryParams;
}
export declare class GetAudioResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
