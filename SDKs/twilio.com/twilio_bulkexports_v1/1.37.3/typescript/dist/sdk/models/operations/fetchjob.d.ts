import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchJobServerList: readonly ["https://bulkexports.twilio.com"];
export declare class FetchJobPathParams extends SpeakeasyBase {
    jobSid: string;
}
export declare class FetchJobSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchJobRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchJobPathParams;
    security: FetchJobSecurity;
}
export declare class FetchJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bulkexportsV1ExportJob?: shared.BulkexportsV1ExportJob;
}
