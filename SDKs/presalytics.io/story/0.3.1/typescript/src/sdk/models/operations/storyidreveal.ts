import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdRevealPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdRevealRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdRevealPathParams;
}


export class StoryIdRevealResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  loginButton?: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  revealJsPresenation?: string;
}
