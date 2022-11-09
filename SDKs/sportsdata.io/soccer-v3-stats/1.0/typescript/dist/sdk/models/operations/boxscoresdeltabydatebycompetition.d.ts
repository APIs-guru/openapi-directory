import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoresDeltaByDateByCompetitionFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresDeltaByDateByCompetitionPathParams extends SpeakeasyBase {
    competition: string;
    date: string;
    format: BoxScoresDeltaByDateByCompetitionFormatEnum;
    minutes: string;
}
export declare class BoxScoresDeltaByDateByCompetitionRequest extends SpeakeasyBase {
    pathParams: BoxScoresDeltaByDateByCompetitionPathParams;
}
export declare class BoxScoresDeltaByDateByCompetitionResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
