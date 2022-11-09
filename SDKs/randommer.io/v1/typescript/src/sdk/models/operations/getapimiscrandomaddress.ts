import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiMiscRandomAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=culture" })
  culture?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetApiMiscRandomAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiMiscRandomAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiMiscRandomAddressQueryParams;

  @Metadata()
  headers: GetApiMiscRandomAddressHeaders;
}


export class GetApiMiscRandomAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
