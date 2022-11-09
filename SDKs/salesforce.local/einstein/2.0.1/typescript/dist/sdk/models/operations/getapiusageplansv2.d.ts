import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiUsagePlansV2Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetApiUsagePlansV2Request extends SpeakeasyBase {
    security: GetApiUsagePlansV2Security;
}
export declare class GetApiUsagePlansV2Response extends SpeakeasyBase {
    apiUsageList?: shared.ApiUsageList;
    contentType: string;
    statusCode: number;
}
