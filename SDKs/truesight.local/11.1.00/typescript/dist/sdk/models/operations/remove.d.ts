import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RemovePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class RemoveQueryParams extends SpeakeasyBase {
    monitorClass: string;
    monitorSid: string;
}
export declare class RemoveRequest extends SpeakeasyBase {
    pathParams: RemovePathParams;
    queryParams: RemoveQueryParams;
}
export declare class RemoveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
