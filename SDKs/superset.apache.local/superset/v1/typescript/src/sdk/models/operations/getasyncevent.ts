import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAsyncEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=last_id" })
  lastId?: string;
}


export class GetAsyncEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAsyncEventRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAsyncEventQueryParams;

  @Metadata()
  security: GetAsyncEventSecurity;
}


export class GetAsyncEvent200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel_id" })
  channelId?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=job_id" })
  jobId?: string;

  @Metadata({ data: "json, name=result_url" })
  resultUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}


export class GetAsyncEvent200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetAsyncEvent200ApplicationJsonResult })
  result?: GetAsyncEvent200ApplicationJsonResult[];
}


export class GetAsyncEvent401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAsyncEvent500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAsyncEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAsyncEvent200ApplicationJsonObject?: GetAsyncEvent200ApplicationJson;

  @Metadata()
  getAsyncEvent401ApplicationJsonObject?: GetAsyncEvent401ApplicationJson;

  @Metadata()
  getAsyncEvent500ApplicationJsonObject?: GetAsyncEvent500ApplicationJson;

  @Metadata()
  statusCode: number;
}
