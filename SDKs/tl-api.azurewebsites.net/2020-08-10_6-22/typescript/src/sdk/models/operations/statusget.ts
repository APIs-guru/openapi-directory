import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StatusGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=messageId" })
  messageId?: string;
}


export class StatusGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StatusGetQueryParams;
}


export class StatusGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageStatus?: shared.MessageStatus;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
