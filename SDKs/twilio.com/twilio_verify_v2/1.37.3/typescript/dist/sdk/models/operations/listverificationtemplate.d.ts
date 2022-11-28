import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVerificationTemplateServerList: readonly ["https://verify.twilio.com"];
export declare class ListVerificationTemplateQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListVerificationTemplateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListVerificationTemplateListVerificationTemplateResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListVerificationTemplateListVerificationTemplateResponse extends SpeakeasyBase {
    meta?: ListVerificationTemplateListVerificationTemplateResponseMeta;
    templates?: shared.VerifyV2VerificationTemplate[];
}
export declare class ListVerificationTemplateRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListVerificationTemplateQueryParams;
    security: ListVerificationTemplateSecurity;
}
export declare class ListVerificationTemplateResponse extends SpeakeasyBase {
    contentType: string;
    listVerificationTemplateResponse?: ListVerificationTemplateListVerificationTemplateResponse;
    statusCode: number;
}
