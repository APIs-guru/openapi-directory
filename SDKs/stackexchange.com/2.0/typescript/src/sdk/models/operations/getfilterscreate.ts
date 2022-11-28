import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFiltersCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base" })
  base?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unsafe" })
  unsafe?: boolean;
}


export class GetFiltersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFiltersCreateQueryParams;
}


export class GetFiltersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
