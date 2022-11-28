import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceEncryptionProperties } from "./planresourceencryptionproperties";
import { VnetProperties } from "./vnetproperties";



export class PlanResourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAutoSuspendDelayMinutes" })
  defaultAutoSuspendDelayMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultCodespaceSku" })
  defaultCodespaceSku?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultEnvironmentSku" })
  defaultEnvironmentSku?: string;

  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption?: PlanResourceEncryptionProperties;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=vnetProperties" })
  vnetProperties?: VnetProperties;
}
