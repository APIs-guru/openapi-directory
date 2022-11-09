import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFiltersFiltersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filters" })
  filters: string;
}


export class GetFiltersFiltersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFiltersFiltersPathParams;
}


export class GetFiltersFiltersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
