import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
import { TflApiPresentationEntitiesRoadDisruptionSchedule } from "./tflapipresentationentitiesroaddisruptionschedule";
import { TflApiPresentationEntitiesRoadDisruptionImpactArea } from "./tflapipresentationentitiesroaddisruptionimpactarea";
import { TflApiPresentationEntitiesRoadDisruptionLine } from "./tflapipresentationentitiesroaddisruptionline";
import { TflApiPresentationEntitiesRoadProject } from "./tflapipresentationentitiesroadproject";
import { TflApiPresentationEntitiesStreet } from "./tflapipresentationentitiesstreet";


export class TflApiPresentationEntitiesRoadDisruption extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=corridorIds" })
  corridorIds?: string[];

  @Metadata({ data: "json, name=currentUpdate" })
  currentUpdate?: string;

  @Metadata({ data: "json, name=currentUpdateDateTime" })
  currentUpdateDateTime?: Date;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=geography" })
  geography?: SystemDataSpatialDbGeography;

  @Metadata({ data: "json, name=geometry" })
  geometry?: SystemDataSpatialDbGeography;

  @Metadata({ data: "json, name=hasClosures" })
  hasClosures?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isProvisional" })
  isProvisional?: boolean;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=levelOfInterest" })
  levelOfInterest?: string;

  @Metadata({ data: "json, name=linkText" })
  linkText?: string;

  @Metadata({ data: "json, name=linkUrl" })
  linkUrl?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=point" })
  point?: string;

  @Metadata({ data: "json, name=publishEndDate" })
  publishEndDate?: Date;

  @Metadata({ data: "json, name=publishStartDate" })
  publishStartDate?: Date;

  @Metadata({ data: "json, name=recurringSchedules", elemType: shared.TflApiPresentationEntitiesRoadDisruptionSchedule })
  recurringSchedules?: TflApiPresentationEntitiesRoadDisruptionSchedule[];

  @Metadata({ data: "json, name=roadDisruptionImpactAreas", elemType: shared.TflApiPresentationEntitiesRoadDisruptionImpactArea })
  roadDisruptionImpactAreas?: TflApiPresentationEntitiesRoadDisruptionImpactArea[];

  @Metadata({ data: "json, name=roadDisruptionLines", elemType: shared.TflApiPresentationEntitiesRoadDisruptionLine })
  roadDisruptionLines?: TflApiPresentationEntitiesRoadDisruptionLine[];

  @Metadata({ data: "json, name=roadProject" })
  roadProject?: TflApiPresentationEntitiesRoadProject;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=streets", elemType: shared.TflApiPresentationEntitiesStreet })
  streets?: TflApiPresentationEntitiesStreet[];

  @Metadata({ data: "json, name=subCategory" })
  subCategory?: string;

  @Metadata({ data: "json, name=timeFrame" })
  timeFrame?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
