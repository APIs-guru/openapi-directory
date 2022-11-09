import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlatformsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PlatformsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlatformsReadPathParams;
}


export class PlatformsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  platformSingle?: shared.PlatformSingle;

  @Metadata()
  statusCode: number;
}
