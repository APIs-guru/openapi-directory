import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDashboardPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDashboardPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDashboardPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDashboardPkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DashboardRestApiPut;

  @Metadata()
  security: PutDashboardPkSecurity;
}


export class PutDashboardPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DashboardRestApiPut;
}


export class PutDashboardPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDashboardPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putDashboardPk200ApplicationJsonObject?: PutDashboardPk200ApplicationJson;

  @Metadata()
  putDashboardPk400ApplicationJsonObject?: PutDashboardPk400ApplicationJson;

  @Metadata()
  putDashboardPk401ApplicationJsonObject?: PutDashboardPk401ApplicationJson;

  @Metadata()
  putDashboardPk403ApplicationJsonObject?: PutDashboardPk403ApplicationJson;

  @Metadata()
  putDashboardPk404ApplicationJsonObject?: PutDashboardPk404ApplicationJson;

  @Metadata()
  putDashboardPk422ApplicationJsonObject?: PutDashboardPk422ApplicationJson;

  @Metadata()
  putDashboardPk500ApplicationJsonObject?: PutDashboardPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
