import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryOutlineSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schema_version" })
  schemaVersion: string;
}


export class StoryOutlineSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryOutlineSchemaPathParams;
}


export class StoryOutlineSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
