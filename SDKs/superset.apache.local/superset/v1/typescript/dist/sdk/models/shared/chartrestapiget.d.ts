import { SpeakeasyBase } from "../../../internal/utils";
import { Meta9 } from "./meta9";
import { Meta10 } from "./meta10";
export declare class ChartRestApiGet extends SpeakeasyBase {
    cacheTimeout?: number;
    dashboards?: Meta9;
    description?: string;
    owners?: Meta10;
    params?: string;
    queryContext?: string;
    sliceName?: string;
    vizType?: string;
}
