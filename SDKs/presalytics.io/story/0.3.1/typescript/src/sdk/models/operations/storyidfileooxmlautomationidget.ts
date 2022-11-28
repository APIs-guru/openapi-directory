import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdFileOoxmlautomationidGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ooxml_automation_id" })
  ooxmlAutomationId: string;
}


export class StoryIdFileOoxmlautomationidGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdFileOoxmlautomationidGetPathParams;
}


export class StoryIdFileOoxmlautomationidGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  excelSpreadsheet?: Uint8Array;

  @SpeakeasyMetadata()
  powerpointPresentation?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wordDocument?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
