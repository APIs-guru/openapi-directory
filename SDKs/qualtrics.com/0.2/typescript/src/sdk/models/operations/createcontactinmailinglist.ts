import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateContactInMailinglistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MailingListId" })
  mailingListId: string;
}


export class CreateContactInMailinglistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateContactInMailinglistPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateContactInMailingList;
}


export class CreateContactInMailinglistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
