import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StatusGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" })
  messageId?: string;
}


export class StatusGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StatusGetQueryParams;
}


export class StatusGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageStatus?: shared.MessageStatus;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
