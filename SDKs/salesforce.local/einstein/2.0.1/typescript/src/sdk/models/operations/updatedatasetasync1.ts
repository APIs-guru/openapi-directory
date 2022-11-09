import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatasetAsync1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=modelId" })
  modelId?: string;
}


export class UpdateDatasetAsync1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsync1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsync1RequestBody;

  @Metadata()
  security: UpdateDatasetAsync1Security;
}


export class UpdateDatasetAsync1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
