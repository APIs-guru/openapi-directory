import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoryIdFileOoxmlautomationidGetPathParams extends SpeakeasyBase {
    id: string;
    ooxmlAutomationId: string;
}
export declare class StoryIdFileOoxmlautomationidGetRequest extends SpeakeasyBase {
    pathParams: StoryIdFileOoxmlautomationidGetPathParams;
}
export declare class StoryIdFileOoxmlautomationidGetResponse extends SpeakeasyBase {
    contentType: string;
    excelSpreadsheet?: Uint8Array;
    powerpointPresentation?: Uint8Array;
    statusCode: number;
    wordDocument?: Uint8Array;
    problemDetail?: any;
}
