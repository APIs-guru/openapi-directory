import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delay" })
  delay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=details" })
  details?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flash" })
  flash?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foreign_id" })
  foreignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json" })
  json?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=no_reload" })
  noReload?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=performance_tracking" })
  performanceTracking?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return_msg_id" })
  returnMsgId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=udh" })
  udh?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unicode" })
  unicode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utf8" })
  utf8?: number;
}


export class Sms200ApplicationJsonMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: string[];

  @SpeakeasyMetadata({ data: "json, name=parts" })
  parts?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient?: string;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}

export enum Sms200ApplicationJsonSmsTypeEnum {
    Economy = "economy",
    Direct = "direct"
}


export class Sms200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Sms200ApplicationJsonMessages })
  messages?: Sms200ApplicationJsonMessages[];

  @SpeakeasyMetadata({ data: "json, name=sms_type" })
  smsType?: Sms200ApplicationJsonSmsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: string;

  @SpeakeasyMetadata({ data: "json, name=total_price" })
  totalPrice?: number;
}


export class SmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SmsQueryParams;
}


export class SmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sms200ApplicationJsonObject?: Sms200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
