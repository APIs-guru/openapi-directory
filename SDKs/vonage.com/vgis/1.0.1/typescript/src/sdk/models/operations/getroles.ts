import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRolesPathParams;
}


export class GetRolesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
