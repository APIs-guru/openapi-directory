import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretFilterBody } from "./secretfilterbody";


export class ScopedCreateSecretBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.SecretFilterBody })
  filters?: SecretFilterBody[];

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: number;

  @Metadata({ data: "json, name=secretName" })
  secretName?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
