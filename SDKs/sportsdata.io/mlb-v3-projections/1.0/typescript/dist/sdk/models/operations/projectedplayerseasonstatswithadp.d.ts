import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ProjectedPlayerSeasonStatsWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsWithAdpPathParams extends SpeakeasyBase {
    format: ProjectedPlayerSeasonStatsWithAdpFormatEnum;
    season: string;
}
export declare class ProjectedPlayerSeasonStatsWithAdpRequest extends SpeakeasyBase {
    pathParams: ProjectedPlayerSeasonStatsWithAdpPathParams;
}
export declare class ProjectedPlayerSeasonStatsWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: any[];
    statusCode: number;
}
