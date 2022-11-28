import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetTransactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionsIdPathParams;
}


export class GetTransactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transaction?: shared.Transaction;
}
