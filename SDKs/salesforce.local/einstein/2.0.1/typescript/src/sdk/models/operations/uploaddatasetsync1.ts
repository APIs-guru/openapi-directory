import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadDatasetSync1RequestBodyTypeEnum {
    Image = "image"
,    ImageDetection = "image-detection"
,    ImageMultiLabel = "image-multi-label"
}


export class UploadDatasetSync1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetSync1RequestBodyTypeEnum;
}


export class UploadDatasetSync1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetSync1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetSync1RequestBody;

  @Metadata()
  security: UploadDatasetSync1Security;
}


export class UploadDatasetSync1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
