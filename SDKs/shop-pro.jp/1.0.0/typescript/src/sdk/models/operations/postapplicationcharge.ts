import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApplicationChargeRequestBodyApplicationCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_charge_source_id" })
  applicationChargeSourceId?: string;
}


export class PostApplicationChargeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_charge" })
  applicationCharge?: PostApplicationChargeRequestBodyApplicationCharge;
}


export class PostApplicationChargeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostApplicationChargeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostApplicationChargeRequestBody;

  @Metadata()
  security: PostApplicationChargeSecurity;
}


export class PostApplicationCharge201ApplicationJsonApplicationCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=make_date" })
  makeDate?: number;

  @Metadata({ data: "json, name=point" })
  point?: number;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class PostApplicationCharge201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_charge" })
  applicationCharge?: PostApplicationCharge201ApplicationJsonApplicationCharge;
}


export class PostApplicationChargeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postApplicationCharge201ApplicationJsonObject?: PostApplicationCharge201ApplicationJson;
}
