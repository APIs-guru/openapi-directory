import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesAdditionalProperties } from "./tflapipresentationentitiesadditionalproperties";
import { TflApiPresentationEntitiesPlace } from "./tflapipresentationentitiesplace";
import { TflApiPresentationEntitiesLineGroup } from "./tflapipresentationentitieslinegroup";
import { TflApiPresentationEntitiesLineModeGroup } from "./tflapipresentationentitieslinemodegroup";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";


export class TflApiPresentationEntitiesStopPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibilitySummary" })
  accessibilitySummary?: string;

  @Metadata({ data: "json, name=additionalProperties", elemType: shared.TflApiPresentationEntitiesAdditionalProperties })
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[];

  @Metadata({ data: "json, name=children", elemType: shared.TflApiPresentationEntitiesPlace })
  children?: TflApiPresentationEntitiesPlace[];

  @Metadata({ data: "json, name=childrenUrls" })
  childrenUrls?: string[];

  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=hubNaptanCode" })
  hubNaptanCode?: string;

  @Metadata({ data: "json, name=icsCode" })
  icsCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=indicator" })
  indicator?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lineGroup", elemType: shared.TflApiPresentationEntitiesLineGroup })
  lineGroup?: TflApiPresentationEntitiesLineGroup[];

  @Metadata({ data: "json, name=lineModeGroups", elemType: shared.TflApiPresentationEntitiesLineModeGroup })
  lineModeGroups?: TflApiPresentationEntitiesLineModeGroup[];

  @Metadata({ data: "json, name=lines", elemType: shared.TflApiPresentationEntitiesIdentifier })
  lines?: TflApiPresentationEntitiesIdentifier[];

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=modes" })
  modes?: string[];

  @Metadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @Metadata({ data: "json, name=naptanMode" })
  naptanMode?: string;

  @Metadata({ data: "json, name=placeType" })
  placeType?: string;

  @Metadata({ data: "json, name=platformName" })
  platformName?: string;

  @Metadata({ data: "json, name=smsCode" })
  smsCode?: string;

  @Metadata({ data: "json, name=stationNaptan" })
  stationNaptan?: string;

  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=stopLetter" })
  stopLetter?: string;

  @Metadata({ data: "json, name=stopType" })
  stopType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
