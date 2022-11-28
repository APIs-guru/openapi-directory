import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdOutlinePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdOutlinePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdOutlinePostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class StoryIdOutlinePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
