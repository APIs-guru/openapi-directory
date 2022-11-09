import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesValidityPeriod } from "./tflapipresentationentitiesvalidityperiod";


export class TflApiPresentationEntitiesLineStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=disruption" })
  disruption?: TflApiPresentationEntitiesDisruption;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: Date;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=statusSeverity" })
  statusSeverity?: number;

  @Metadata({ data: "json, name=statusSeverityDescription" })
  statusSeverityDescription?: string;

  @Metadata({ data: "json, name=validityPeriods", elemType: shared.TflApiPresentationEntitiesValidityPeriod })
  validityPeriods?: TflApiPresentationEntitiesValidityPeriod[];
}
