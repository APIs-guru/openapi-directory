import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInstitutionsIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetInstitutionsIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstitutionsIdAccountsPathParams;
}


export class GetInstitutionsIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
