import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersIdInstitutionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostUsersIdInstitutionsRequestBody extends SpeakeasyBase {
    currencyCode: string;
    title: string;
}
export declare class PostUsersIdInstitutionsRequest extends SpeakeasyBase {
    pathParams: PostUsersIdInstitutionsPathParams;
    request?: PostUsersIdInstitutionsRequestBody;
}
export declare class PostUsersIdInstitutionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    institution?: shared.Institution;
    statusCode: number;
}
