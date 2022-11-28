import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesRoadCorridor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bounds" })
  bounds?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=statusAggregationEndDate" })
  statusAggregationEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusAggregationStartDate" })
  statusAggregationStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusSeverity" })
  statusSeverity?: string;

  @SpeakeasyMetadata({ data: "json, name=statusSeverityDescription" })
  statusSeverityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
