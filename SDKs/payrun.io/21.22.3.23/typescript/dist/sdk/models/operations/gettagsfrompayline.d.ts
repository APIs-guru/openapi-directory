import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromPayLinePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payLineId: string;
}
export declare class GetTagsFromPayLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromPayLineRequest extends SpeakeasyBase {
    pathParams: GetTagsFromPayLinePathParams;
    headers: GetTagsFromPayLineHeaders;
}
export declare class GetTagsFromPayLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
