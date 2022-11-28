import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2PredictionsHeaders extends SpeakeasyBase {
    xRapidApiKey?: string;
}
export declare class GetApiV2Predictions404ApplicationJson extends SpeakeasyBase {
    errors?: Map<string, any>;
}
export declare class GetApiV2PredictionsRequest extends SpeakeasyBase {
    headers: GetApiV2PredictionsHeaders;
}
export declare class GetApiV2PredictionsResponse extends SpeakeasyBase {
    contentType: string;
    getApiV2Predictions404ApplicationJsonObject?: GetApiV2Predictions404ApplicationJson;
    statusCode: number;
}
