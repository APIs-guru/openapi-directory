import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetChannelPrivacyUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class SetChannelPrivacyUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=users" })
  users: string[];
}


export class SetChannelPrivacyUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetChannelPrivacyUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetChannelPrivacyUsersPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request: SetChannelPrivacyUsersRequestBody;

  @Metadata()
  security: SetChannelPrivacyUsersSecurity;
}


export class SetChannelPrivacyUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
