import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonStatsSplitByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsSplitByTeamPathParams extends SpeakeasyBase {
    format: PlayerSeasonStatsSplitByTeamFormatEnum;
    season: string;
}
export declare class PlayerSeasonStatsSplitByTeamRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonStatsSplitByTeamPathParams;
}
export declare class PlayerSeasonStatsSplitByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
