import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApplicationChargeRequestBodyApplicationCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_charge_source_id" })
  applicationChargeSourceId?: string;
}


export class PostApplicationChargeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_charge" })
  applicationCharge?: PostApplicationChargeRequestBodyApplicationCharge;
}


export class PostApplicationChargeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostApplicationCharge201ApplicationJsonApplicationCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=make_date" })
  makeDate?: number;

  @SpeakeasyMetadata({ data: "json, name=point" })
  point?: number;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: number;
}


export class PostApplicationCharge201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_charge" })
  applicationCharge?: PostApplicationCharge201ApplicationJsonApplicationCharge;
}


export class PostApplicationChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostApplicationChargeRequestBody;

  @SpeakeasyMetadata()
  security: PostApplicationChargeSecurity;
}


export class PostApplicationChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postApplicationCharge201ApplicationJsonObject?: PostApplicationCharge201ApplicationJson;
}
