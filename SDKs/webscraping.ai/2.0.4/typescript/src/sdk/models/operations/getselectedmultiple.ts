import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSelectedMultipleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=js" })
  js?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy" })
  proxy?: shared.ProxyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=selectors" })
  selectors?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeout" })
  timeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetSelectedMultipleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSelectedMultipleQueryParams;
}


export class GetSelectedMultipleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  pageError?: shared.PageError;

  @Metadata()
  selectedAreas?: string[];

  @Metadata()
  statusCode: number;
}
