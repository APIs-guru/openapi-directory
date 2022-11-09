import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserSubscribedToChannelAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class CheckIfUserSubscribedToChannelAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserSubscribedToChannelAlt1PathParams;
}


export class CheckIfUserSubscribedToChannelAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
