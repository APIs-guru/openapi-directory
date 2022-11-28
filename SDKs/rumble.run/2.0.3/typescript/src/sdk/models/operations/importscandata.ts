import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportScanDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class ImportScanDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ImportScanDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportScanDataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @SpeakeasyMetadata()
  security: ImportScanDataSecurity;
}


export class ImportScanDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
