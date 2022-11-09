import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UploadDatasetSyncRequestBodyTypeEnum {
    TextIntent = "text-intent"
,    TextSentiment = "text-sentiment"
}


export class UploadDatasetSyncRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=type" })
  type?: UploadDatasetSyncRequestBodyTypeEnum;
}


export class UploadDatasetSyncSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UploadDatasetSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadDatasetSyncRequestBody;

  @Metadata()
  security: UploadDatasetSyncSecurity;
}


export class UploadDatasetSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
