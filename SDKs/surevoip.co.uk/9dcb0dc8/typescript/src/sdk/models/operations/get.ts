import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetContentTypeEnum {
    ApplicationJson = "application/json",
    TextHtml = "text/html",
    TextXml = "text/xml",
    ApplicationXml = "application/xml"
}

export enum GetHypermediaEnum {
    Yes = "yes",
    No = "no"
}


export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content-type" })
  contentType?: GetContentTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hypermedia" })
  hypermedia?: GetHypermediaEnum;
}

export enum Get200ApplicationJsonStatusEnum {
    Ok = "OK"
}


export class Get200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Get200ApplicationJsonStatusEnum;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  get200ApplicationJsonObject?: Get200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
