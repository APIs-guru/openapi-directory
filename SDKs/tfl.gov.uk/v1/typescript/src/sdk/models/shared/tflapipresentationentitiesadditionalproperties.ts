import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesAdditionalProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: Date;

  @Metadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
