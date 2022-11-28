import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecretFilterBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
