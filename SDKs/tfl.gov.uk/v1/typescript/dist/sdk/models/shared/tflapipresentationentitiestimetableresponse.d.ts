import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesTimetablesDisambiguation } from "./tflapipresentationentitiestimetablesdisambiguation";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesTimetable } from "./tflapipresentationentitiestimetable";
export declare class TflApiPresentationEntitiesTimetableResponse extends SpeakeasyBase {
    direction?: string;
    disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;
    lineId?: string;
    lineName?: string;
    pdfUrl?: string;
    stations?: TflApiPresentationEntitiesMatchedStop[];
    statusErrorMessage?: string;
    stops?: TflApiPresentationEntitiesMatchedStop[];
    timetable?: TflApiPresentationEntitiesTimetable;
}
