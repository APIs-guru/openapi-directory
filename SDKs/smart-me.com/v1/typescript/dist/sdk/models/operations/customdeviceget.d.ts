import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDeviceGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customDeviceToPosts?: shared.CustomDeviceToPost[];
    statusCode: number;
}
