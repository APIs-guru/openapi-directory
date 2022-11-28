import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAsyncEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_id" })
  lastId?: string;
}


export class GetAsyncEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAsyncEvent200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel_id" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=result_url" })
  resultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetAsyncEvent200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: GetAsyncEvent200ApplicationJsonResult })
  result?: GetAsyncEvent200ApplicationJsonResult[];
}


export class GetAsyncEvent401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAsyncEvent500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAsyncEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAsyncEventQueryParams;

  @SpeakeasyMetadata()
  security: GetAsyncEventSecurity;
}


export class GetAsyncEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAsyncEvent200ApplicationJsonObject?: GetAsyncEvent200ApplicationJson;

  @SpeakeasyMetadata()
  getAsyncEvent401ApplicationJsonObject?: GetAsyncEvent401ApplicationJson;

  @SpeakeasyMetadata()
  getAsyncEvent500ApplicationJsonObject?: GetAsyncEvent500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
