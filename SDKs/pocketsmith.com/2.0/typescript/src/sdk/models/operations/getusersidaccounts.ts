import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdAccountsPathParams;
}


export class GetUsersIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
