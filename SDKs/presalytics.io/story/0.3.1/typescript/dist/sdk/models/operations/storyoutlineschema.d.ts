import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoryOutlineSchemaPathParams extends SpeakeasyBase {
    schemaVersion: string;
}
export declare class StoryOutlineSchemaRequest extends SpeakeasyBase {
    pathParams: StoryOutlineSchemaPathParams;
}
export declare class StoryOutlineSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
}
