import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetPayCodesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodesWithTagRequest extends SpeakeasyBase {
    pathParams: GetPayCodesWithTagPathParams;
    headers: GetPayCodesWithTagHeaders;
}
export declare class GetPayCodesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
