import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminMappingsSaveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
