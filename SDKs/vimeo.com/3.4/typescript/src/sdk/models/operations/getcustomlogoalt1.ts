import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomLogoAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logo_id" })
  logoId: number;
}


export class GetCustomLogoAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomLogoAlt1PathParams;
}


export class GetCustomLogoAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
