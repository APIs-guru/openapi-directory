import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCspsFindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;
}


export class GetCspsFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCspsFindQueryParams;
}


export class GetCspsFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
