import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesRoadCorridor extends SpeakeasyBase {
  @Metadata({ data: "json, name=bounds" })
  bounds?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=envelope" })
  envelope?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=statusAggregationEndDate" })
  statusAggregationEndDate?: Date;

  @Metadata({ data: "json, name=statusAggregationStartDate" })
  statusAggregationStartDate?: Date;

  @Metadata({ data: "json, name=statusSeverity" })
  statusSeverity?: string;

  @Metadata({ data: "json, name=statusSeverityDescription" })
  statusSeverityDescription?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
