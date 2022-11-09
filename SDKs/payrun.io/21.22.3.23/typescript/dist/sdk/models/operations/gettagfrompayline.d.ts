import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromPayLinePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payLineId: string;
    tagId: string;
}
export declare class GetTagFromPayLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromPayLineRequest extends SpeakeasyBase {
    pathParams: GetTagFromPayLinePathParams;
    headers: GetTagFromPayLineHeaders;
}
export declare class GetTagFromPayLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
