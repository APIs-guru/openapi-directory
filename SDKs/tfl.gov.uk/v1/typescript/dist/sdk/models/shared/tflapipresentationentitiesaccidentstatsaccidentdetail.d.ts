import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesAccidentStatsCasualty } from "./tflapipresentationentitiesaccidentstatscasualty";
import { TflApiPresentationEntitiesAccidentStatsVehicle } from "./tflapipresentationentitiesaccidentstatsvehicle";
export declare class TflApiPresentationEntitiesAccidentStatsAccidentDetail extends SpeakeasyBase {
    borough?: string;
    casualties?: TflApiPresentationEntitiesAccidentStatsCasualty[];
    date?: Date;
    id?: number;
    lat?: number;
    location?: string;
    lon?: number;
    severity?: string;
    vehicles?: TflApiPresentationEntitiesAccidentStatsVehicle[];
}
