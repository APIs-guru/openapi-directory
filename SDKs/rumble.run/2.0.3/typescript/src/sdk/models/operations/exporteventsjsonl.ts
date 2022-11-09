import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportEventsJsonlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportEventsJsonlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportEventsJsonlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportEventsJsonlQueryParams;

  @Metadata()
  security: ExportEventsJsonlSecurity;
}


export class ExportEventsJsonlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  statusCode: number;
}
