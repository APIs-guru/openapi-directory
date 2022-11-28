import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DevicesGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    devices?: shared.Device[];
    statusCode: number;
}
