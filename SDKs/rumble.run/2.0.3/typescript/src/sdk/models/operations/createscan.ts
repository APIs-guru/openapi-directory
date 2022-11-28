import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateScanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=site_id" })
  siteId: string;
}


export class CreateScanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateScanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateScanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  request?: shared.ScanOptions;

  @SpeakeasyMetadata()
  security: CreateScanSecurity;
}


export class CreateScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
