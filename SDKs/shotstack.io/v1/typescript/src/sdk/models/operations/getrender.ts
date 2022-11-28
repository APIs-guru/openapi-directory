import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRenderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRenderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: shared.SchemeDeveloperKey;
}


export class GetRenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRenderPathParams;

  @SpeakeasyMetadata()
  security: GetRenderSecurity;
}


export class GetRenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  renderResponse?: shared.RenderResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
