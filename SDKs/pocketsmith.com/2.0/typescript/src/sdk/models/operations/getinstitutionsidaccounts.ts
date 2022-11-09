import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstitutionsIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInstitutionsIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstitutionsIdAccountsPathParams;
}


export class GetInstitutionsIdAccountsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
