import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretFilterBody } from "./secretfilterbody";



export class ScopedUpdateSecretBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: SecretFilterBody })
  filters?: SecretFilterBody[];

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: number;

  @SpeakeasyMetadata({ data: "json, name=secretName" })
  secretName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
