import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDashboardPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDashboardPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDashboardPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DashboardRestApiPut;
}


export class PutDashboardPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDashboardPkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DashboardRestApiPut;

  @SpeakeasyMetadata()
  security: PutDashboardPkSecurity;
}


export class PutDashboardPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putDashboardPk200ApplicationJsonObject?: PutDashboardPk200ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk400ApplicationJsonObject?: PutDashboardPk400ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk401ApplicationJsonObject?: PutDashboardPk401ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk403ApplicationJsonObject?: PutDashboardPk403ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk404ApplicationJsonObject?: PutDashboardPk404ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk422ApplicationJsonObject?: PutDashboardPk422ApplicationJson;

  @SpeakeasyMetadata()
  putDashboardPk500ApplicationJsonObject?: PutDashboardPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
