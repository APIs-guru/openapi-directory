import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllCustomFieldsByCategoryPathParams extends SpeakeasyBase {
    category: string;
    companyId: string;
}
export declare class GetAllCustomFieldsByCategorySecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllCustomFieldsByCategoryRequest extends SpeakeasyBase {
    pathParams: GetAllCustomFieldsByCategoryPathParams;
    security: GetAllCustomFieldsByCategorySecurity;
}
export declare class GetAllCustomFieldsByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    customFieldDefinitions?: shared.CustomFieldDefinition[];
    errors?: shared.Error[];
}
