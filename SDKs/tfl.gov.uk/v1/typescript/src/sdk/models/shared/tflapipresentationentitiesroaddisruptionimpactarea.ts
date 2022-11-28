import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";



export class TflApiPresentationEntitiesRoadDisruptionImpactArea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=polygon" })
  polygon?: SystemDataSpatialDbGeography;

  @SpeakeasyMetadata({ data: "json, name=roadDisruptionId" })
  roadDisruptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
