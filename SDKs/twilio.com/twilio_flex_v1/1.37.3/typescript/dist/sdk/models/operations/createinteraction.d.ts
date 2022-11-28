import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateInteractionServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInteractionCreateInteractionRequest extends SpeakeasyBase {
    channel: any;
    routing: any;
}
export declare class CreateInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateInteractionCreateInteractionRequest;
    security: CreateInteractionSecurity;
}
export declare class CreateInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Interaction?: shared.FlexV1Interaction;
}
