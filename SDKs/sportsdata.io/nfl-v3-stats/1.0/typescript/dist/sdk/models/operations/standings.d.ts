import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StandingsPathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class StandingsRequest extends SpeakeasyBase {
    pathParams: StandingsPathParams;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: any[];
    statusCode: number;
}
