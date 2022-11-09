import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateContactInMailinglistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MailingListId" })
  mailingListId: string;
}


export class CreateContactInMailinglistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateContactInMailinglistPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateContactInMailingList;
}


export class CreateContactInMailinglistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
