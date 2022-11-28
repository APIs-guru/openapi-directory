import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdPublicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdPublicPathParams;
}


export class StoryIdPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  revealJsPresenation?: string;
}
