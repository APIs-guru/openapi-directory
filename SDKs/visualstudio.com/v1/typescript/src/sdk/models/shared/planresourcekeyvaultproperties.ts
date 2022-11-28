import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlanResourceKeyVaultProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=keyVaultUri" })
  keyVaultUri?: string;

  @SpeakeasyMetadata({ data: "json, name=keyVersion" })
  keyVersion?: string;
}
