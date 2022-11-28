import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoresBySeasonPathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class ScoresBySeasonRequest extends SpeakeasyBase {
    pathParams: ScoresBySeasonPathParams;
}
export declare class ScoresBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    scores?: any[];
    statusCode: number;
}
