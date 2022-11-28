import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class ReportConversationRequestBody extends SpeakeasyBase {
    reason: string;
}
export declare class ReportConversationRequest extends SpeakeasyBase {
    pathParams: ReportConversationPathParams;
    request: ReportConversationRequestBody;
}
export declare class ReportConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
