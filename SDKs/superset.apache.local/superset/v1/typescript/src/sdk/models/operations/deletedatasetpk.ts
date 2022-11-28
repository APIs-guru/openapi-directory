import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDatasetPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteDatasetPkSecurity;
}


export class DeleteDatasetPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDatasetPk200ApplicationJsonObject?: DeleteDatasetPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPk401ApplicationJsonObject?: DeleteDatasetPk401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPk403ApplicationJsonObject?: DeleteDatasetPk403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPk404ApplicationJsonObject?: DeleteDatasetPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPk422ApplicationJsonObject?: DeleteDatasetPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPk500ApplicationJsonObject?: DeleteDatasetPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
