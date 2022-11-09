import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRenderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRenderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetRenderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRenderPathParams;

  @Metadata()
  security: GetRenderSecurity;
}


export class GetRenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  renderResponse?: shared.RenderResponse;

  @Metadata()
  statusCode: number;
}
