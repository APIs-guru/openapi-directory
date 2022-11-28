import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateUsageChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recurringApplicationChargeId" })
  recurringApplicationChargeId: string;
}


export class CreateUsageChargeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Appstore-Usage-Charge-Token" })
  xAppstoreUsageChargeToken?: string;
}


export class CreateUsageChargeRequestBodyUsageCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=point" })
  point: number;
}


export class CreateUsageChargeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usage_charge" })
  usageCharge?: CreateUsageChargeRequestBodyUsageCharge;
}


export class CreateUsageChargeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateUsageCharge201ApplicationJsonUsageCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=point" })
  point?: number;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateUsageCharge201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usage_charge" })
  usageCharge?: CreateUsageCharge201ApplicationJsonUsageCharge;
}


export class CreateUsageChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateUsageChargePathParams;

  @SpeakeasyMetadata()
  headers: CreateUsageChargeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateUsageChargeRequestBody;

  @SpeakeasyMetadata()
  security: CreateUsageChargeSecurity;
}


export class CreateUsageChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createUsageCharge201ApplicationJsonObject?: CreateUsageCharge201ApplicationJson;
}
