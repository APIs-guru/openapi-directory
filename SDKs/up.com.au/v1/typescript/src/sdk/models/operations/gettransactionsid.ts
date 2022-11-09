import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionsIdPathParams;
}


export class GetTransactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTransactionResponse?: shared.GetTransactionResponse;

  @Metadata()
  statusCode: number;
}
