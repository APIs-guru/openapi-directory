import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMaintenanceRequest extends SpeakeasyBase {
    request: shared.Maintenance;
}
export declare class PostMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    maintenance?: shared.Maintenance;
    statusCode: number;
}
