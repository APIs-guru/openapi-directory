import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LookupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=number" })
  number: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class LookupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LookupQueryParams;
}


export class LookupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
