import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HooksGetActionEnum {
    Read = "read"
}


export class HooksGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: HooksGetActionEnum;
}


export class HooksGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: HooksGetQueryParams;
}


export class HooksGet200ApplicationJsonHooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=event_type" })
  eventType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: string;

  @Metadata({ data: "json, name=target_url" })
  targetUrl?: string;
}


export class HooksGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=hooks", elemType: operations.HooksGet200ApplicationJsonHooks })
  hooks?: HooksGet200ApplicationJsonHooks[];

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class HooksGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hooksGet200ApplicationJsonObject?: HooksGet200ApplicationJson;

  @Metadata()
  statusCode: number;
}
