import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatasetAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class UpdateDatasetAsyncRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: string;
}


export class UpdateDatasetAsyncSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatasetAsyncPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsyncRequestBody;

  @Metadata()
  security: UpdateDatasetAsyncSecurity;
}


export class UpdateDatasetAsyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
