import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayInstructionsWithTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class GetPayInstructionsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayInstructionsWithTagRequest extends SpeakeasyBase {
    pathParams: GetPayInstructionsWithTagPathParams;
    headers: GetPayInstructionsWithTagHeaders;
}
export declare class GetPayInstructionsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
