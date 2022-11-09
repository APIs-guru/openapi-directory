import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TagServiceInventoryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TagServiceInventoryRequest extends SpeakeasyBase {
    pathParams: TagServiceInventoryPathParams;
    request: shared.Tag[];
}
export declare class TagServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tags?: shared.Tag[];
}
