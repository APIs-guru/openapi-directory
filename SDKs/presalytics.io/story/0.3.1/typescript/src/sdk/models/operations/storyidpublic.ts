import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdPublicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdPublicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdPublicPathParams;
}


export class StoryIdPublicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  revealJsPresenation?: string;
}
