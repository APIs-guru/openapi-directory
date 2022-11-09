import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryPermissionTypesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PermissionType })
  permissionTypes?: shared.PermissionType[];

  @Metadata()
  problemDetail?: any;
}
