import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HooksPostActionEnum {
    Subscribe = "subscribe"
,    Unsubscribe = "unsubscribe"
}

export enum HooksPostEventTypeEnum {
    All = "all"
,    SmsMo = "sms_mo"
,    Dlr = "dlr"
,    VoiceStatus = "voice_status"
}

export enum HooksPostRequestMethodEnum {
    Post = "POST"
,    Json = "JSON"
,    Get = "GET"
}


export class HooksPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: HooksPostActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: HooksPostEventTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=request_method" })
  requestMethod?: HooksPostRequestMethodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_url" })
  targetUrl?: string;
}


export class HooksPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: HooksPostQueryParams;
}


export class HooksPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class HooksPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hooksPost200ApplicationJsonObject?: HooksPost200ApplicationJson;

  @Metadata()
  statusCode: number;
}
