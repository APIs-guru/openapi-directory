import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesLineGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: string[];

  @Metadata({ data: "json, name=naptanIdReference" })
  naptanIdReference?: string;

  @Metadata({ data: "json, name=stationAtcoCode" })
  stationAtcoCode?: string;
}
