import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFacilityIdsTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}
export declare class GetFacilityIdsQueryParams extends SpeakeasyBase {
    type?: GetFacilityIdsTypeEnum;
}
export declare class GetFacilityIdsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetFacilityIdsRequest extends SpeakeasyBase {
    queryParams: GetFacilityIdsQueryParams;
    security: GetFacilityIdsSecurity;
}
export declare class GetFacilityIdsResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    facilitiesIdsResponse?: shared.FacilitiesIdsResponse;
    genericError?: shared.GenericError;
    statusCode: number;
}
