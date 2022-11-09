import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanResourceKeyVaultProperties } from "./planresourcekeyvaultproperties";


export class PlanResourceEncryptionProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=keySource" })
  keySource?: string;

  @Metadata({ data: "json, name=keyVaultProperties" })
  keyVaultProperties?: PlanResourceKeyVaultProperties;
}
