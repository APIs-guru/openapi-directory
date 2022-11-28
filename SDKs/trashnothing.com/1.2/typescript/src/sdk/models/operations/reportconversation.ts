import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class ReportConversationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=reason" })
  reason: string;
}


export class ReportConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReportConversationRequestBody;
}


export class ReportConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
