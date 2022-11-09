import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddOrUpdateAdditionalRatesPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddOrUpdateAdditionalRatesSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddOrUpdateAdditionalRatesRequest extends SpeakeasyBase {
    pathParams: AddOrUpdateAdditionalRatesPathParams;
    request: shared.AdditionalRate;
    security: AddOrUpdateAdditionalRatesSecurity;
}
export declare class AddOrUpdateAdditionalRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
