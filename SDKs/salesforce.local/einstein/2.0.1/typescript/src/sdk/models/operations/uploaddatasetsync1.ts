import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UploadDatasetSync1RequestBodyTypeEnum {
    Image = "image",
    ImageDetection = "image-detection",
    ImageMultiLabel = "image-multi-label"
}


export class UploadDatasetSync1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetSync1RequestBodyTypeEnum;
}


export class UploadDatasetSync1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetSync1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetSync1RequestBody;

  @SpeakeasyMetadata()
  security: UploadDatasetSync1Security;
}


export class UploadDatasetSync1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
