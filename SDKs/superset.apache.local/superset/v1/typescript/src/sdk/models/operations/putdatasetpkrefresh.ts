import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDatasetPkRefreshPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatasetPkRefreshSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatasetPkRefresh200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefresh500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatasetPkRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDatasetPkRefreshPathParams;

  @SpeakeasyMetadata()
  security: PutDatasetPkRefreshSecurity;
}


export class PutDatasetPkRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putDatasetPkRefresh200ApplicationJsonObject?: PutDatasetPkRefresh200ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPkRefresh401ApplicationJsonObject?: PutDatasetPkRefresh401ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPkRefresh403ApplicationJsonObject?: PutDatasetPkRefresh403ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPkRefresh404ApplicationJsonObject?: PutDatasetPkRefresh404ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPkRefresh422ApplicationJsonObject?: PutDatasetPkRefresh422ApplicationJson;

  @SpeakeasyMetadata()
  putDatasetPkRefresh500ApplicationJsonObject?: PutDatasetPkRefresh500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
