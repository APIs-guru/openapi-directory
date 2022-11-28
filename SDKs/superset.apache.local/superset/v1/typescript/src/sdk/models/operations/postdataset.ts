import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatasetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDataset201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiPost;
}


export class PostDataset400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDataset500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatasetRestApiPost;

  @SpeakeasyMetadata()
  security: PostDatasetSecurity;
}


export class PostDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDataset201ApplicationJsonObject?: PostDataset201ApplicationJson;

  @SpeakeasyMetadata()
  postDataset400ApplicationJsonObject?: PostDataset400ApplicationJson;

  @SpeakeasyMetadata()
  postDataset401ApplicationJsonObject?: PostDataset401ApplicationJson;

  @SpeakeasyMetadata()
  postDataset422ApplicationJsonObject?: PostDataset422ApplicationJson;

  @SpeakeasyMetadata()
  postDataset500ApplicationJsonObject?: PostDataset500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
