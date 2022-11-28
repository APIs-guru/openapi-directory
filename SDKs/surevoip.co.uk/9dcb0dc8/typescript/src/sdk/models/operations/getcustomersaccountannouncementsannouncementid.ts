import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=announcement_id" })
  announcementId: string;
}


export class GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}


export class GetCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersAccountAnnouncementsAnnouncementIdPathParams;
}


export class GetCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCustomersAccountAnnouncementsAnnouncementId404ApplicationJsonObject?: GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses201ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema;
}
