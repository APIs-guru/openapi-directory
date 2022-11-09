import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomersAccountAnnouncementsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;
}


export class GetCustomersAccountAnnouncementsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomersAccountAnnouncementsPathParams;
}


export class GetCustomersAccountAnnouncements200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=list", elemType: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema })
  list?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[];
}


export class GetCustomersAccountAnnouncementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCustomersAccountAnnouncements200ApplicationJsonObject?: GetCustomersAccountAnnouncements200ApplicationJson;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
