import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCompanyTimeOffsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCompanyTimeOffsIdRequest extends SpeakeasyBase {
    pathParams: DeleteCompanyTimeOffsIdPathParams;
}
export declare class DeleteCompanyTimeOffsIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    response?: shared.Response;
    statusCode: number;
}
