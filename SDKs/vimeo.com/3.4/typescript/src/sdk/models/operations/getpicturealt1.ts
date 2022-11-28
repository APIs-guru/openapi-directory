import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPictureAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;
}


export class GetPictureAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPictureAlt1PathParams;
}


export class GetPictureAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
