import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkFunctionNamesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkFunctionNamesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkFunctionNamesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkFunctionNamesPathParams;

  @Metadata()
  security: GetDatabasePkFunctionNamesSecurity;
}


export class GetDatabasePkFunctionNames401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNames404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNames500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkFunctionNamesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  databaseFunctionNamesResponse?: shared.DatabaseFunctionNamesResponse;

  @Metadata()
  getDatabasePkFunctionNames401ApplicationJsonObject?: GetDatabasePkFunctionNames401ApplicationJson;

  @Metadata()
  getDatabasePkFunctionNames404ApplicationJsonObject?: GetDatabasePkFunctionNames404ApplicationJson;

  @Metadata()
  getDatabasePkFunctionNames500ApplicationJsonObject?: GetDatabasePkFunctionNames500ApplicationJson;

  @Metadata()
  statusCode: number;
}
