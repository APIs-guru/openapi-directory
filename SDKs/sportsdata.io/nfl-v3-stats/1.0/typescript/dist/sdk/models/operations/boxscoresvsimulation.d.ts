import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BoxScoresVSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoresVSimulationPathParams extends SpeakeasyBase {
    format: BoxScoresVSimulationFormatEnum;
    numberofplays: string;
}
export declare class BoxScoresVSimulationRequest extends SpeakeasyBase {
    pathParams: BoxScoresVSimulationPathParams;
}
export declare class BoxScoresVSimulationResponse extends SpeakeasyBase {
    boxScoreV3s?: any[];
    contentType: string;
    statusCode: number;
}
