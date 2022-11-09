import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayLinesWithTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class GetPayLinesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayLinesWithTagRequest extends SpeakeasyBase {
    pathParams: GetPayLinesWithTagPathParams;
    headers: GetPayLinesWithTagHeaders;
}
export declare class GetPayLinesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
