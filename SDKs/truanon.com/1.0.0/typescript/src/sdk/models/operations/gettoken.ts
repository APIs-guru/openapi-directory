import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class GetTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTokenQueryParams;
}


export class GetTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
