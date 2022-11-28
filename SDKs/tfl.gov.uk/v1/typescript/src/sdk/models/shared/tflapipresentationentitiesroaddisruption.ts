import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemDataSpatialDbGeography } from "./systemdataspatialdbgeography";
import { TflApiPresentationEntitiesRoadDisruptionSchedule } from "./tflapipresentationentitiesroaddisruptionschedule";
import { TflApiPresentationEntitiesRoadDisruptionImpactArea } from "./tflapipresentationentitiesroaddisruptionimpactarea";
import { TflApiPresentationEntitiesRoadDisruptionLine } from "./tflapipresentationentitiesroaddisruptionline";
import { TflApiPresentationEntitiesRoadProject } from "./tflapipresentationentitiesroadproject";
import { TflApiPresentationEntitiesStreet } from "./tflapipresentationentitiesstreet";



export class TflApiPresentationEntitiesRoadDisruption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=corridorIds" })
  corridorIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=currentUpdate" })
  currentUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=currentUpdateDateTime" })
  currentUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=geography" })
  geography?: SystemDataSpatialDbGeography;

  @SpeakeasyMetadata({ data: "json, name=geometry" })
  geometry?: SystemDataSpatialDbGeography;

  @SpeakeasyMetadata({ data: "json, name=hasClosures" })
  hasClosures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isProvisional" })
  isProvisional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=levelOfInterest" })
  levelOfInterest?: string;

  @SpeakeasyMetadata({ data: "json, name=linkText" })
  linkText?: string;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @SpeakeasyMetadata({ data: "json, name=point" })
  point?: string;

  @SpeakeasyMetadata({ data: "json, name=publishEndDate" })
  publishEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=publishStartDate" })
  publishStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=recurringSchedules", elemType: TflApiPresentationEntitiesRoadDisruptionSchedule })
  recurringSchedules?: TflApiPresentationEntitiesRoadDisruptionSchedule[];

  @SpeakeasyMetadata({ data: "json, name=roadDisruptionImpactAreas", elemType: TflApiPresentationEntitiesRoadDisruptionImpactArea })
  roadDisruptionImpactAreas?: TflApiPresentationEntitiesRoadDisruptionImpactArea[];

  @SpeakeasyMetadata({ data: "json, name=roadDisruptionLines", elemType: TflApiPresentationEntitiesRoadDisruptionLine })
  roadDisruptionLines?: TflApiPresentationEntitiesRoadDisruptionLine[];

  @SpeakeasyMetadata({ data: "json, name=roadProject" })
  roadProject?: TflApiPresentationEntitiesRoadProject;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=streets", elemType: TflApiPresentationEntitiesStreet })
  streets?: TflApiPresentationEntitiesStreet[];

  @SpeakeasyMetadata({ data: "json, name=subCategory" })
  subCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=timeFrame" })
  timeFrame?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
