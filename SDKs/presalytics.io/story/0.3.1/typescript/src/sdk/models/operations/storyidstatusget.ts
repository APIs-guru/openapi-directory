import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdStatusGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdStatusGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdStatusGetPathParams;
}


export class StoryIdStatusGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  status?: any;
}
