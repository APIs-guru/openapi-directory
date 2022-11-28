import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1AgentTelemetryRequests extends SpeakeasyBase {
    telemetryData?: shared.TelemetryData[];
    telemetryData1?: shared.TelemetryData[];
    telemetryData2?: shared.TelemetryData[];
    telemetryData3?: shared.TelemetryData[];
}
export declare class PostApiV1AgentTelemetryRequest extends SpeakeasyBase {
    request?: PostApiV1AgentTelemetryRequests;
}
export declare class PostApiV1AgentTelemetryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
