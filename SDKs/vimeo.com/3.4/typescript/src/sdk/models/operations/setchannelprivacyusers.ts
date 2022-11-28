import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetChannelPrivacyUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class SetChannelPrivacyUsersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=users" })
  users: string[];
}


export class SetChannelPrivacyUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetChannelPrivacyUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetChannelPrivacyUsersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.user+json" })
  request: SetChannelPrivacyUsersRequestBody;

  @SpeakeasyMetadata()
  security: SetChannelPrivacyUsersSecurity;
}


export class SetChannelPrivacyUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
