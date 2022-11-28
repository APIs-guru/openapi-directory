import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UploadDatasetAsync1RequestBodyTypeEnum {
    Image = "image",
    ImageDetection = "image-detection",
    ImageMultiLabel = "image-multi-label"
}


export class UploadDatasetAsync1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetAsync1RequestBodyTypeEnum;
}


export class UploadDatasetAsync1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetAsync1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetAsync1RequestBody;

  @SpeakeasyMetadata()
  security: UploadDatasetAsync1Security;
}


export class UploadDatasetAsync1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
