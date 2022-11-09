import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvailableVideoChannelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetAvailableVideoChannelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAvailableVideoChannelsPathParams;
}


export class GetAvailableVideoChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
