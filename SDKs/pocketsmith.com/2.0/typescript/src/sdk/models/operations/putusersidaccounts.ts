import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUsersIdAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts: shared.Account[];
}


export class PutUsersIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersIdAccountsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutUsersIdAccountsRequestBody;
}


export class PutUsersIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
