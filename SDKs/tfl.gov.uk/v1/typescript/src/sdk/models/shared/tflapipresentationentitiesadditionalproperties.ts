import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesAdditionalProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
