import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesStreetSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineString" })
  lineString?: string;

  @Metadata({ data: "json, name=sourceSystemId" })
  sourceSystemId?: number;

  @Metadata({ data: "json, name=sourceSystemKey" })
  sourceSystemKey?: string;

  @Metadata({ data: "json, name=toid" })
  toid?: string;
}
