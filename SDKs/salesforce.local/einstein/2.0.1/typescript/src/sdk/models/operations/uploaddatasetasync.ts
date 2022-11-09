import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadDatasetAsyncRequestBodyTypeEnum {
    TextIntent = "text-intent"
,    TextSentiment = "text-sentiment"
}


export class UploadDatasetAsyncRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetAsyncRequestBodyTypeEnum;
}


export class UploadDatasetAsyncSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetAsyncRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetAsyncRequestBody;

  @Metadata()
  security: UploadDatasetAsyncSecurity;
}


export class UploadDatasetAsyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
