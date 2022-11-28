import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfUserSubscribedToChannelAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class CheckIfUserSubscribedToChannelAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfUserSubscribedToChannelAlt1PathParams;
}


export class CheckIfUserSubscribedToChannelAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
