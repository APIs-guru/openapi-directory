import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryQueryParams extends SpeakeasyBase {
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


export class GetQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryQueryParams;
}


export class GetQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
