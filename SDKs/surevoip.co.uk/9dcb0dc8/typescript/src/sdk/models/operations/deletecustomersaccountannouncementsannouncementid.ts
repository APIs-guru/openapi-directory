import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=announcement_id" })
  announcementId: string;
}


export class DeleteCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams;
}


export class DeleteCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
