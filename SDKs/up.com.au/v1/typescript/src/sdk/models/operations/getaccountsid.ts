import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAccountsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsIdPathParams;
}


export class GetAccountsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountResponse?: shared.GetAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
