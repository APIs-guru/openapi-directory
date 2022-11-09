import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdFileOoxmlautomationidDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ooxml_automation_id" })
  ooxmlAutomationId: string;
}


export class StoryIdFileOoxmlautomationidDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdFileOoxmlautomationidDeletePathParams;
}


export class StoryIdFileOoxmlautomationidDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
