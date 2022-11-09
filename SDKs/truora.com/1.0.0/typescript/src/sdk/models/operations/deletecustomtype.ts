import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCustomTypeCountryEnum {
    Br = "BR"
,    Cl = "CL"
,    Co = "CO"
,    Cr = "CR"
,    Ec = "EC"
,    Mx = "MX"
,    Pe = "PE"
,    All = "ALL"
}


export class DeleteCustomTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: DeleteCustomTypeCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class DeleteCustomTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteCustomTypeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteCustomTypeQueryParams;

  @Metadata()
  security: DeleteCustomTypeSecurity;
}


export class DeleteCustomTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
