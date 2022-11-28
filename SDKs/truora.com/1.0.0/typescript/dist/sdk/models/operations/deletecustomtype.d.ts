import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCustomTypeCountryEnum {
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    All = "ALL"
}
export declare class DeleteCustomTypeQueryParams extends SpeakeasyBase {
    country?: DeleteCustomTypeCountryEnum;
    type: string;
}
export declare class DeleteCustomTypeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DeleteCustomTypeRequest extends SpeakeasyBase {
    queryParams: DeleteCustomTypeQueryParams;
    security: DeleteCustomTypeSecurity;
}
export declare class DeleteCustomTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
