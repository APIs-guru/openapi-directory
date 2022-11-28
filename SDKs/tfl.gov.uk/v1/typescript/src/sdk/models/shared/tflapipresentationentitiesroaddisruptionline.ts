import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";



export class TflApiPresentationEntitiesRoadDisruptionLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isDiversion" })
  isDiversion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multiLineString" })
  multiLineString?: SystemDataSpatialDbGeography;

  @SpeakeasyMetadata({ data: "json, name=roadDisruptionId" })
  roadDisruptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
