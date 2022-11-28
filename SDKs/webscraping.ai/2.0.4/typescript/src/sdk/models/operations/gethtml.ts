import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHtmlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=js" })
  js?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy" })
  proxy?: shared.ProxyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetHtmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHtmlQueryParams;
}


export class GetHtmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  pageError?: shared.PageError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getHtml200TextHtmlString?: string;
}
