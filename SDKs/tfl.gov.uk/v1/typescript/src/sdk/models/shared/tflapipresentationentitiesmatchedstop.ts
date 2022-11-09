import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";


export class TflApiPresentationEntitiesMatchedStop extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibilitySummary" })
  accessibilitySummary?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=hasDisruption" })
  hasDisruption?: boolean;

  @Metadata({ data: "json, name=icsId" })
  icsId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lines", elemType: shared.TflApiPresentationEntitiesIdentifier })
  lines?: TflApiPresentationEntitiesIdentifier[];

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=modes" })
  modes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=routeId" })
  routeId?: number;

  @Metadata({ data: "json, name=stationId" })
  stationId?: string;

  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=stopLetter" })
  stopLetter?: string;

  @Metadata({ data: "json, name=stopType" })
  stopType?: string;

  @Metadata({ data: "json, name=topMostParentId" })
  topMostParentId?: string;

  @Metadata({ data: "json, name=towards" })
  towards?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
