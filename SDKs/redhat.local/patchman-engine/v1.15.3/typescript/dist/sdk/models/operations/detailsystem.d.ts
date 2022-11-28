import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetailSystemPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare class DetailSystemSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class DetailSystemRequest extends SpeakeasyBase {
    pathParams: DetailSystemPathParams;
    security: DetailSystemSecurity;
}
export declare class DetailSystemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemDetailResponse?: shared.ControllersSystemDetailResponse;
}
