import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventDistrictPointsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventDistrictPointsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventDistrictPointsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventDistrictPointsRequest extends SpeakeasyBase {
    pathParams: GetEventDistrictPointsPathParams;
    headers: GetEventDistrictPointsHeaders;
    security: GetEventDistrictPointsSecurity;
}
export declare class GetEventDistrictPointsResponse extends SpeakeasyBase {
    contentType: string;
    eventDistrictPoints?: shared.EventDistrictPoints;
    headers: Map<string, string[]>;
    statusCode: number;
}
