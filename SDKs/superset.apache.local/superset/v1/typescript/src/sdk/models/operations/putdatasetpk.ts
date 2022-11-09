import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDatasetPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatasetPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=override_columns" })
  overrideColumns?: boolean;
}


export class PutDatasetPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatasetPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDatasetPkPathParams;

  @Metadata()
  queryParams: PutDatasetPkQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatasetRestApiPut;

  @Metadata()
  security: PutDatasetPkSecurity;
}


export class PutDatasetPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiPut;
}


export class PutDatasetPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putDatasetPk200ApplicationJsonObject?: PutDatasetPk200ApplicationJson;

  @Metadata()
  putDatasetPk400ApplicationJsonObject?: PutDatasetPk400ApplicationJson;

  @Metadata()
  putDatasetPk401ApplicationJsonObject?: PutDatasetPk401ApplicationJson;

  @Metadata()
  putDatasetPk403ApplicationJsonObject?: PutDatasetPk403ApplicationJson;

  @Metadata()
  putDatasetPk404ApplicationJsonObject?: PutDatasetPk404ApplicationJson;

  @Metadata()
  putDatasetPk422ApplicationJsonObject?: PutDatasetPk422ApplicationJson;

  @Metadata()
  putDatasetPk500ApplicationJsonObject?: PutDatasetPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
