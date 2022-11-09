import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSCHEMAVERSION_SERVERS = [
	"https://events.twilio.com",
];



export class ListSchemaVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class ListSchemaVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSchemaVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSchemaVersionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSchemaVersionPathParams;

  @Metadata()
  queryParams: ListSchemaVersionQueryParams;

  @Metadata()
  security: ListSchemaVersionSecurity;
}


export class ListSchemaVersionListSchemaVersionResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListSchemaVersionListSchemaVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSchemaVersionListSchemaVersionResponseMeta;

  @Metadata({ data: "json, name=schema_versions", elemType: shared.EventsV1SchemaSchemaVersion })
  schemaVersions?: shared.EventsV1SchemaSchemaVersion[];
}


export class ListSchemaVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSchemaVersionResponse?: ListSchemaVersionListSchemaVersionResponse;

  @Metadata()
  statusCode: number;
}
