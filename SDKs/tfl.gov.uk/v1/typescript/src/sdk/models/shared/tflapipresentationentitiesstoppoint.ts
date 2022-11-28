import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
import { TflApiPresentationEntitiesPlace } from "./tflapipresentationentitiesplace";
import { TflApiPresentationEntitiesLineGroup } from "./tflapipresentationentitieslinegroup";
import { TflApiPresentationEntitiesLineModeGroup } from "./tflapipresentationentitieslinemodegroup";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";



export class TflApiPresentationEntitiesStopPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibilitySummary" })
  accessibilitySummary?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalProperties", elemType: TflApiPresentationEntitiesAdditionalProperties })
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: TflApiPresentationEntitiesPlace })
  children?: TflApiPresentationEntitiesPlace[];

  @SpeakeasyMetadata({ data: "json, name=childrenUrls" })
  childrenUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=hubNaptanCode" })
  hubNaptanCode?: string;

  @SpeakeasyMetadata({ data: "json, name=icsCode" })
  icsCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=indicator" })
  indicator?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lineGroup", elemType: TflApiPresentationEntitiesLineGroup })
  lineGroup?: TflApiPresentationEntitiesLineGroup[];

  @SpeakeasyMetadata({ data: "json, name=lineModeGroups", elemType: TflApiPresentationEntitiesLineModeGroup })
  lineModeGroups?: TflApiPresentationEntitiesLineModeGroup[];

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: TflApiPresentationEntitiesIdentifier })
  lines?: TflApiPresentationEntitiesIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes?: string[];

  @SpeakeasyMetadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanMode" })
  naptanMode?: string;

  @SpeakeasyMetadata({ data: "json, name=placeType" })
  placeType?: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=smsCode" })
  smsCode?: string;

  @SpeakeasyMetadata({ data: "json, name=stationNaptan" })
  stationNaptan?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stopLetter" })
  stopLetter?: string;

  @SpeakeasyMetadata({ data: "json, name=stopType" })
  stopType?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
