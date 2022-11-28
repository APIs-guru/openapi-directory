import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesSearchMatch } from "./tflapipresentationentitiessearchmatch";
export declare class TflApiPresentationEntitiesSearchResponse extends SpeakeasyBase {
    from?: number;
    matches?: TflApiPresentationEntitiesSearchMatch[];
    maxScore?: number;
    page?: number;
    pageSize?: number;
    provider?: string;
    query?: string;
    total?: number;
}
