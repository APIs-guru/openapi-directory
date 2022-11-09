import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSCHEMAVERSION_SERVERS = [
	"https://events.twilio.com",
];



export class FetchSchemaVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SchemaVersion" })
  schemaVersion: number;
}


export class FetchSchemaVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSchemaVersionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSchemaVersionPathParams;

  @Metadata()
  security: FetchSchemaVersionSecurity;
}


export class FetchSchemaVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1SchemaSchemaVersion?: shared.EventsV1SchemaSchemaVersion;
}
