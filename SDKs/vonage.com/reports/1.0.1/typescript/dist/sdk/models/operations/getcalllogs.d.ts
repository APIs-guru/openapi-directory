import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCallLogsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare enum GetCallLogsDirectionEnum {
    Inbound = "Inbound",
    Outbound = "Outbound"
}
export declare class GetCallLogsQueryParams extends SpeakeasyBase {
    destinationUser?: string;
    direction?: GetCallLogsDirectionEnum;
    endGte?: string;
    endLte?: string;
    from?: string;
    page: number;
    pageSize: number;
    sourceUser?: string;
    startGte: string;
    startLte: string;
    to?: string;
}
export declare class GetCallLogsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetCallLogsRequest extends SpeakeasyBase {
    pathParams: GetCallLogsPathParams;
    queryParams: GetCallLogsQueryParams;
    security: GetCallLogsSecurity;
}
export declare class GetCallLogsResponse extends SpeakeasyBase {
    callLogsHalResponse?: shared.CallLogsHalResponse;
    contentType: string;
    statusCode: number;
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
