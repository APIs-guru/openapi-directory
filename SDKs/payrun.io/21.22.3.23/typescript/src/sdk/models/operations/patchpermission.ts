import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PermissionId" })
  permissionId: string;
}


export class PatchPermissionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPermissionPathParams;

  @SpeakeasyMetadata()
  headers: PatchPermissionHeaders;
}


export class PatchPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  permission?: shared.Permission;

  @SpeakeasyMetadata()
  statusCode: number;
}
