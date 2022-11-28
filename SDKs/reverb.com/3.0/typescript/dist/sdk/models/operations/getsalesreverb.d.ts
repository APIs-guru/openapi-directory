import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesReverbSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetSalesReverbRequest extends SpeakeasyBase {
    security: GetSalesReverbSecurity;
}
export declare class GetSalesReverbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
