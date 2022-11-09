import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConnectionsQueryParams extends SpeakeasyBase {
    authEventId?: string;
}
export declare class GetConnectionsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetConnectionsRequest extends SpeakeasyBase {
    queryParams: GetConnectionsQueryParams;
    security: GetConnectionsSecurity;
}
export declare class GetConnectionsResponse extends SpeakeasyBase {
    connections?: any[];
    contentType: string;
    statusCode: number;
}
