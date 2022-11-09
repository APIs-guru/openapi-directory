import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesLineStatus } from "./tflapipresentationentitieslinestatus";
import { TflApiPresentationEntitiesMatchedRoute } from "./tflapipresentationentitiesmatchedroute";
import { TflApiPresentationEntitiesLineServiceTypeInfo } from "./tflapipresentationentitieslineservicetypeinfo";


export class TflApiPresentationEntitiesLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=crowding" })
  crowding?: TflApiPresentationEntitiesCrowding;

  @Metadata({ data: "json, name=disruptions", elemType: shared.TflApiPresentationEntitiesDisruption })
  disruptions?: TflApiPresentationEntitiesDisruption[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineStatuses", elemType: shared.TflApiPresentationEntitiesLineStatus })
  lineStatuses?: TflApiPresentationEntitiesLineStatus[];

  @Metadata({ data: "json, name=modeName" })
  modeName?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=routeSections", elemType: shared.TflApiPresentationEntitiesMatchedRoute })
  routeSections?: TflApiPresentationEntitiesMatchedRoute[];

  @Metadata({ data: "json, name=serviceTypes", elemType: shared.TflApiPresentationEntitiesLineServiceTypeInfo })
  serviceTypes?: TflApiPresentationEntitiesLineServiceTypeInfo[];
}
