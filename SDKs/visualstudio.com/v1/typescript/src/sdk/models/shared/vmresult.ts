import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmConnectionInfo } from "./vmconnectioninfo";
import { ProvisioningStatusResult } from "./provisioningstatusresult";


export class VmResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: VmConnectionInfo;

  @Metadata({ data: "json, name=provisioningStatus" })
  provisioningStatus?: ProvisioningStatusResult;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
