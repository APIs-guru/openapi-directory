import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HooksGetActionEnum {
    Read = "read"
}


export class HooksGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: HooksGetActionEnum;
}


export class HooksGet200ApplicationJsonHooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=request_method" })
  requestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class HooksGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hooks", elemType: HooksGet200ApplicationJsonHooks })
  hooks?: HooksGet200ApplicationJsonHooks[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class HooksGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HooksGetQueryParams;
}


export class HooksGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hooksGet200ApplicationJsonObject?: HooksGet200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
