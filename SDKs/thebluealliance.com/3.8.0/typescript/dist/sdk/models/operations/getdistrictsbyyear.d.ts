import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictsByYearPathParams extends SpeakeasyBase {
    year: number;
}
export declare class GetDistrictsByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictsByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictsByYearRequest extends SpeakeasyBase {
    pathParams: GetDistrictsByYearPathParams;
    headers: GetDistrictsByYearHeaders;
    security: GetDistrictsByYearSecurity;
}
export declare class GetDistrictsByYearResponse extends SpeakeasyBase {
    contentType: string;
    districtLists?: shared.DistrictList[];
    headers: Map<string, string[]>;
    statusCode: number;
}
