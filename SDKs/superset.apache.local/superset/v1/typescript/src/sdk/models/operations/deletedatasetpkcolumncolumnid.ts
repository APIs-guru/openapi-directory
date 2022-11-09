import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatasetPkColumnColumnIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkColumnColumnIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPkColumnColumnIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatasetPkColumnColumnIdPathParams;

  @Metadata()
  security: DeleteDatasetPkColumnColumnIdSecurity;
}


export class DeleteDatasetPkColumnColumnId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkColumnColumnIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDatasetPkColumnColumnId200ApplicationJsonObject?: DeleteDatasetPkColumnColumnId200ApplicationJson;

  @Metadata()
  deleteDatasetPkColumnColumnId401ApplicationJsonObject?: DeleteDatasetPkColumnColumnId401ApplicationJson;

  @Metadata()
  deleteDatasetPkColumnColumnId403ApplicationJsonObject?: DeleteDatasetPkColumnColumnId403ApplicationJson;

  @Metadata()
  deleteDatasetPkColumnColumnId404ApplicationJsonObject?: DeleteDatasetPkColumnColumnId404ApplicationJson;

  @Metadata()
  deleteDatasetPkColumnColumnId422ApplicationJsonObject?: DeleteDatasetPkColumnColumnId422ApplicationJson;

  @Metadata()
  deleteDatasetPkColumnColumnId500ApplicationJsonObject?: DeleteDatasetPkColumnColumnId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
