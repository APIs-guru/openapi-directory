import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDatasetPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatasetPkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=override_columns" })
  overrideColumns?: boolean;
}


export class PutDatasetPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatasetPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DatasetRestApiPut;
}


export class PutDatasetPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDatasetPkPathParams;

  @SpeakeasyMetadata()
  queryParams: PutDatasetPkQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatasetRestApiPut;

  @SpeakeasyMetadata()
  security: PutDatasetPkSecurity;
}


export class PutDatasetPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putDatasetPk200ApplicationJsonObject?: PutDatasetPk200ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk400ApplicationJsonObject?: PutDatasetPk400ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk401ApplicationJsonObject?: PutDatasetPk401ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk403ApplicationJsonObject?: PutDatasetPk403ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk404ApplicationJsonObject?: PutDatasetPk404ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk422ApplicationJsonObject?: PutDatasetPk422ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPk500ApplicationJsonObject?: PutDatasetPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
