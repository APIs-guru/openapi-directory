import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdAccountsPathParams;
}


export class GetUsersIdAccountsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
