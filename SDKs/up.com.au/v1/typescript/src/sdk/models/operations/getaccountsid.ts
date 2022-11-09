import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAccountsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsIdPathParams;
}


export class GetAccountsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccountResponse?: shared.GetAccountResponse;

  @Metadata()
  statusCode: number;
}
