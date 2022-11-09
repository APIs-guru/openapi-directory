import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;
}
