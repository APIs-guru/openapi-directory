import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsIdPathParams;
}


export class GetTransactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTransactionResponse?: shared.GetTransactionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
