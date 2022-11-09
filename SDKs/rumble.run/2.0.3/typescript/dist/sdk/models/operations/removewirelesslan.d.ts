import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveWirelessLanPathParams extends SpeakeasyBase {
    wirelessId: string;
}
export declare class RemoveWirelessLanSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveWirelessLanRequest extends SpeakeasyBase {
    pathParams: RemoveWirelessLanPathParams;
    security: RemoveWirelessLanSecurity;
}
export declare class RemoveWirelessLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
