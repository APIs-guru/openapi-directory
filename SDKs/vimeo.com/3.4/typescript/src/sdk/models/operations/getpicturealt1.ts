import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPictureAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;
}


export class GetPictureAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPictureAlt1PathParams;
}


export class GetPictureAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
