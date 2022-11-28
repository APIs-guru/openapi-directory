import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportEventsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportEventsJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportEventsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportEventsJsonQueryParams;

  @SpeakeasyMetadata()
  security: ExportEventsJsonSecurity;
}


export class ExportEventsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  statusCode: number;
}
