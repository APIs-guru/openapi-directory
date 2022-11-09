import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetQueryExtensionExtensionEnum {
    Atom = "atom"
,    Rss = "rss"
,    Html = "html"
,    Json = "json"
}


export class GetQueryExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=extension" })
  extension: GetQueryExtensionExtensionEnum;
}


export class GetQueryExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inUrlPrefixes" })
  inUrlPrefixes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subdomains" })
  subdomains?: string;
}


export class GetQueryExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryExtensionPathParams;

  @Metadata()
  queryParams: GetQueryExtensionQueryParams;
}


export class GetQueryExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
