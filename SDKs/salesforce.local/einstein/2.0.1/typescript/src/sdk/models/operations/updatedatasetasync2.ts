import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatasetAsync2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class UpdateDatasetAsync2RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;
}


export class UpdateDatasetAsync2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsync2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatasetAsync2PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsync2RequestBody;

  @SpeakeasyMetadata()
  security: UpdateDatasetAsync2Security;
}


export class UpdateDatasetAsync2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
