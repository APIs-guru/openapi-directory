import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPayInstructionTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payInstructionId: string;
    tagId: string;
}
export declare class PutPayInstructionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayInstructionTagRequest extends SpeakeasyBase {
    pathParams: PutPayInstructionTagPathParams;
    headers: PutPayInstructionTagHeaders;
}
export declare class PutPayInstructionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
