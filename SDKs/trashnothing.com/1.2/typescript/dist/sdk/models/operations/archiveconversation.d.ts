import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArchiveConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class ArchiveConversationRequest extends SpeakeasyBase {
    pathParams: ArchiveConversationPathParams;
}
export declare class ArchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
