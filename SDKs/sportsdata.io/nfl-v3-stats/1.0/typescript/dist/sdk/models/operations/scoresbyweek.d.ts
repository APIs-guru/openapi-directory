import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoresByWeekPathParams extends SpeakeasyBase {
    format: string;
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
