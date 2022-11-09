import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadDatasetAsync1RequestBodyTypeEnum {
    Image = "image"
,    ImageDetection = "image-detection"
,    ImageMultiLabel = "image-multi-label"
}


export class UploadDatasetAsync1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetAsync1RequestBodyTypeEnum;
}


export class UploadDatasetAsync1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetAsync1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetAsync1RequestBody;

  @Metadata()
  security: UploadDatasetAsync1Security;
}


export class UploadDatasetAsync1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
