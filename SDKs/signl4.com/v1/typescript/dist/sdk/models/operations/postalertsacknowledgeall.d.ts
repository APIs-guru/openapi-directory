import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsAcknowledgeAllQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class PostAlertsAcknowledgeAllRequests extends SpeakeasyBase {
    changeAlertStatusFilterInfo?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo1?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo2?: shared.ChangeAlertStatusFilterInfo;
    changeAlertStatusFilterInfo3?: shared.ChangeAlertStatusFilterInfo;
}
export declare class PostAlertsAcknowledgeAllRequest extends SpeakeasyBase {
    queryParams: PostAlertsAcknowledgeAllQueryParams;
    request?: PostAlertsAcknowledgeAllRequests;
}
export declare class PostAlertsAcknowledgeAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
