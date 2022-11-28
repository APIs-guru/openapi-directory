import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersAccountAnnouncementsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;
}


export class GetCustomersAccountAnnouncements200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=list", elemType: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema })
  list?: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[];
}


export class GetCustomersAccountAnnouncementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersAccountAnnouncementsPathParams;
}


export class GetCustomersAccountAnnouncementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCustomersAccountAnnouncements200ApplicationJsonObject?: GetCustomersAccountAnnouncements200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
