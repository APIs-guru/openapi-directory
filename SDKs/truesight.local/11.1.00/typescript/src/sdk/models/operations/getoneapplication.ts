import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOneApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;
}


export class GetOneApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOneApplicationPathParams;
}


export class GetOneApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
