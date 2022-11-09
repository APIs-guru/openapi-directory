import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReportConversationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=reason" })
  reason: string;
}


export class ReportConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReportConversationPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReportConversationRequestBody;
}


export class ReportConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
