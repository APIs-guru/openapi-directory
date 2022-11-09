import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanResourceEncryptionProperties } from "./planresourceencryptionproperties";
import { VnetProperties } from "./vnetproperties";


export class PlanResourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAutoSuspendDelayMinutes" })
  defaultAutoSuspendDelayMinutes?: number;

  @Metadata({ data: "json, name=defaultCodespaceSku" })
  defaultCodespaceSku?: string;

  @Metadata({ data: "json, name=defaultEnvironmentSku" })
  defaultEnvironmentSku?: string;

  @Metadata({ data: "json, name=encryption" })
  encryption?: PlanResourceEncryptionProperties;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=vnetProperties" })
  vnetProperties?: VnetProperties;
}
