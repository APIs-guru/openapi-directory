import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoPrivacyUsersAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoPrivacyUsersAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoPrivacyUsersAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoPrivacyUsersAlt1PathParams;

  @Metadata()
  security: AddVideoPrivacyUsersAlt1Security;
}


export class AddVideoPrivacyUsersAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
