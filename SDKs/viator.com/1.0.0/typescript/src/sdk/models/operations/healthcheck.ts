import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HealthCheckHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class HealthCheckRequest extends SpeakeasyBase {
  @Metadata()
  headers: HealthCheckHeaders;
}


export class HealthCheck200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=allGood" })
  allGood?: boolean;

  @Metadata({ data: "json, name=capiOk" })
  capiOk?: boolean;

  @Metadata({ data: "json, name=dbOk" })
  dbOk?: boolean;

  @Metadata({ data: "json, name=memcachedOk" })
  memcachedOk?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class HealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  healthCheck200ApplicationJsonObject?: HealthCheck200ApplicationJson;
}
