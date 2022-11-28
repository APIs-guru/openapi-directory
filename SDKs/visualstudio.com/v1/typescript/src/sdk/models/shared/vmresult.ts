import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmConnectionInfo } from "./vmconnectioninfo";
import { ProvisioningStatusResult } from "./provisioningstatusresult";



export class VmResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: VmConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=provisioningStatus" })
  provisioningStatus?: ProvisioningStatusResult;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
