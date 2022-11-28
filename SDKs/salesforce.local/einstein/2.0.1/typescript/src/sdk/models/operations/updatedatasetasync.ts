import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatasetAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class UpdateDatasetAsyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: string;
}


export class UpdateDatasetAsyncSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatasetAsyncPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsyncRequestBody;

  @SpeakeasyMetadata()
  security: UpdateDatasetAsyncSecurity;
}


export class UpdateDatasetAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
