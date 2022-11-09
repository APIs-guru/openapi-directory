import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueryQueryParams extends SpeakeasyBase {
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


export class GetQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryQueryParams;
}


export class GetQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
