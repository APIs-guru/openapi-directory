import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BoxScoresByDateByCompetitionFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresByDateByCompetitionPathParams extends SpeakeasyBase {
    competition: string;
    date: string;
    format: BoxScoresByDateByCompetitionFormatEnum;
}
export declare class BoxScoresByDateByCompetitionRequest extends SpeakeasyBase {
    pathParams: BoxScoresByDateByCompetitionPathParams;
}
export declare class BoxScoresByDateByCompetitionResponse extends SpeakeasyBase {
    boxScores?: any[];
    contentType: string;
    statusCode: number;
}
