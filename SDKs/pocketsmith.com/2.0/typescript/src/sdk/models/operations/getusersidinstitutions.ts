import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdInstitutionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdInstitutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdInstitutionsPathParams;
}


export class GetUsersIdInstitutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Institution })
  institutions?: shared.Institution[];

  @SpeakeasyMetadata()
  statusCode: number;
}
