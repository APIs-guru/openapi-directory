import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualBillingMetersGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    devices?: shared.Device[];
    statusCode: number;
}
