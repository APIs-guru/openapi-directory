import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveChannelModeratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RemoveChannelModeratorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveChannelModeratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveChannelModeratorPathParams;

  @SpeakeasyMetadata()
  security: RemoveChannelModeratorSecurity;
}


export class RemoveChannelModeratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
