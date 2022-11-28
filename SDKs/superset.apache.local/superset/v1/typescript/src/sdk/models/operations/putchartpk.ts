import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutChartPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutChartPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutChartPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.ChartRestApiPut;
}


export class PutChartPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutChartPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutChartPkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChartRestApiPut;

  @SpeakeasyMetadata()
  security: PutChartPkSecurity;
}


export class PutChartPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putChartPk200ApplicationJsonObject?: PutChartPk200ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk400ApplicationJsonObject?: PutChartPk400ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk401ApplicationJsonObject?: PutChartPk401ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk403ApplicationJsonObject?: PutChartPk403ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk404ApplicationJsonObject?: PutChartPk404ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk422ApplicationJsonObject?: PutChartPk422ApplicationJson;

  @SpeakeasyMetadata()
  putChartPk500ApplicationJsonObject?: PutChartPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
