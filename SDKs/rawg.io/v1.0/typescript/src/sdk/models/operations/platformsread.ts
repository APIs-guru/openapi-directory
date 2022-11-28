import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlatformsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PlatformsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlatformsReadPathParams;
}


export class PlatformsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  platformSingle?: shared.PlatformSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
