import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUsageChargePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recurringApplicationChargeId" })
  recurringApplicationChargeId: string;
}


export class CreateUsageChargeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Appstore-Usage-Charge-Token" })
  xAppstoreUsageChargeToken?: string;
}


export class CreateUsageChargeRequestBodyUsageCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=point" })
  point: number;
}


export class CreateUsageChargeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=usage_charge" })
  usageCharge?: CreateUsageChargeRequestBodyUsageCharge;
}


export class CreateUsageChargeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateUsageChargeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateUsageChargePathParams;

  @Metadata()
  headers: CreateUsageChargeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateUsageChargeRequestBody;

  @Metadata()
  security: CreateUsageChargeSecurity;
}


export class CreateUsageCharge201ApplicationJsonUsageCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=point" })
  point?: number;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class CreateUsageCharge201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=usage_charge" })
  usageCharge?: CreateUsageCharge201ApplicationJsonUsageCharge;
}


export class CreateUsageChargeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createUsageCharge201ApplicationJsonObject?: CreateUsageCharge201ApplicationJson;
}
