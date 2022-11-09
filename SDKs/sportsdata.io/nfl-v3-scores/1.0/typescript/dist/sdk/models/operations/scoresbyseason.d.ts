import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ScoresBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScoresBySeasonPathParams extends SpeakeasyBase {
    format: ScoresBySeasonFormatEnum;
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
