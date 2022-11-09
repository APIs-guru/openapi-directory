import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomersAccountAnnouncementsAnnouncementIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=announcement_id" })
  announcementId: string;
}


export class GetCustomersAccountAnnouncementsAnnouncementIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomersAccountAnnouncementsAnnouncementIdPathParams;
}


export class GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;
}


export class GetCustomersAccountAnnouncementsAnnouncementIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCustomersAccountAnnouncementsAnnouncementId404ApplicationJsonObject?: GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneannouncementsPostResponses201ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema;
}
