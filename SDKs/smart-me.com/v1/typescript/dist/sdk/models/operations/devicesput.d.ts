import { SpeakeasyBase } from "../../../internal/utils";
export declare class DevicesPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DevicesPutQueryParams extends SpeakeasyBase {
    switchNumber?: number;
    switchState: boolean;
}
export declare class DevicesPutRequest extends SpeakeasyBase {
    pathParams: DevicesPutPathParams;
    queryParams: DevicesPutQueryParams;
}
export declare class DevicesPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
