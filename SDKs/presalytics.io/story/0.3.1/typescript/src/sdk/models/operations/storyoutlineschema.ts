import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryOutlineSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=schema_version" })
  schemaVersion: string;
}


export class StoryOutlineSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryOutlineSchemaPathParams;
}


export class StoryOutlineSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
