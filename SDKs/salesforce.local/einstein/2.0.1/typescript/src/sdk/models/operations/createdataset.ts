import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDatasetRequestBodyTypeEnum {
    Image = "image",
    ImageMultiLabel = "image-multi-label"
}


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=labels" })
  labels?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: CreateDatasetRequestBodyTypeEnum;
}


export class CreateDatasetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateDatasetRequestBody;

  @SpeakeasyMetadata()
  security: CreateDatasetSecurity;
}


export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
