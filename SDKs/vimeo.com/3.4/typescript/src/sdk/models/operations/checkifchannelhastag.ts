import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfChannelHasTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class CheckIfChannelHasTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfChannelHasTagPathParams;
}


export class CheckIfChannelHasTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
