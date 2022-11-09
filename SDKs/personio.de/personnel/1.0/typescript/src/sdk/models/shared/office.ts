import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Office extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: Map<string, any>;
}
