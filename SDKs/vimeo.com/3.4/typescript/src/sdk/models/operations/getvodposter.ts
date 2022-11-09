import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodPosterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poster_id" })
  posterId: number;
}


export class GetVodPosterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodPosterPathParams;
}


export class GetVodPosterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
