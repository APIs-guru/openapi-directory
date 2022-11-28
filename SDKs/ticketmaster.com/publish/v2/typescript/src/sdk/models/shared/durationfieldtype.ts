import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DurationFieldType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
