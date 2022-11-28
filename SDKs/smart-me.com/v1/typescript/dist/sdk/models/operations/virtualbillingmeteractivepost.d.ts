import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualBillingMeterActivePostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    vMeterToActivate?: shared.VMeterToActivate;
    vMeterToActivate1?: shared.VMeterToActivate;
    vMeterToActivate2?: shared.VMeterToActivate;
}
export declare class VirtualBillingMeterActivePostRequest extends SpeakeasyBase {
    request: VirtualBillingMeterActivePostRequests;
}
export declare class VirtualBillingMeterActivePostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
