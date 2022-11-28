import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCompanyAttendancesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCompanyAttendancesIdRequest extends SpeakeasyBase {
    pathParams: DeleteCompanyAttendancesIdPathParams;
}
export declare class DeleteCompanyAttendancesIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    response?: shared.Response;
    statusCode: number;
}
