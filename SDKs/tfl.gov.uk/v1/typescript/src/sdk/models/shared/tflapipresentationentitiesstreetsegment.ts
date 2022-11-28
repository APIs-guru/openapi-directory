import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesStreetSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineString" })
  lineString?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemId" })
  sourceSystemId?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;

  @SpeakeasyMetadata({ data: "json, name=toid" })
  toid?: string;
}
