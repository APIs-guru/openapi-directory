import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCategoriesPathParams;
}


export class GetVideoCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
