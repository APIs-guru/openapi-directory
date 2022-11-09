import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportScanDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class ImportScanDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ImportScanDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImportScanDataPathParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @Metadata()
  security: ImportScanDataSecurity;
}


export class ImportScanDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  task?: shared.Task;
}
