import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=iana_name" })
  ianaName?: string;

  @SpeakeasyMetadata({ data: "json, name=iana_port_display" })
  ianaPortDisplay?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
