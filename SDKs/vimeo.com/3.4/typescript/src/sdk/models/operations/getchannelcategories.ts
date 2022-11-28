import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class GetChannelCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCategoriesPathParams;
}


export class GetChannelCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
