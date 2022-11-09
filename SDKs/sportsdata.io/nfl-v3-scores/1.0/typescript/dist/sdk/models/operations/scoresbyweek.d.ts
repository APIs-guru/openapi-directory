import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScoresByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScoresByWeekPathParams extends SpeakeasyBase {
    format: ScoresByWeekFormatEnum;
    season: string;
    week: string;
}
export declare class ScoresByWeekRequest extends SpeakeasyBase {
    pathParams: ScoresByWeekPathParams;
}
export declare class ScoresByWeekResponse extends SpeakeasyBase {
    contentType: string;
    scores?: any[];
    statusCode: number;
}
