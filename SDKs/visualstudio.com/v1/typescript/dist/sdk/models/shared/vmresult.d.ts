import { SpeakeasyBase } from "../../../internal/utils";
import { VmConnectionInfo } from "./vmconnectioninfo";
import { ProvisioningStatusResult } from "./provisioningstatusresult";
export declare class VmResult extends SpeakeasyBase {
    connection?: VmConnectionInfo;
    provisioningStatus?: ProvisioningStatusResult;
    status?: number;
}
