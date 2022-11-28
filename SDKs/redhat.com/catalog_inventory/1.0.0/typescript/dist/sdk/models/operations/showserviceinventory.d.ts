import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShowServiceInventoryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceInventoryRequest extends SpeakeasyBase {
    pathParams: ShowServiceInventoryPathParams;
}
export declare class ShowServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceInventory?: shared.ServiceInventory;
    statusCode: number;
}
