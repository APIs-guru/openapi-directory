import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeFromChannelAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class UnsubscribeFromChannelAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnsubscribeFromChannelAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeFromChannelAlt1PathParams;

  @Metadata()
  security: UnsubscribeFromChannelAlt1Security;
}


export class UnsubscribeFromChannelAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
