import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerDetailsByRookieDraftYearFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByRookieDraftYearPathParams extends SpeakeasyBase {
    format: PlayerDetailsByRookieDraftYearFormatEnum;
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
