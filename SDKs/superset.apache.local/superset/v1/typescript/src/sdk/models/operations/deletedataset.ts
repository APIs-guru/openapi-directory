import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatasetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteDatasetQueryParams;

  @Metadata()
  security: DeleteDatasetSecurity;
}


export class DeleteDataset200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDataset500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDataset200ApplicationJsonObject?: DeleteDataset200ApplicationJson;

  @Metadata()
  deleteDataset400ApplicationJsonObject?: DeleteDataset400ApplicationJson;

  @Metadata()
  deleteDataset401ApplicationJsonObject?: DeleteDataset401ApplicationJson;

  @Metadata()
  deleteDataset403ApplicationJsonObject?: DeleteDataset403ApplicationJson;

  @Metadata()
  deleteDataset404ApplicationJsonObject?: DeleteDataset404ApplicationJson;

  @Metadata()
  deleteDataset422ApplicationJsonObject?: DeleteDataset422ApplicationJson;

  @Metadata()
  deleteDataset500ApplicationJsonObject?: DeleteDataset500ApplicationJson;

  @Metadata()
  statusCode: number;
}
