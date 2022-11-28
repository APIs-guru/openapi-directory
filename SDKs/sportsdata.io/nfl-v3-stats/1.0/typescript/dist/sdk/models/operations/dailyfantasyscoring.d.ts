import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DailyFantasyScoringFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DailyFantasyScoringPathParams extends SpeakeasyBase {
    date: string;
    format: DailyFantasyScoringFormatEnum;
}
export declare class DailyFantasyScoringRequest extends SpeakeasyBase {
    pathParams: DailyFantasyScoringPathParams;
}
export declare class DailyFantasyScoringResponse extends SpeakeasyBase {
    contentType: string;
    dailyFantasyScorings?: any[];
    statusCode: number;
}
