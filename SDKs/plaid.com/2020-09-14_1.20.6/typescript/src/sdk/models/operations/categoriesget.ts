import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoriesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CategoriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoriesGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
