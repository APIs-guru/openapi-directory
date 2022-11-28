import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesLineStatus } from "./tflapipresentationentitieslinestatus";
import { TflApiPresentationEntitiesMatchedRoute } from "./tflapipresentationentitiesmatchedroute";
import { TflApiPresentationEntitiesLineServiceTypeInfo } from "./tflapipresentationentitieslineservicetypeinfo";



export class TflApiPresentationEntitiesLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=crowding" })
  crowding?: TflApiPresentationEntitiesCrowding;

  @SpeakeasyMetadata({ data: "json, name=disruptions", elemType: TflApiPresentationEntitiesDisruption })
  disruptions?: TflApiPresentationEntitiesDisruption[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineStatuses", elemType: TflApiPresentationEntitiesLineStatus })
  lineStatuses?: TflApiPresentationEntitiesLineStatus[];

  @SpeakeasyMetadata({ data: "json, name=modeName" })
  modeName?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSections", elemType: TflApiPresentationEntitiesMatchedRoute })
  routeSections?: TflApiPresentationEntitiesMatchedRoute[];

  @SpeakeasyMetadata({ data: "json, name=serviceTypes", elemType: TflApiPresentationEntitiesLineServiceTypeInfo })
  serviceTypes?: TflApiPresentationEntitiesLineServiceTypeInfo[];
}
