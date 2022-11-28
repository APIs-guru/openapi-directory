import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDatasetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteDatasetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDataset200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteDatasetQueryParams;

  @SpeakeasyMetadata()
  security: DeleteDatasetSecurity;
}


export class DeleteDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDataset200ApplicationJsonObject?: DeleteDataset200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset400ApplicationJsonObject?: DeleteDataset400ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset401ApplicationJsonObject?: DeleteDataset401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset403ApplicationJsonObject?: DeleteDataset403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset404ApplicationJsonObject?: DeleteDataset404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset422ApplicationJsonObject?: DeleteDataset422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDataset500ApplicationJsonObject?: DeleteDataset500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
