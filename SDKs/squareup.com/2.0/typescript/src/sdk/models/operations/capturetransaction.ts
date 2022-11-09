import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CaptureTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class CaptureTransactionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CaptureTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CaptureTransactionPathParams;

  @Metadata()
  security: CaptureTransactionSecurity;
}


export class CaptureTransactionResponse extends SpeakeasyBase {
  @Metadata()
  captureTransactionResponse?: shared.CaptureTransactionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
