import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2PredictionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2PredictionsId200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>[];
}
export declare class GetApiV2PredictionsId404ApplicationJson extends SpeakeasyBase {
    errors?: Map<string, any>;
}
export declare class GetApiV2PredictionsIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2PredictionsIdPathParams;
}
export declare class GetApiV2PredictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    getApiV2PredictionsId200ApplicationJsonObject?: GetApiV2PredictionsId200ApplicationJson;
    getApiV2PredictionsId404ApplicationJsonObject?: GetApiV2PredictionsId404ApplicationJson;
    statusCode: number;
}
