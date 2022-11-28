import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDatasetPkColumnColumnIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkColumnColumnIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPkColumnColumnId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetPkColumnColumnIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteDatasetPkColumnColumnIdSecurity;
}


export class DeleteDatasetPkColumnColumnIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId200ApplicationJsonObject?: DeleteDatasetPkColumnColumnId200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId401ApplicationJsonObject?: DeleteDatasetPkColumnColumnId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId403ApplicationJsonObject?: DeleteDatasetPkColumnColumnId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId404ApplicationJsonObject?: DeleteDatasetPkColumnColumnId404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId422ApplicationJsonObject?: DeleteDatasetPkColumnColumnId422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkColumnColumnId500ApplicationJsonObject?: DeleteDatasetPkColumnColumnId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
