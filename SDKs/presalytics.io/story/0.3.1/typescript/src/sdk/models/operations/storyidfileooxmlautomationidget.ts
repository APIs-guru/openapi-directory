import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdFileOoxmlautomationidGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ooxml_automation_id" })
  ooxmlAutomationId: string;
}


export class StoryIdFileOoxmlautomationidGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdFileOoxmlautomationidGetPathParams;
}


export class StoryIdFileOoxmlautomationidGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  excelSpreadsheet?: Uint8Array;

  @Metadata()
  powerpointPresentation?: Uint8Array;

  @Metadata()
  statusCode: number;

  @Metadata()
  wordDocument?: Uint8Array;

  @Metadata()
  problemDetail?: any;
}
