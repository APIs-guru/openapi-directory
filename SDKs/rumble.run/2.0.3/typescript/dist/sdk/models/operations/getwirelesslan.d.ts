import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWirelessLanPathParams extends SpeakeasyBase {
    wirelessId: string;
}
export declare class GetWirelessLanSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetWirelessLanRequest extends SpeakeasyBase {
    pathParams: GetWirelessLanPathParams;
    security: GetWirelessLanSecurity;
}
export declare class GetWirelessLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wireless?: shared.Wireless;
}
