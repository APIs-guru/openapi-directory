import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCspsFindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class GetCspsFindRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCspsFindQueryParams;
}


export class GetCspsFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
