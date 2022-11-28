import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkFunctionNamesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkFunctionNamesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkFunctionNames401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNames404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNames500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkFunctionNamesPathParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkFunctionNamesSecurity;
}


export class GetDatabasePkFunctionNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  databaseFunctionNamesResponse?: shared.DatabaseFunctionNamesResponse;

  @SpeakeasyMetadata()
  getDatabasePkFunctionNames401ApplicationJsonObject?: GetDatabasePkFunctionNames401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkFunctionNames404ApplicationJsonObject?: GetDatabasePkFunctionNames404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkFunctionNames500ApplicationJsonObject?: GetDatabasePkFunctionNames500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
