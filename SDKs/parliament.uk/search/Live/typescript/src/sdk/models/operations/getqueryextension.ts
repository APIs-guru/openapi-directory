import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetQueryExtensionExtensionEnum {
    Atom = "atom",
    Rss = "rss",
    Html = "html",
    Json = "json"
}


export class GetQueryExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=extension" })
  extension: GetQueryExtensionExtensionEnum;
}


export class GetQueryExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inUrlPrefixes" })
  inUrlPrefixes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdomains" })
  subdomains?: string;
}


export class GetQueryExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryExtensionQueryParams;
}


export class GetQueryExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
