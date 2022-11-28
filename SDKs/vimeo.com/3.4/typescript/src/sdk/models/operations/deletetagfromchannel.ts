import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTagFromChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class DeleteTagFromChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteTagFromChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagFromChannelPathParams;

  @SpeakeasyMetadata()
  security: DeleteTagFromChannelSecurity;
}


export class DeleteTagFromChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
