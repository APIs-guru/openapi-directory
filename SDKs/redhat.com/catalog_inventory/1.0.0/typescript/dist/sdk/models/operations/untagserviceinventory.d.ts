import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UntagServiceInventoryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UntagServiceInventoryRequest extends SpeakeasyBase {
    pathParams: UntagServiceInventoryPathParams;
    request: shared.Tag[];
}
export declare class UntagServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
