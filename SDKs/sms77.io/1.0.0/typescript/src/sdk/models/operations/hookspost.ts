import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HooksPostActionEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe"
}

export enum HooksPostEventTypeEnum {
    All = "all",
    SmsMo = "sms_mo",
    Dlr = "dlr",
    VoiceStatus = "voice_status"
}

export enum HooksPostRequestMethodEnum {
    Post = "POST",
    Json = "JSON",
    Get = "GET"
}


export class HooksPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: HooksPostActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: HooksPostEventTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_method" })
  requestMethod?: HooksPostRequestMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_url" })
  targetUrl?: string;
}


export class HooksPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class HooksPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HooksPostQueryParams;
}


export class HooksPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hooksPost200ApplicationJsonObject?: HooksPost200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
