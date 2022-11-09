import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReinitializePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class ReinitializeRequest extends SpeakeasyBase {
    pathParams: ReinitializePathParams;
    request: shared.ReinitializeActionConfiguration;
}
export declare class ReinitializeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
