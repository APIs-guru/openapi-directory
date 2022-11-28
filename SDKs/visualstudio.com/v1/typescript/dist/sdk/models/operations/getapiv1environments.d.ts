import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1EnvironmentsQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    name?: string;
    planId?: string;
}
export declare class GetApiV1EnvironmentsRequest extends SpeakeasyBase {
    queryParams: GetApiV1EnvironmentsQueryParams;
}
export declare class GetApiV1EnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResults?: shared.CloudEnvironmentResult[];
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
