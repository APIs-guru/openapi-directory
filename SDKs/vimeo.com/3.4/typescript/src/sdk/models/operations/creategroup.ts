import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.group+json" })
  request: CreateGroupRequestBody;

  @Metadata()
  security: CreateGroupSecurity;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  legacyError?: shared.LegacyError;
}
