import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllPayInstructionTagsPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetAllPayInstructionTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllPayInstructionTagsRequest extends SpeakeasyBase {
    pathParams: GetAllPayInstructionTagsPathParams;
    headers: GetAllPayInstructionTagsHeaders;
}
export declare class GetAllPayInstructionTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
