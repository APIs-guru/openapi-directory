import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDatasetRequestBodyTypeEnum {
    Image = "image"
,    ImageMultiLabel = "image-multi-label"
}


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=labels" })
  labels?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: CreateDatasetRequestBodyTypeEnum;
}


export class CreateDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class CreateDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: CreateDatasetRequestBody;

  @Metadata()
  security: CreateDatasetSecurity;
}


export class CreateDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
