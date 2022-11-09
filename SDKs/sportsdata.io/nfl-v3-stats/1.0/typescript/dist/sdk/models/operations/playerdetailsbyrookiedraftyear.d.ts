import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PlayerDetailsByRookieDraftYearPathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class PlayerDetailsByRookieDraftYearRequest extends SpeakeasyBase {
    pathParams: PlayerDetailsByRookieDraftYearPathParams;
}
export declare class PlayerDetailsByRookieDraftYearResponse extends SpeakeasyBase {
    contentType: string;
    players?: any[];
    statusCode: number;
}
