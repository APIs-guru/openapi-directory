import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switch_transaction_id" })
  switchTransactionId: string;
}


export class GetSwitchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_details" })
  includeDetails?: boolean;
}


export class GetSwitchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSwitchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSwitchQueryParams;

  @SpeakeasyMetadata()
  headers: GetSwitchHeaders;

  @SpeakeasyMetadata()
  security: GetSwitchSecurity;
}


export class GetSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSwitch200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getSwitch500ApplicationJsonAny?: any;
}
