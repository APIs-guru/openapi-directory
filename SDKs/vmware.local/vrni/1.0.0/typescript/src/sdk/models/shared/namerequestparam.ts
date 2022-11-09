import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NameRequestParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;
}
