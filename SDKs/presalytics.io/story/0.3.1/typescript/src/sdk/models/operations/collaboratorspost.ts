import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollaboratorsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CollaboratorsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PermissionType })
  permissionTypes?: shared.PermissionType[];

  @SpeakeasyMetadata()
  problemDetail?: any;
}
