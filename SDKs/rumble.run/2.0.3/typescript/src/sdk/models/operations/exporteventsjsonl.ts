import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportEventsJsonlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportEventsJsonlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ExportEventsJsonlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportEventsJsonlQueryParams;

  @SpeakeasyMetadata()
  security: ExportEventsJsonlSecurity;
}


export class ExportEventsJsonlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  statusCode: number;
}
