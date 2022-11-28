import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesLineGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: string[];

  @SpeakeasyMetadata({ data: "json, name=naptanIdReference" })
  naptanIdReference?: string;

  @SpeakeasyMetadata({ data: "json, name=stationAtcoCode" })
  stationAtcoCode?: string;
}
