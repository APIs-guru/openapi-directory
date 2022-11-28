import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1ContinuousChecksContinuousCheckIdHistoryPathParams extends SpeakeasyBase {
    continuousCheckId: string;
}
export declare class GetV1ContinuousChecksContinuousCheckIdHistorySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetV1ContinuousChecksContinuousCheckIdHistoryRequest extends SpeakeasyBase {
    pathParams: GetV1ContinuousChecksContinuousCheckIdHistoryPathParams;
    security: GetV1ContinuousChecksContinuousCheckIdHistorySecurity;
}
export declare class GetV1ContinuousChecksContinuousCheckIdHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getContiuousCheckHistoryOutput?: shared.GetContiuousCheckHistoryOutput;
    statusCode: number;
}
