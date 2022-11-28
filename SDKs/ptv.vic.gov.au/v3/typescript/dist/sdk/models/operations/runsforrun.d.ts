import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunsForRunPathParams extends SpeakeasyBase {
    runRef: string;
}
export declare enum RunsForRunExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRunQueryParams extends SpeakeasyBase {
    dateUtc?: Date;
    devid?: string;
    expand: RunsForRunExpandEnum[];
    includeGeopath?: boolean;
    signature?: string;
    token?: string;
}
export declare class RunsForRunRequest extends SpeakeasyBase {
    pathParams: RunsForRunPathParams;
    queryParams: RunsForRunQueryParams;
}
export declare class RunsForRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3RunsResponse?: shared.V3RunsResponse;
}
