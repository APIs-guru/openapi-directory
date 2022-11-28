import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualBillingMeterDeactivatePostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    vMeterToDeactivate?: shared.VMeterToDeactivate;
    vMeterToDeactivate1?: shared.VMeterToDeactivate;
    vMeterToDeactivate2?: shared.VMeterToDeactivate;
}
export declare class VirtualBillingMeterDeactivatePostRequest extends SpeakeasyBase {
    request: VirtualBillingMeterDeactivatePostRequests;
}
export declare class VirtualBillingMeterDeactivatePostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
