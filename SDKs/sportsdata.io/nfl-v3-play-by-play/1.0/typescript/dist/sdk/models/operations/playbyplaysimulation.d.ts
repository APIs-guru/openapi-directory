import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayByPlaySimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlaySimulationPathParams extends SpeakeasyBase {
    format: PlayByPlaySimulationFormatEnum;
    numberofplays: string;
}
export declare class PlayByPlaySimulationRequest extends SpeakeasyBase {
    pathParams: PlayByPlaySimulationPathParams;
}
export declare class PlayByPlaySimulationResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: any[];
    statusCode: number;
}
