import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAgentDevicesPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetAgentDevicesRequest extends SpeakeasyBase {
    pathParams: GetAgentDevicesPathParams;
}
export declare class GetAgentDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
