import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateScanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class CreateScanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateScanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateScanPathParams;

  @Metadata({ data: "request, media_type=text/json" })
  request?: shared.ScanOptions;

  @Metadata()
  security: CreateScanSecurity;
}


export class CreateScanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  task?: shared.Task;
}
