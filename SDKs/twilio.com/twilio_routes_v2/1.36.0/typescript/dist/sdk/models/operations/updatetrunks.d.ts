import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATETRUNKS_SERVERS: string[];
export declare class UpdateTrunksPathParams extends SpeakeasyBase {
    sipTrunkDomain: string;
}
export declare class UpdateTrunksUpdateTrunksRequest extends SpeakeasyBase {
    friendlyName?: string;
    voiceRegion?: string;
}
export declare class UpdateTrunksSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTrunksRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTrunksPathParams;
    request?: UpdateTrunksUpdateTrunksRequest;
    security: UpdateTrunksSecurity;
}
export declare class UpdateTrunksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    routesV2Trunks?: shared.RoutesV2Trunks;
}
