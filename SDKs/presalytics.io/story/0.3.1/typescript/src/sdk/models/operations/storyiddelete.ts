import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdDeletePathParams;
}


export class StoryIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
