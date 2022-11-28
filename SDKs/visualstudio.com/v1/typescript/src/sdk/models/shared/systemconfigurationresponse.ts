import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystemConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
