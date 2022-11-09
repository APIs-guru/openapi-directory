import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_id" })
  reportId: string;
}


export class BatchUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class BatchUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchUploadPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: shared.BatchUploadInput;

  @Metadata()
  security: BatchUploadSecurity;
}


export class BatchUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  reportOutput?: shared.ReportOutput;

  @Metadata()
  statusCode: number;
}
