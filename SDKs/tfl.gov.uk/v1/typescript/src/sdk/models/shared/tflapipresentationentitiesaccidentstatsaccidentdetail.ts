import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesAccidentStatsCasualty } from "./tflapipresentationentitiesaccidentstatscasualty";
import { TflApiPresentationEntitiesAccidentStatsVehicle } from "./tflapipresentationentitiesaccidentstatsvehicle";


export class TflApiPresentationEntitiesAccidentStatsAccidentDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=borough" })
  borough?: string;

  @Metadata({ data: "json, name=casualties", elemType: shared.TflApiPresentationEntitiesAccidentStatsCasualty })
  casualties?: TflApiPresentationEntitiesAccidentStatsCasualty[];

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=vehicles", elemType: shared.TflApiPresentationEntitiesAccidentStatsVehicle })
  vehicles?: TflApiPresentationEntitiesAccidentStatsVehicle[];
}
