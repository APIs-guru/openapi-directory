import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceAgentPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetDeviceAgentRequest extends SpeakeasyBase {
    pathParams: GetDeviceAgentPathParams;
}
export declare class GetDeviceAgentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
