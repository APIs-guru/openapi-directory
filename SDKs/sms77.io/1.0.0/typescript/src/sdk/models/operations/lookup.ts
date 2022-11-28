import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LookupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=number" })
  number: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class LookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LookupQueryParams;
}


export class LookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
