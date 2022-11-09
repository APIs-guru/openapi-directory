import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatasetRestApiPost;

  @Metadata()
  security: PostDatasetSecurity;
}


export class PostDataset201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiPost;
}


export class PostDataset400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDataset201ApplicationJsonObject?: PostDataset201ApplicationJson;

  @Metadata()
  postDataset400ApplicationJsonObject?: PostDataset400ApplicationJson;

  @Metadata()
  postDataset401ApplicationJsonObject?: PostDataset401ApplicationJson;

  @Metadata()
  postDataset422ApplicationJsonObject?: PostDataset422ApplicationJson;

  @Metadata()
  postDataset500ApplicationJsonObject?: PostDataset500ApplicationJson;

  @Metadata()
  statusCode: number;
}
