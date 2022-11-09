import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretFilterBody } from "./secretfilterbody";


export class ScopedUpdateSecretBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SecretFilterBody })
  filters?: SecretFilterBody[];

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: number;

  @Metadata({ data: "json, name=secretName" })
  secretName?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
