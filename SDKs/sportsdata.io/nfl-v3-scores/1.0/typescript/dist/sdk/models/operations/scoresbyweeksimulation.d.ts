import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScoresByWeekSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScoresByWeekSimulationPathParams extends SpeakeasyBase {
    format: ScoresByWeekSimulationFormatEnum;
    numberofplays: string;
}
export declare class ScoresByWeekSimulationRequest extends SpeakeasyBase {
    pathParams: ScoresByWeekSimulationPathParams;
}
export declare class ScoresByWeekSimulationResponse extends SpeakeasyBase {
    contentType: string;
    scores?: any[];
    statusCode: number;
}
