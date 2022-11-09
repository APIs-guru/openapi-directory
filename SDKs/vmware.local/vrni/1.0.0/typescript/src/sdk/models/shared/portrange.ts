import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=iana_name" })
  ianaName?: string;

  @Metadata({ data: "json, name=iana_port_display" })
  ianaPortDisplay?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
