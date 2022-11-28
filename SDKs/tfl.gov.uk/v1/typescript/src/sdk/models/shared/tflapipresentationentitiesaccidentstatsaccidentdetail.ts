import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAccidentStatsCasualty } from "./tflapipresentationentitiesaccidentstatscasualty";
import { TflApiPresentationEntitiesAccidentStatsVehicle } from "./tflapipresentationentitiesaccidentstatsvehicle";



export class TflApiPresentationEntitiesAccidentStatsAccidentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=borough" })
  borough?: string;

  @SpeakeasyMetadata({ data: "json, name=casualties", elemType: TflApiPresentationEntitiesAccidentStatsCasualty })
  casualties?: TflApiPresentationEntitiesAccidentStatsCasualty[];

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicles", elemType: TflApiPresentationEntitiesAccidentStatsVehicle })
  vehicles?: TflApiPresentationEntitiesAccidentStatsVehicle[];
}
