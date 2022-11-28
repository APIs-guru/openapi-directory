import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamHittingVsStartingPitcherFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamHittingVsStartingPitcherPathParams extends SpeakeasyBase {
    format: TeamHittingVsStartingPitcherFormatEnum;
    gameid: string;
    team: string;
}
export declare class TeamHittingVsStartingPitcherRequest extends SpeakeasyBase {
    pathParams: TeamHittingVsStartingPitcherPathParams;
}
export declare class TeamHittingVsStartingPitcherResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
