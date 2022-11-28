import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCompanyTimeOffTypesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetCompanyTimeOffTypes200ApplicationJson extends SpeakeasyBase {
    data?: shared.TimeOffTypeResource[];
    success?: boolean;
}
export declare class GetCompanyTimeOffTypesRequest extends SpeakeasyBase {
    queryParams: GetCompanyTimeOffTypesQueryParams;
}
export declare class GetCompanyTimeOffTypesResponse extends SpeakeasyBase {
    contentType: string;
    getCompanyTimeOffTypes200ApplicationJsonObject?: GetCompanyTimeOffTypes200ApplicationJson;
    statusCode: number;
}
