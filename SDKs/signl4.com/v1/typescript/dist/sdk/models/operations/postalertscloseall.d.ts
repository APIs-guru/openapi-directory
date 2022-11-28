import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsCloseAllQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class PostAlertsCloseAllRequests extends SpeakeasyBase {
    changeAlertStatusFilterInfo?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo1?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo2?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo3?: shared.ChangeAlertStatusFilterInfo;
}
export declare class PostAlertsCloseAllRequest extends SpeakeasyBase {
    queryParams: PostAlertsCloseAllQueryParams;
    request?: PostAlertsCloseAllRequests;
}
export declare class PostAlertsCloseAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
