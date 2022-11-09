import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUsersIdAccountsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts: shared.Account[];
}


export class PutUsersIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersIdAccountsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutUsersIdAccountsRequestBody;
}


export class PutUsersIdAccountsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
