import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRolesPathParams;
}


export class GetRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Call })
  calls?: shared.Call[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
