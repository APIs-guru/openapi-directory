import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPayLineTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payLineId: string;
    tagId: string;
}
export declare class PutPayLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayLineTagRequest extends SpeakeasyBase {
    pathParams: PutPayLineTagPathParams;
    headers: PutPayLineTagHeaders;
}
export declare class PutPayLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
