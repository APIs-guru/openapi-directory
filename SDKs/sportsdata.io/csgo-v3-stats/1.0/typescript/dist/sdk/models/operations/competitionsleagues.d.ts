import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CompetitionsLeaguesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionsLeaguesPathParams extends SpeakeasyBase {
    format: CompetitionsLeaguesFormatEnum;
}
export declare class CompetitionsLeaguesRequest extends SpeakeasyBase {
    pathParams: CompetitionsLeaguesPathParams;
}
export declare class CompetitionsLeaguesResponse extends SpeakeasyBase {
    competitions?: any[];
    contentType: string;
    statusCode: number;
}
