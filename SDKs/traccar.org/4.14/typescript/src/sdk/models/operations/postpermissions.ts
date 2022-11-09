import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Permission;
}


export class PostPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permission?: shared.Permission;

  @Metadata()
  statusCode: number;
}
