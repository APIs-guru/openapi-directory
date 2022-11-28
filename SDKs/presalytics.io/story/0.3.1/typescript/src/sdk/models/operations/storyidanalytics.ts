import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdAnalyticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdAnalyticsPathParams;
}


export class StoryIdAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  loginButton?: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  revealJsPresenationWithAnalyticsData?: string;
}
