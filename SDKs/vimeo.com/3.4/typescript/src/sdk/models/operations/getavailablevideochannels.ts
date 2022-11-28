import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailableVideoChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetAvailableVideoChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAvailableVideoChannelsPathParams;
}


export class GetAvailableVideoChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
