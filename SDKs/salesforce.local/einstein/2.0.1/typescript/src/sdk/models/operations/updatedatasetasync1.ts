import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatasetAsync1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;
}


export class UpdateDatasetAsync1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsync1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsync1RequestBody;

  @SpeakeasyMetadata()
  security: UpdateDatasetAsync1Security;
}


export class UpdateDatasetAsync1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
