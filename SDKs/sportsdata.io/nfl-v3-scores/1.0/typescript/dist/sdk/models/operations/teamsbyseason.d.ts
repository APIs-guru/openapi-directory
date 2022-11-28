import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TeamsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamsBySeasonPathParams extends SpeakeasyBase {
    format: TeamsBySeasonFormatEnum;
    season: string;
}
export declare class TeamsBySeasonRequest extends SpeakeasyBase {
    pathParams: TeamsBySeasonPathParams;
}
export declare class TeamsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
