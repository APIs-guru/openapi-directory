import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstitutionsIdAccountsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetInstitutionsIdAccountsRequest extends SpeakeasyBase {
    pathParams: GetInstitutionsIdAccountsPathParams;
}
export declare class GetInstitutionsIdAccountsResponse extends SpeakeasyBase {
    accounts?: shared.Account[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
