import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnsubscribeFromChannelAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class UnsubscribeFromChannelAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnsubscribeFromChannelAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnsubscribeFromChannelAlt1PathParams;

  @SpeakeasyMetadata()
  security: UnsubscribeFromChannelAlt1Security;
}


export class UnsubscribeFromChannelAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
