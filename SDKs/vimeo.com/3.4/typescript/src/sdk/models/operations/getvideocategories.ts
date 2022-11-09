import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoCategoriesPathParams;
}


export class GetVideoCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
