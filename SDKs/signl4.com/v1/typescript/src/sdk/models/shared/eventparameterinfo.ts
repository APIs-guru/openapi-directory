import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventParameterInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
