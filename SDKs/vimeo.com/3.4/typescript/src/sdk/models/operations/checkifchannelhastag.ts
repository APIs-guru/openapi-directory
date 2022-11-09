import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfChannelHasTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class CheckIfChannelHasTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfChannelHasTagPathParams;
}


export class CheckIfChannelHasTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;
}
