import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PicoLoadmanagementGroupGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoLoadmanagementGroupGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PicoLoadmanagementGroupGetPathParams;
}


export class PicoLoadmanagementGroupGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  picoLoadmanagementGroupDto?: shared.PicoLoadmanagementGroupDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
