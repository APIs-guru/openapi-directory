import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualMeterCalculateFormulaGetQueryParams extends SpeakeasyBase {
    formula: string;
}
export declare class VirtualMeterCalculateFormulaGetRequest extends SpeakeasyBase {
    queryParams: VirtualMeterCalculateFormulaGetQueryParams;
}
export declare class VirtualMeterCalculateFormulaGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
