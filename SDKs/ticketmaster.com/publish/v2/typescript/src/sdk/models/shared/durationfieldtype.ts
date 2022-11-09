import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DurationFieldType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
