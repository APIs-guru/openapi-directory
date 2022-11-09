import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV2LocationsLocationIdTransactionsTransactionIdRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=transaction_id" })
  transactionId: string;
}


export class PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV2LocationsLocationIdTransactionsTransactionIdRefundPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRefundRequest;

  @Metadata()
  security: PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity;
}


export class PostV2LocationsLocationIdTransactionsTransactionIdRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRefundResponse?: shared.CreateRefundResponse;

  @Metadata()
  statusCode: number;
}
