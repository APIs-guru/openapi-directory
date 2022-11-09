import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFiltersCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=base" })
  base?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unsafe" })
  unsafe?: boolean;
}


export class GetFiltersCreateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFiltersCreateQueryParams;
}


export class GetFiltersCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
