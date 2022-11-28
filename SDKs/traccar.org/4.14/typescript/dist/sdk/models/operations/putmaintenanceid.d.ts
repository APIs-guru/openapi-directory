import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMaintenanceIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutMaintenanceIdRequest extends SpeakeasyBase {
    pathParams: PutMaintenanceIdPathParams;
    request: shared.Maintenance;
}
export declare class PutMaintenanceIdResponse extends SpeakeasyBase {
    contentType: string;
    maintenance?: shared.Maintenance;
    statusCode: number;
}
