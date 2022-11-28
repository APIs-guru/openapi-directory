import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePictureAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;
}


export class DeletePictureAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeletePictureAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePictureAlt1PathParams;

  @SpeakeasyMetadata()
  security: DeletePictureAlt1Security;
}


export class DeletePictureAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
