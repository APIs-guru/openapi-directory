import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=announcement_id" })
  announcementId: string;
}


export class DeleteCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomersAccountAnnouncementsAnnouncementIdPathParams;
}


export class DeleteCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
