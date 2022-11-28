import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdInstitutionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdInstitutionsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdInstitutionsPathParams;
}
export declare class GetUsersIdInstitutionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    institutions?: shared.Institution[];
    statusCode: number;
}
