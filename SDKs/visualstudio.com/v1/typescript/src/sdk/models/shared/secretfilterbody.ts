import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecretFilterBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
