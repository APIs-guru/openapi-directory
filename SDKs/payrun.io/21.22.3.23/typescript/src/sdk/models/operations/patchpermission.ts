import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PermissionId" })
  permissionId: string;
}


export class PatchPermissionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchPermissionPathParams;

  @Metadata()
  headers: PatchPermissionHeaders;
}


export class PatchPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  permission?: shared.Permission;

  @Metadata()
  statusCode: number;
}
