import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameRequestParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}
