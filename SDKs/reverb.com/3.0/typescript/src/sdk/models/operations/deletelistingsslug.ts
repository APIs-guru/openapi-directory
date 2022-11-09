import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteListingsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteListingsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteListingsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteListingsSlugPathParams;

  @Metadata()
  security: DeleteListingsSlugSecurity;
}


export class DeleteListingsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
