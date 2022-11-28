import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomLogoAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logo_id" })
  logoId: number;
}


export class GetCustomLogoAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomLogoAlt1PathParams;
}


export class GetCustomLogoAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
