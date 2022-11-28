import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesPathAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
