import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PermissionId" })
  permissionId: string;
}


export class PutPermissionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPermissionPathParams;

  @SpeakeasyMetadata()
  headers: PutPermissionHeaders;
}


export class PutPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  permission?: shared.Permission;

  @SpeakeasyMetadata()
  statusCode: number;
}
