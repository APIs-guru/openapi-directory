import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdCategoriesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdCategoriesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdCategoriesPathParams;
}
export declare class GetUsersIdCategoriesResponse extends SpeakeasyBase {
    categories?: shared.Category[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
