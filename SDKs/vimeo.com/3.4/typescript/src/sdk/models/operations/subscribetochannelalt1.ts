import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeToChannelAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class SubscribeToChannelAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SubscribeToChannelAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscribeToChannelAlt1PathParams;

  @Metadata()
  security: SubscribeToChannelAlt1Security;
}


export class SubscribeToChannelAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
