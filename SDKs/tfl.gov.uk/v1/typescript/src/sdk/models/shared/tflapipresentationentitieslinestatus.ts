import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesValidityPeriod } from "./tflapipresentationentitiesvalidityperiod";



export class TflApiPresentationEntitiesLineStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=disruption" })
  disruption?: TflApiPresentationEntitiesDisruption;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=statusSeverity" })
  statusSeverity?: number;

  @SpeakeasyMetadata({ data: "json, name=statusSeverityDescription" })
  statusSeverityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=validityPeriods", elemType: TflApiPresentationEntitiesValidityPeriod })
  validityPeriods?: TflApiPresentationEntitiesValidityPeriod[];
}
