import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlanResourceKeyVaultProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyName" })
  keyName?: string;

  @Metadata({ data: "json, name=keyVaultUri" })
  keyVaultUri?: string;

  @Metadata({ data: "json, name=keyVersion" })
  keyVersion?: string;
}
