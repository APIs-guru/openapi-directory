import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DevelopersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DevelopersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DevelopersReadPathParams;
}


export class DevelopersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  developerSingle?: shared.DeveloperSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
