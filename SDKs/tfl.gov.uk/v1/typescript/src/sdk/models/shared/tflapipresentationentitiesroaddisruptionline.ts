import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";


export class TflApiPresentationEntitiesRoadDisruptionLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isDiversion" })
  isDiversion?: boolean;

  @Metadata({ data: "json, name=multiLineString" })
  multiLineString?: SystemDataSpatialDbGeography;

  @Metadata({ data: "json, name=roadDisruptionId" })
  roadDisruptionId?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
