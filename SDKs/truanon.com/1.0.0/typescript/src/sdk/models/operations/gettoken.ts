import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class GetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTokenQueryParams;
}


export class GetTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
