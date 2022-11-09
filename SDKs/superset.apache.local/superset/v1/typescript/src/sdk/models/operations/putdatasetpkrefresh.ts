import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDatasetPkRefreshPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatasetPkRefreshSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatasetPkRefreshRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDatasetPkRefreshPathParams;

  @Metadata()
  security: PutDatasetPkRefreshSecurity;
}


export class PutDatasetPkRefresh200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefreshResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putDatasetPkRefresh200ApplicationJsonObject?: PutDatasetPkRefresh200ApplicationJson;

  @Metadata()
  putDatasetPkRefresh401ApplicationJsonObject?: PutDatasetPkRefresh401ApplicationJson;

  @Metadata()
  putDatasetPkRefresh403ApplicationJsonObject?: PutDatasetPkRefresh403ApplicationJson;

  @Metadata()
  putDatasetPkRefresh404ApplicationJsonObject?: PutDatasetPkRefresh404ApplicationJson;

  @Metadata()
  putDatasetPkRefresh422ApplicationJsonObject?: PutDatasetPkRefresh422ApplicationJson;

  @Metadata()
  putDatasetPkRefresh500ApplicationJsonObject?: PutDatasetPkRefresh500ApplicationJson;

  @Metadata()
  statusCode: number;
}
