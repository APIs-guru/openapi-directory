import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdOutlineGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdOutlineGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdOutlineGetPathParams;
}


export class StoryIdOutlineGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  status?: any;

  @SpeakeasyMetadata()
  storyIdOutlineGet200ApplicationJsonString?: string;
}
