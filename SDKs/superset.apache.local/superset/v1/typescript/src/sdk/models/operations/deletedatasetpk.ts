import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatasetPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatasetPkPathParams;

  @Metadata()
  security: DeleteDatasetPkSecurity;
}


export class DeleteDatasetPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDatasetPk200ApplicationJsonObject?: DeleteDatasetPk200ApplicationJson;

  @Metadata()
  deleteDatasetPk401ApplicationJsonObject?: DeleteDatasetPk401ApplicationJson;

  @Metadata()
  deleteDatasetPk403ApplicationJsonObject?: DeleteDatasetPk403ApplicationJson;

  @Metadata()
  deleteDatasetPk404ApplicationJsonObject?: DeleteDatasetPk404ApplicationJson;

  @Metadata()
  deleteDatasetPk422ApplicationJsonObject?: DeleteDatasetPk422ApplicationJson;

  @Metadata()
  deleteDatasetPk500ApplicationJsonObject?: DeleteDatasetPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
