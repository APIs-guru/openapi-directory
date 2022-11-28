import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCategoriesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCategoriesIdRequestBody extends SpeakeasyBase {
    colour?: string;
    parentId?: number;
    title?: string;
}
export declare class PutCategoriesIdRequest extends SpeakeasyBase {
    pathParams: PutCategoriesIdPathParams;
    request?: PutCategoriesIdRequestBody;
}
export declare class PutCategoriesIdResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
