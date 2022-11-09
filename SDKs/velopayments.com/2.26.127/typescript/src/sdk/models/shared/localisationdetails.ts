import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocalisationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=template" })
  template?: string;
}
