import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateGooddataServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateGooddataHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class CreateGooddataSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateGooddataRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: CreateGooddataHeaders;
    security: CreateGooddataSecurity;
}
export declare class CreateGooddataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Gooddata?: shared.FlexV1Gooddata;
}
