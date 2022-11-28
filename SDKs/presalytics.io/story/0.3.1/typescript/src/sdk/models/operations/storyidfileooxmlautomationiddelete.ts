import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdFileOoxmlautomationidDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ooxml_automation_id" })
  ooxmlAutomationId: string;
}


export class StoryIdFileOoxmlautomationidDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdFileOoxmlautomationidDeletePathParams;
}


export class StoryIdFileOoxmlautomationidDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
