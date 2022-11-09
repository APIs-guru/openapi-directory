import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RediscoverPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class RediscoverRequest extends SpeakeasyBase {
    pathParams: RediscoverPathParams;
}
export declare class RediscoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
