import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdRevealPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdRevealRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdRevealPathParams;
}


export class StoryIdRevealResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  loginButton?: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  revealJsPresenation?: string;
}
