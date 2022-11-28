import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HealthCheckHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class HealthCheck200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allGood" })
  allGood?: boolean;

  @SpeakeasyMetadata({ data: "json, name=capiOk" })
  capiOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dbOk" })
  dbOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memcachedOk" })
  memcachedOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class HealthCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: HealthCheckHeaders;
}


export class HealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  healthCheck200ApplicationJsonObject?: HealthCheck200ApplicationJson;
}
