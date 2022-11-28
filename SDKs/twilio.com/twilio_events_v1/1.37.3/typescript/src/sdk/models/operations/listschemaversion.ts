import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSchemaVersionServerList = [
	"https://events.twilio.com",
] as const;


export class ListSchemaVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class ListSchemaVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSchemaVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSchemaVersionListSchemaVersionResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListSchemaVersionListSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSchemaVersionListSchemaVersionResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=schema_versions", elemType: shared.EventsV1SchemaSchemaVersion })
  schemaVersions?: shared.EventsV1SchemaSchemaVersion[];
}


export class ListSchemaVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSchemaVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSchemaVersionQueryParams;

  @SpeakeasyMetadata()
  security: ListSchemaVersionSecurity;
}


export class ListSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSchemaVersionResponse?: ListSchemaVersionListSchemaVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
