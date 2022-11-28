import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UploadDatasetAsyncRequestBodyTypeEnum {
    TextIntent = "text-intent",
    TextSentiment = "text-sentiment"
}


export class UploadDatasetAsyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetAsyncRequestBodyTypeEnum;
}


export class UploadDatasetAsyncSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetAsyncRequestBody;

  @SpeakeasyMetadata()
  security: UploadDatasetAsyncSecurity;
}


export class UploadDatasetAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
