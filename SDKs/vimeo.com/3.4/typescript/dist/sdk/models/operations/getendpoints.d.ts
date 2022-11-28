import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEndpointsQueryParams extends SpeakeasyBase {
    openapi?: boolean;
}
export declare class GetEndpointsRequest extends SpeakeasyBase {
    queryParams: GetEndpointsQueryParams;
}
export declare class GetEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    endpoint?: shared.Endpoint;
}
