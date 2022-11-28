import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteCustomTypeCountryEnum {
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    All = "ALL"
}


export class DeleteCustomTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: DeleteCustomTypeCountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;
}


export class DeleteCustomTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteCustomTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteCustomTypeQueryParams;

  @SpeakeasyMetadata()
  security: DeleteCustomTypeSecurity;
}


export class DeleteCustomTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
