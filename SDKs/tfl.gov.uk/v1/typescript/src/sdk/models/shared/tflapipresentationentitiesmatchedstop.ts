import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";



export class TflApiPresentationEntitiesMatchedStop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibilitySummary" })
  accessibilitySummary?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=hasDisruption" })
  hasDisruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icsId" })
  icsId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: TflApiPresentationEntitiesIdentifier })
  lines?: TflApiPresentationEntitiesIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=routeId" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=stationId" })
  stationId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stopLetter" })
  stopLetter?: string;

  @SpeakeasyMetadata({ data: "json, name=stopType" })
  stopType?: string;

  @SpeakeasyMetadata({ data: "json, name=topMostParentId" })
  topMostParentId?: string;

  @SpeakeasyMetadata({ data: "json, name=towards" })
  towards?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
