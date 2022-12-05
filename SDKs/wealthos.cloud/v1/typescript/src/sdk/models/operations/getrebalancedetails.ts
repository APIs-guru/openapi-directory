import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRebalanceDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rebalance_request_id" })
  rebalanceRequestId: string;
}


export class GetRebalanceDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetRebalanceDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetRebalanceDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRebalanceDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetRebalanceDetailsHeaders;

  @SpeakeasyMetadata()
  security: GetRebalanceDetailsSecurity;
}


export class GetRebalanceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRebalanceDetails200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getRebalanceDetails500ApplicationJsonAny?: any;
}
