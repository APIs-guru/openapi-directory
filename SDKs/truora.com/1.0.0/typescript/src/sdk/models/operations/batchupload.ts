import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_id" })
  reportId: string;
}


export class BatchUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class BatchUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchUploadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: shared.BatchUploadInput;

  @SpeakeasyMetadata()
  security: BatchUploadSecurity;
}


export class BatchUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  reportOutput?: shared.ReportOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
