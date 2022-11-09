import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdAnalyticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdAnalyticsPathParams;
}


export class StoryIdAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  loginButton?: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  revealJsPresenationWithAnalyticsData?: string;
}
