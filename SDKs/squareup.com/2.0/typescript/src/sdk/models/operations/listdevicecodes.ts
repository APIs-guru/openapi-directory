import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDeviceCodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class ListDeviceCodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListDeviceCodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDeviceCodesQueryParams;

  @Metadata()
  security: ListDeviceCodesSecurity;
}


export class ListDeviceCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDeviceCodesResponse?: shared.ListDeviceCodesResponse;

  @Metadata()
  statusCode: number;
}
