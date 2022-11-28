import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSchemaVersionServerList = [
	"https://events.twilio.com",
] as const;


export class FetchSchemaVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SchemaVersion" })
  schemaVersion: number;
}


export class FetchSchemaVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSchemaVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSchemaVersionPathParams;

  @SpeakeasyMetadata()
  security: FetchSchemaVersionSecurity;
}


export class FetchSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1SchemaSchemaVersion?: shared.EventsV1SchemaSchemaVersion;
}
