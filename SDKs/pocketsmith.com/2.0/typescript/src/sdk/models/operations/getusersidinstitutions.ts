import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdInstitutionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdInstitutionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdInstitutionsPathParams;
}


export class GetUsersIdInstitutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Institution })
  institutions?: shared.Institution[];

  @Metadata()
  statusCode: number;
}
