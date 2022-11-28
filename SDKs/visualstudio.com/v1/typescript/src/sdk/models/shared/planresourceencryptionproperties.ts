import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanResourceKeyVaultProperties } from "./planresourcekeyvaultproperties";



export class PlanResourceEncryptionProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keySource" })
  keySource?: string;

  @SpeakeasyMetadata({ data: "json, name=keyVaultProperties" })
  keyVaultProperties?: PlanResourceKeyVaultProperties;
}
