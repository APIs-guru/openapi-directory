import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests extends SpeakeasyBase {
    refreshProfileTelemetryPropertiesRequest?: shared.RefreshProfileTelemetryPropertiesRequest;
    refreshProfileTelemetryPropertiesRequest1?: shared.RefreshProfileTelemetryPropertiesRequest;
    refreshProfileTelemetryPropertiesRequest2?: shared.RefreshProfileTelemetryPropertiesRequest;
    refreshProfileTelemetryPropertiesRequest3?: shared.RefreshProfileTelemetryPropertiesRequest;
}
export declare class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequest extends SpeakeasyBase {
    request: PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesRequests;
}
export declare class PostApiV1GenevaActionsPrivacyRefreshProfileTelemetryPropertiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    refreshProfileTelemetryPropertiesResponse?: shared.RefreshProfileTelemetryPropertiesResponse;
    statusCode: number;
}
