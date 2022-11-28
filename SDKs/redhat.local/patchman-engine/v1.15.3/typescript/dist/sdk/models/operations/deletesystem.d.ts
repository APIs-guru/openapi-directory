import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletesystemPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare class DeletesystemSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class DeletesystemRequest extends SpeakeasyBase {
    pathParams: DeletesystemPathParams;
    security: DeletesystemSecurity;
}
export declare class DeletesystemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
