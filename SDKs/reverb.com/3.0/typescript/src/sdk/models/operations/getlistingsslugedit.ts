import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsSlugEditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugEditSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsSlugEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsSlugEditPathParams;

  @SpeakeasyMetadata()
  security: GetListingsSlugEditSecurity;
}


export class GetListingsSlugEditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
