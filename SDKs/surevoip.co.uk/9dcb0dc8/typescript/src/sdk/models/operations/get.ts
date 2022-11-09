import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetContentTypeEnum {
    ApplicationJson = "application/json"
,    TextHtml = "text/html"
,    TextXml = "text/xml"
,    ApplicationXml = "application/xml"
}

export enum GetHypermediaEnum {
    Yes = "yes"
,    No = "no"
}


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=content-type" })
  contentType?: GetContentTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hypermedia" })
  hypermedia?: GetHypermediaEnum;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryParams;
}

export enum Get200ApplicationJsonStatusEnum {
    Ok = "OK"
}


export class Get200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: Get200ApplicationJsonStatusEnum;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  get200ApplicationJsonObject?: Get200ApplicationJson;

  @Metadata()
  statusCode: number;
}
