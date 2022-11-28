import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWirelessLaNsQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetWirelessLaNsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetWirelessLaNsRequest extends SpeakeasyBase {
    queryParams: GetWirelessLaNsQueryParams;
    security: GetWirelessLaNsSecurity;
}
export declare class GetWirelessLaNsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelesses?: shared.Wireless[];
}
