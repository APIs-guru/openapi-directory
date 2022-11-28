import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCategoriesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCategoriesIdRequest extends SpeakeasyBase {
    pathParams: DeleteCategoriesIdPathParams;
}
export declare class DeleteCategoriesIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
