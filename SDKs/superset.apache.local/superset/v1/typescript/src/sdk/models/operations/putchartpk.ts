import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutChartPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutChartPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutChartPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutChartPkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChartRestApiPut;

  @Metadata()
  security: PutChartPkSecurity;
}


export class PutChartPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.ChartRestApiPut;
}


export class PutChartPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putChartPk200ApplicationJsonObject?: PutChartPk200ApplicationJson;

  @Metadata()
  putChartPk400ApplicationJsonObject?: PutChartPk400ApplicationJson;

  @Metadata()
  putChartPk401ApplicationJsonObject?: PutChartPk401ApplicationJson;

  @Metadata()
  putChartPk403ApplicationJsonObject?: PutChartPk403ApplicationJson;

  @Metadata()
  putChartPk404ApplicationJsonObject?: PutChartPk404ApplicationJson;

  @Metadata()
  putChartPk422ApplicationJsonObject?: PutChartPk422ApplicationJson;

  @Metadata()
  putChartPk500ApplicationJsonObject?: PutChartPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
